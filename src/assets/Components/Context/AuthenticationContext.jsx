import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../Firebase/firebase.config";
import { doc, getDoc } from 'firebase/firestore';

export const Auth = createContext(null);
const AuthenticationContext = ({ children }) => {
  const [userData,setUserData]=useState([])
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const[address,setAddress]=useState({
    fullName: '',
    address: '',
    mobileNumber: '',
    landmark: '',
    district: '',
    city: '',
    area: ''
   
  });
  const notify = (message) => {
    toast(message);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  useEffect(()=>{
    const unSubscriber= onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
       
    })
    return ()=>{
        unSubscriber()
    }

},[])

const updateAddress = (newAddress) => {
  setAddress(newAddress);
};

useEffect(() => {
  const fetchUserRole = async () => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        setRole(userDoc.data().role);
      } else {
        console.error("User document not found");
      }
    }
  };

  fetchUserRole();
}, [user]);


  const authInfo = {
    user,
    createUser,
    notify,
    loginUser,
    logOut,
    loading,
    sidebarOpen, 
    setSidebarOpen,
    role,
    setRole
    ,userData,
    setUserData,
    address,
    updateAddress
  };
  return (
    <Auth.Provider value={authInfo}>
      {children}
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        //   hideProgressBar={false}
        //   newestOnTop={false}
        //   closeOnClick
        //   rtl={false}
        //   pauseOnFocusLoss
        //   draggable
        //   pauseOnHover
        //   theme="light"
        //   transition={"Bounce"}
      />
    </Auth.Provider>
  );
};
AuthenticationContext.propTypes = {
  children: PropTypes.node,
};
export default AuthenticationContext;
