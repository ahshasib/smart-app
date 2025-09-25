import React, { useContext, useState } from 'react'
import { Authcontext } from '../context/AuthContext'
import { Link } from 'react-router'
import { auth } from '../firebase/firebase.config'
import { updateProfile, sendEmailVerification } from "firebase/auth";
import {toast, ToastContainer } from 'react-toastify';

const RegisterPage = () => {
    const { user, setUser, createUser } = useContext(Authcontext);
    const [error,setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form['first-name'].value.trim()
        const lastName = form['last-name'].value.trim()
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const name = `${firstName} ${lastName}`;


        if (password.length < 6){
            toast.error("Password length must be min 6 character");
            return
          }
          if (!/[A-Z]/.test(password)) {
            toast.error("Password must include at least one capital letter");
            return;
          }
        
          // Check small letter
          if (!/[a-z]/.test(password)) {
            toast.error("Password must include at least one small letter");
            return;
          }
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error("Password must include at least one special character");
            return;
          }
          
        
          else{
            setError("")
          }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Email verification
                sendEmailVerification(auth.currentUser)
                    .then(() => console.log("Verification email sent to:", auth.currentUser.email))
                    .catch(err => console.error("Email verification error:", err));

                // Update profile
                updateProfile(user, { displayName: name })
                    .then(() => {
                        setUser({
                            name: name,
                            email: user.email,
                            uid: user.uid,
                        });
                    })
                    .catch((error) => console.error("Profile update error:", error.message));
            })
            .catch((error) => console.log("Signup error:", error.message));
    }

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <ToastContainer />
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center text-2xl bg-black text-white rounded'>Registration</h1>
                <div className="card-body">
                    <form className="fieldset" onSubmit={handleSubmit}>
                        <label className="label">First Name</label>
                        <input type="text" className="input" placeholder="First Name" name='first-name' required/>
                        <label className="label">Last Name</label>
                        <input type="text" className="input" placeholder="Last Name" name='last-name' required/>
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' required/>
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' required/>
                        <button className="btn btn-neutral mt-4" type='submit'>Register</button>
                    </form>
                </div>
                <Link to="/" className='btn btn-primary'>Home</Link>
            </div>

            {user && (
                <div className="mt-6 p-4 bg-gray-100 rounded">
                    <h1 className="text-xl font-bold mb-2">User Information</h1>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>UID:</strong> {user.uid}</p>
                </div>
            )}
        </div>
    )
}

export default RegisterPage
