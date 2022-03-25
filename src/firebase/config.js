import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAd1N0X-3R_zXogKmsMVtgrLZhbpubu5uU",
  authDomain: "d-gustar-ecommerce.firebaseapp.com",
  projectId: "d-gustar-ecommerce",
  storageBucket: "d-gustar-ecommerce.appspot.com",
  messagingSenderId: "218917060532",
  appId: "1:218917060532:web:89fbe48c731610aeab7ce1"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp (){
    return app
}