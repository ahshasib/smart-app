
import React, { useRef, useContext } from 'react';
import { Link } from 'react-router';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { Authcontext } from '../context/AuthContext';
import Swal from 'sweetalert2';



const LoginPage = () => {

    const provider = new GoogleAuthProvider();
    const { user, setUser, loginUser } = useContext(Authcontext);

    const emailRef = useRef();
  
    // ✅ Track user even after refresh
    
    // Google login
    const handleGoogleLogin = async (e) => {
      e.preventDefault();
      try {
        const result = await signInWithPopup(auth, provider);
        const loggedUser = result.user;
        setUser({
          displayName: loggedUser.displayName || loggedUser.email.split('@')[0],
          email: loggedUser.email,
          uid: loggedUser.uid,
          photoURL: loggedUser.photoURL || null,
        });
      } catch (error) {
        console.error(error.message);
      }
    };
  
    // Email/password login
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
  
      try {
        loginUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (!user.emailVerified) {
            alert("Please verify your email first!");
            auth.signOut(); // sign out immediately
            return;
          }
          else{
            setUser({ name: user.displayName, email: user.email, uid: user.uid, });
          }
          // proceed to login
        })
        .catch((error) => {
          console.log(error.message);
          Swal.fire({
            title: "you dont have any account ,please register!",
            icon: "success",
            draggable: true
          });
        });
       
      } catch (error) {
        console.error(error.message);
      }
    };
  
    // Logout
    const handleLogout = async () => {
      await signOut(auth);
      setUser(null);
    };
  
  
  //handle forget password
  const handleForgetPass = () =>{
  const email = emailRef.current.value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
     console.log("email is sended")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return (
    <div className='flex justify-center items-center w-full h-screen'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className='text-center text-2xl bg-black text-white rounded'>Login</h1>
      <div className="card-body">
        {!user ? (
          <form className="fieldset" onSubmit={handleSubmit}>
            <label className="label">Email</label>
            <input type="email" className="input" ref={emailRef} placeholder="Email" name="email" required />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name="password" required />
            <div><a class="link link-hover" onClick={handleForgetPass}>Forgot password?</a></div>
            <button className="btn btn-neutral my-4">Login</button>
            <hr />
            <button
              className="btn bg-white text-black border-[#e5e5e5] mt-5"
              type="button"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </form>
        ) : (
          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
            <h1 className="text-xl font-bold mb-2">Welcome, {user.displayName}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            {user.photoURL && <img className="mx-auto rounded-full mt-2" src={user.photoURL} alt="profile" />}
            <button className="btn btn-error mt-3" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <Link to="/" className='btn btn-primary mt-2'><button>Home</button></Link>
    </div>
  </div>
  )
}

export default LoginPage