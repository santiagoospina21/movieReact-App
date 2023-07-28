import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRMbelTmDq2xtcFGjIre71XasgRuVd518",
  authDomain: "movie-app-d6db2.firebaseapp.com",
  projectId: "movie-app-d6db2",
  storageBucket: "movie-app-d6db2.appspot.com",
  messagingSenderId: "457176870771",
  appId: "1:457176870771:web:b0fd5184bae22afa861f06",
};

const app = initializeApp(firebaseConfig);

//Google
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//DataBase
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  await updateProfile(auth.currentUser, {
    displayName: additionalInformation.displayName,
  });

  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user");
    }
  }
  return userDocRef;
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//Close Session
export const signOutUser = async () => await signOut(auth);

//Create User with Email and Password
export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

//Save favorites in FireStore

export const saveFavoritesToFirestore = async (userAuth, favoritesData) => {
  if (!userAuth || !favoritesData) return;

  const userDocRef = doc(db, "user", userAuth.uid);

  try {
    await setDoc(
      userDocRef,
      {
        favorites: favoritesData,
      },
      { merge: true }
    ); // Usamos merge: true para que no sobreescriba todo el documento del usuario, solo el campo favorites
  } catch (error) {
    console.error("Error saving favorites to Firestore:", error);
  }
};

// Recupera los datos de "favorites" para el usuario actual desde Firestore
export const getFavoritesFromFirestore = async (userAuth) => {
  if (!userAuth) return null;

  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    return userSnapshot.data().favorites;
  } else {
    return null;
  }
};
