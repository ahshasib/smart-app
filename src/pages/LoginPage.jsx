import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const provider = new GoogleAuthProvider();
  const { user, setUser, loginUser } = useContext(AuthContext);

  // 👇 New state for password visibility
  const [showPassword, setShowPassword] = useState(false);

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
            auth.signOut();
            return;
          } else {
            setUser({ displayName: user.displayName, email: user.email, uid: user.uid });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="w-full h-screen relative">
      {/* Fullscreen background image */}
      <Link to='/'><img src="/logo.png" alt="Logo" className=" absolute m-10 w-[120px] sm:w-[130px] lg:w-[147px] z-[9999] cursor-pointer" /></Link>

      <div className="flex justify-center items-center w-full h-full relative">
        <div className="w-full max-w-lg p-8">
          <h1 className="text-3xl font-bold text-center">Welcome to ScapeSync</h1>
          <p className='text-gray-600 text-md text-center mb-15 py-2'>Please share your login details so you can access the website.</p>

          {!user ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="label">Email</label>
                <input type="email" className="input input-bordered w-full" placeholder="Email" name="email" required />
              </div>

              {/* Password Field with Show/Hide */}
              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-10"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (

                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (

                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 012.586-4.25m3.114-2.07A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.043 5.197M15 12a3 3 0 01-3 3m0-6a3 3 0 013 3m-6 0a3 3 0 003-3" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <label className="label">
                  <input type="checkbox" className="checkbox" required />
                  Remember me
                </label>
                <Link to="/forget-password" className="link link-hover text-sm font-bold text-green-600">Forgot password?</Link>
              </div>

              <button type="submit"   className="btn bg-[#3BA334] hover:bg-[#2E922B] text-white font-medium text-sm border-none w-full mt-2 shadow-lg shadow-[#3BA334]/40">
                Login
              </button>

              <hr className="my-8 text-gray-300" />

              <button
                className="btn w-full bg-white text-black border shadow-none"
                type="button"
                onClick={handleGoogleLogin}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M4.18173 10.2128C4.18173 9.56415 4.28946 8.94231 4.48173 8.35905L1.11627 5.78906C0.460366 7.12081 0.0908203 8.6214 0.0908203 10.2128C0.0908203 11.8028 0.459911 13.3025 1.11491 14.6333L4.47855 12.0583C4.28809 11.4778 4.18173 10.8582 4.18173 10.2128Z" fill="#FBBC05" />
                  <path d="M10.0908 4.31204C11.4998 4.31204 12.7726 4.81133 13.7726 5.62835L16.6817 2.72338C14.9089 1.18012 12.6362 0.226929 10.0908 0.226929C6.13894 0.226929 2.74257 2.4869 1.11621 5.78903L4.48167 8.35901C5.25712 6.00508 7.46757 4.31204 10.0908 4.31204Z" fill="#EB4335" />
                  <path d="M10.0908 16.1134C7.46757 16.1134 5.25712 14.4204 4.48167 12.0665L1.11621 14.636C2.74257 17.9386 6.13894 20.1986 10.0908 20.1986C12.5298 20.1986 14.8585 19.3325 16.6062 17.7098L13.4117 15.2401C12.5103 15.808 11.3753 16.1134 10.0908 16.1134Z" fill="#34A853" />
                  <path d="M19.6363 10.2128C19.6363 9.62269 19.5454 8.98723 19.409 8.39716H10.0908V12.2553H15.4545C15.1863 13.5707 14.4563 14.582 13.4117 15.2402L16.6063 17.7098C18.4422 16.0059 19.6363 13.4677 19.6363 10.2128Z" fill="#4285F4" />
                </svg>
                Login with Google
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h1 className="text-xl font-bold mb-2">Welcome, {user.displayName}</h1>
              <p><strong>Email:</strong> {user.email}</p>
              {user.photoURL && (
                <img className="mx-auto rounded-full mt-4 w-24 h-24 object-cover" src={user.photoURL} alt="profile" />
              )}
              <button className="btn btn-error mt-4 w-full shadow-none" onClick={handleLogout}>Logout</button>
            </div>
          )}

          {!user ? (
            <div className="text-center mt-4">
            <Link to="/registration" className="link link-hover font-bold text-green-600">
              Don't have an account? <span className='text-red-600'> Get started</span>
            </Link>
          </div>
          ):(
            <><p className='py-5'>If you want to create an account please logout first</p></>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
