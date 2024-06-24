import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { useContext, useState } from "react";
import {
  sendEmailVerification,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
// import { auth } from "../../Firebase/firebase.config";
// import { Auth } from "../../Context/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import { Auth } from "../Context/AuthenticationContext";
import { auth } from "../Firebase/firebase.config";

const Register = () => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const { notify,createUser } = useContext(Auth);
  const [see, setSee] = useState(false);
  // const [message, setMesssage] = useState();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const condition = e.target.condition.checked;
    console.log("condition", condition);

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      notify("please give an valid email");
      return;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/.test(
        password
      )
    ) {
      notify(
        "please make a password with a combination of Uppercase,lowercase,symbol,and number more than 6 character"
      );
      return;
    } else if (!condition) {
      notify("accept terms and conditions");
      return;
    }



    createUser(email, password)
      .then((result) => {
        //send a user verification email
        sendEmailVerification(result.user).then(() => {
          notify("check your email for verification");
        });
        //update user name
        updateProfile(result.user, {
          displayName: username,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(result.user);
        notify("User created successfully");
        e.target.reset();
        // location.replace("/login")
        //after successfully register redirect to login page
        navigate("/login", { state: { fromRedirectPage: true } });
      })

      .catch((error) => {
        console.error(error.message);
        notify(error.message);
      });

    console.log(username, email, password);
  };
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        notify(`welcome ${result.user.displayName}`)
        console.log(result.user.displayName);
      })
      .catch((error) => {
        console.error(error);
        notify(error.message)
      });
  };
  const handleFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        notify(`welcome ${result.user.displayName}`)
        console.log(result.user.displayName);
      })
      .catch((error) => {
        notify(error.message)
        console.log(error);
      });
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                className="input input-bordered"
                autoComplete="name"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={see ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered relative "
                required
                autoComplete="current-password"
              />
              {see ? (
                <AiFillEye
                  className="absolute top-12  right-1"
                  onClick={() => {
                    setSee(!see);
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute top-12 right-1"
                  onClick={() => {
                    setSee(!see);
                  }}
                />
              )}
              <label className="label">
                <Link
                  to="/forgetPassword"
                  className="label-text-alt link link-hover"
                >
                  Forget Password
                </Link>
              </label>
              {/* {message && <p className="text-alert">{message}</p>} */}
              <div className="flex ">
                <input type="checkbox" name="condition" id="" />
                <label className="label ">
                  <a href="">Accept Terms and conditions</a>
                </label>
              </div>

              <p>
                Already have accocunt?
                <Link to="/login">
                  <button className="btn btn-active btn-link">Login</button>
                </Link>{" "}
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>
          </form>
          <h2 className="p-4 flex items-center gap-2 text-xl">
            Continue with
            <FcGoogle className="cursor-pointer"onClick={handleGoogle} />
            <IoLogoFacebook className="text-blue-500 cursor-pointer" onClick={handleFacebook} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
