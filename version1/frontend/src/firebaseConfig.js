import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDerDqwQnIyvctXp3HICq5u9aRtJHxSEUM",
  authDomain: "hackaton-a3f56.firebaseapp.com",
  projectId: "hackaton-a3f56",
  storageBucket: "hackaton-a3f56.appspot.com",
  messagingSenderId: "421023664323",
  appId: "1:421023664323:web:c13da0a13a1aa158c33a76",
  measurementId: "G-LFLDWFV7EE"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Función para iniciar sesión con Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error en la autenticación:", error);
  }
};

// Función para cerrar sesión
const logout = () => {
  signOut(auth);
};

//export { auth, signInWithGoogle, logout };
export { firebaseConfig, auth, signInWithGoogle, logout };
