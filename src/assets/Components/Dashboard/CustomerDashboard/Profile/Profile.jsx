import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase.config";

const Profile = () => {
  const addTestDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, "testCollection"), {
        name: "Test Document",
        created: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  addTestDocument();
  return (
    <div>
      <h2>hlw profile</h2>
    </div>
  );
};

export default Profile;
