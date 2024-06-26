import { Link,useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { doc, setDoc} from 'firebase/firestore';
import { useContext, useState } from "react";
import {
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { Auth } from "../Context/AuthenticationContext";
import {  db } from "../Firebase/firebase.config";

const Register = () => {
  const navigate = useNavigate();
  const { notify,createUser } = useContext(Auth);
  const [see, setSee] = useState(false);
 
  // const [message, setMesssage] = useState();
  const role="user";
  const handleRegister = async (e) => {
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
    .then(async (result) => {
      await sendEmailVerification(result.user);
      notify("check your email for verification");

      await updateProfile(result.user, {
        displayName: username,
      });

      await setDoc(doc(db, 'users', result.user.uid), {
        username: username,
        email: email,
        role: role,
      });

      notify("User created successfully");
      e.target.reset();
      navigate("/login", { state: { fromRedirectPage: true } });
    })
     
      .catch((error) => {
        console.error(error.message);
        notify(error.message);
      });

    console.log(username, email, password);
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
          
        </div>
      </div>
    </div>
  );
};

export default Register;
