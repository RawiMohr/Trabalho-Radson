import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAc7tfUqUZnf64gEMn27EI7IRSlJhEmpNI",
  authDomain: "radson-6f74d.firebaseapp.com",
  databaseURL: "https://radson-6f74d-default-rtdb.firebaseio.com",
  projectId: "radson-6f74d",
  storageBucket: "radson-6f74d.firebasestorage.app",
  messagingSenderId: "860943609806",
  appId: "1:860943609806:web:4df6b8d680b55b8888059f",
  measurementId: "G-S1YWQFKGK1"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Exporta Auth e Firestore para usar em outros arquivos
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };