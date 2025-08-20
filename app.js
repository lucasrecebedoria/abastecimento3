// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9L4GAbCGX9ySB_SYUJYjTKLmaw8bEXBc",
  authDomain: "lancamentocaixas.firebaseapp.com",
  projectId: "lancamentocaixas",
  storageBucket: "lancamentocaixas.firebasestorage.app",
  messagingSenderId: "559411456318",
  appId: "1:559411456318:web:d0525546d96302e124e46f",
  measurementId: "G-3S6K5X5WYJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exemplo: login handler
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const matricula = document.getElementById("loginMatricula").value;
  const senha = document.getElementById("loginSenha").value;
  const email = matricula + "@movebuss.local";
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    window.location.href = "index.html";
  } catch (err) {
    alert("Erro no login: " + err.message);
  }
});

// Exemplo: registro handler
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const matricula = document.getElementById("regMatricula").value;
  const nome = document.getElementById("regNome").value;
  const senha = document.getElementById("regSenha").value;
  const email = matricula + "@movebuss.local";
  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    alert("Conta criada! Faça login.");
    window.location.href = "login.html";
  } catch (err) {
    alert("Erro no cadastro: " + err.message);
  }
});

// Logout
document.getElementById("logoutBtn")?.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});
