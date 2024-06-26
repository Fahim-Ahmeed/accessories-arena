/* eslint-disable react/no-unescaped-entities */
import { Link,useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { doc, setDoc,getDoc } from 'firebase/firestore';
import { useContext, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendEmailVerification
} from "firebase/auth";
// import { auth } from "../../Firebase/firebase.config";
import { useLocation } from "react-router-dom";
// import { Auth } from "../../Context/AuthenticationContext";
import { auth, db } from "../Firebase/firebase.config";
import { Auth } from "../Context/AuthenticationContext";

const Login = () => {
  const {notify,loginUser}=useContext(Auth)
  const role='user';
  
  const [see, setSee] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const isRedirected = location.state && location.state.fromRedirectPage;
  const from = location.state?.from?.pathname || '/';
  console.log(isRedirected);

  const handleGoogle = async() => {
    signInWithPopup(auth, googleProvider)
      .then(async(result) => {
        const userDocRef = doc(db, 'users', result.user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
          await setDoc(userDocRef, {
            username: result.user.displayName,
            email: result.user.email,
            role: 'user',
          });
        }
        notify(`welcome ${result.user.displayName}`)
        console.log(result.user.displayName);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        notify(error.message)
      });
  };

  const handleFacebook = async() => {
    signInWithPopup(auth, facebookProvider)
      .then(async(result) => {
        const userDocRef = doc(db, 'users', result.user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
          await setDoc(userDocRef, {
            username: result.user.displayName,
            email: result.user.email,
            role: 'user',
          });
        }
        notify(`welcome ${result.user.displayName}`)
        navigate(from, { replace: true });
        console.log(result.user.displayName);
      })
      await setDoc(doc(db, 'users'), {
        role: role,
      })
      .catch((error) => {
        notify(error.message)
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(async(result) => {
        const userDocRef = doc(db, 'users', result.user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
          await setDoc(userDocRef, {
            username: result.user.displayName,
            email: result.user.email,
            role: 'user',
          });
        }


        if(result.user.emailVerified){
          notify(`welcome ${result.user.displayName}`);
          navigate(from, { replace: true });
          e.target.reset()
        }
        else{
          sendEmailVerification(result.user).then(() => {
            notify("please verified your email before login");
          });
        }
        
      })
      .catch((error) => {
        notify(error.message)
        console.error(error);
      });
    console.log(email, password);
  };
 
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                autoComplete="email"
                name="email"
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
                className="input input-bordered relative "
                name="password"
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
              <p>
                you don't have any account?
                <Link to="/register">
                  <button className="btn btn-active btn-link">Register</button>
                </Link>{" "}
              </p>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <h2 className="p-4 flex items-center gap-2 text-xl">
            Continue with
            <FcGoogle className="cursor-pointer" onClick={handleGoogle} />
            <IoLogoFacebook
              className="text-blue-500 cursor-pointer"
              onClick={handleFacebook}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
