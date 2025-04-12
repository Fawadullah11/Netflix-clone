
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyB6VPnPE7_D-px-PhIjt7V74oNcJday3sk",
  authDomain: "netflix-clone-d988e.firebaseapp.com",
  projectId: "netflix-clone-d988e",
  storageBucket: "netflix-clone-d988e.firebasestorage.app",
  messagingSenderId: "86936553349",
  appId: "1:86936553349:web:b268a370937b7a428b66ec"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);
const signup = async(name,email,password)=>{
  try {
    const res= await createUserWithEmailAndPassword(auth,email,password)   
    const user=res.user;
    await addDoc(collection(db,"user"),{
      uid: user.uid,
      name,
      authProvider:"local",
      email,

    });

  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));  
  }
}
const login=async(email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));   
  }
}
const logout=()=>{
      signOut(auth);
}

export{auth,signup,db,login,logout};
