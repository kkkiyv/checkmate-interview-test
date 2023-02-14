import Head from 'next/head'
import GoogleButton from 'react-google-button'
import {getAuth, signInWithRedirect,getRedirectResult, GoogleAuthProvider} from "firebase/auth";
import {useRouter} from "next/navigation";
import { initializeApp } from 'firebase/app';







// Task 0: Initialize Firebase
// Replace the following with your app's Firebase project configuration
// https://firebase.google.com/docs/web/setup
const firebaseConfig = {
  
  apiKey: "AIzaSyBYt2JhRA4oF2zHl1dLRPqDlomzC_PzGXY",
  authDomain: "checkmate-54302.firebaseapp.com",
  projectId: "checkmate-54302",
  storageBucket: "checkmate-54302.appspot.com",
  messagingSenderId: "694858094491",
  appId: "1:694858094491:web:862dc465a0bfc1c406f33e",
  measurementId: "G-M9Z6LJ829M"
  // Enter your own firebase config here
};

const app = initializeApp(firebaseConfig);


// GoogleAuthProvider instance
const provider = new GoogleAuthProvider();
// Firebase Auth instance
const auth = getAuth(app);


export default function Home() {
  //Next.js router
  const router = useRouter();

  // Task 1: Implement Google Sign in with Firebase
  // https://firebase.google.com/docs/auth/web/google-signin
  const signIn = () => {

  signInWithRedirect(auth, provider);

  router.push('/signed-in');
  
 

  getRedirectResult(auth)

      
  .then((result) => {
  if (result != null) {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
  }
 

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage)
    // ...
  });
    
    /*
      1. Use the GoogleAuthProvider to sign in with Firebase
      2. Use signInWithRedirect to redirect the user to the Google sign in page
      3. (Optional) Use getRedirectResult to get the result of the redirect and check out what is inside :)
      4. Redirect the user to the signed-in page using Next.js router
     */

  };

  return (
    <>
      <Head>
        <title>Sign in to see the public holidays in HK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <main style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
          <h1 className="title">
            Welcome to <a href="https://checkmatehk.io">CheckMate</a>
          </h1>
          <h3>Sign in to see a random programming joke 😳</h3>

          {/* Button for user to sign in with Google */}
          {/* Task 1: Implement Google Sign in with Firebase */}
          <GoogleButton
            label={'Sign in with Google'}
            type="light"
            style={{ width: '50%', display:"flex", justifyContent: 'center', alignItems: 'center', fontFamily: 'Roboto, sans-serif', color:'#444' }}
            onClick={signIn}
          />
        </main>
      </div>
      </>
  )
}
