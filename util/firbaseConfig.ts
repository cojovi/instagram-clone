import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAl_yDNuHIQOvpiiWuVoqAP3OOxXzSdoAY",
  authDomain: "reel-unravel.firebaseapp.com",
  projectId: "reel-unravel",
  storageBucket: "reel-unravel.appspot.com",
  messagingSenderId: "243377426943",
  appId: "1:243377426943:web:dedbe928830d4197bed7ca",
};

const app = initializeApp(firebaseConfig);

export default app;
