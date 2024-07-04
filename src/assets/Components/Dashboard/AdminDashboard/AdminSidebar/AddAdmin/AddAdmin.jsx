import { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { space } from "postcss/lib/list";
import { Auth } from "../../../../Context/AuthenticationContext";
import { db } from "../../../../Firebase/firebase.config";
const AddAdmin = () => {
  const { notify, createUser } = useContext(Auth);
  const [see, setSee] = useState(false);
  const handleAddAdmin = async(e) => {
    let role='admin'
    e.preventDefault();
    const adminName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const rePassword=e.target.rePassword.value;

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
    }
    else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/.test(
          rePassword
        )
        
      ) {
        notify(
            "please make a password with a combination of Uppercase,lowercase,symbol,and number more than 6 character"
          );
          return;
      }
      else if(password!==rePassword){
        notify(
            "Passwor does't match"
          );
          return;
      }
    
    

    createUser(email, password)
    .then(async (result) => {
      await sendEmailVerification(result.user);
      notify("check your email for verification");

      await updateProfile(result.user, {
        displayName: adminName,
      });

      await setDoc(doc(db, 'users', result.user.uid), {
        adminName: adminName,
        email: email,
        role: role,
      });

      notify("Admin Added Successfully");
      e.target.reset();
      
    })
     
      .catch((error) => {
        console.error(error.message);
        notify(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add Admin!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleAddAdmin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Admin Name</span>
              </label>
              <input
                type="text"
                placeholder="admin name"
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
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Retype Password</span>
              </label>
              <input
                type={see ? "text" : "password"}
                placeholder="Retyped password"
                name="rePassword"
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
            </div>
            <label className="label">
                <span className="label-text">Number</span>
              </label>
              <input
                type="number"
                placeholder="Number "
                name="number"
                className="input input-bordered relative "
                required
                autoComplete="current-password"
              />
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
