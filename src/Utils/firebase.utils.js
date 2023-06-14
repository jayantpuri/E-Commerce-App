import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyMtUX9H00NCGYtDw0yeYZ91JdwlwLkmA",
  authDomain: "project-1-c263e.firebaseapp.com",
  projectId: "project-1-c263e",
  storageBucket: "project-1-c263e.appspot.com",
  messagingSenderId: "622099053849",
  appId: "1:622099053849:web:cde9d3ec8d854617cb1988",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const userAuthState = (callBack) => {
  onAuthStateChanged(auth, callBack);
};
export const signOutUser = async () => {
  await signOut(auth);
};

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const googlePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const createUserEmail = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const db = getFirestore();

export const addUsers = async (user) => {
  const userDoc = doc(db, "users", user.uid);
  const docSnapshot = await getDoc(userDoc);

  if (!docSnapshot.exists()) {
    const { displayName, email } = user;
    const CreatedAt = new Date();

    try {
      await setDoc(userDoc, { displayName, email, CreatedAt });
    } catch (error) {
      console.log("cannot add user");
    }
  }
  return userDoc;
};

export const addProductsToDB = async (collectionKey, ob) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  ob.forEach((item) => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
