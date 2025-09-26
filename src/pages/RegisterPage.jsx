import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'   // <-- useNavigate import
import axios from 'axios'
import Swal from 'sweetalert2'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase/firebase.config'

const RegisterPage = () => {
    const { user, setUser, loginUser, setLoading, loading, } = useContext(AuthContext);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();   // <-- useNavigate

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

            Swal.fire("Success", "Logged in with Google successfully!", "success");  // <-- SweetAlert
            navigate("/");   // <-- Navigate to home

        } catch (error) {
            console.error(error.message);
        }
    };

    // Handle input change
    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    // Send OTP
    const handleSendOtp = async (e) => {
        e.preventDefault();
        const password = form.password;

        // Password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                html: 'Password must be at least 6 characters and include:<br>• One uppercase letter<br>• One lowercase letter<br>• One number<br>• One special character (@$!%*?&)',
            });
            return;
        }

        try {
            const res = await axios.post("https://smart-app-server.vercel.app/send-register-otp", form);
            if (res.data.success) {
                Swal.fire("OTP Sent", "Check your email for the code", "success");
                setOtpSent(true);
            }
        } catch (err) {
            Swal.fire("Error", err.response?.data?.message || "Something went wrong", "error");
        }
    }

    // Verify OTP and create user
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://smart-app-server.vercel.app/verify-register-otp", { email: form.email, otp });
            if (res.data.success) {
                Swal.fire("Success", "User registered successfully", "success");  // <-- SweetAlert
                setForm({ firstName: "", lastName: "", email: "", password: "" });
                setOtp("");
                setOtpSent(false);

                navigate("/");  // <-- Navigate to home
            }
        } catch (err) {
            Swal.fire("Error", err.response?.data?.message || "Invalid OTP", "error");
        }
    }
    return (
        <div className='w-full h-screen relative'>
            <Link to='/'><img src="/logo.png" alt="Logo" className=" absolute m-10 w-[120px] sm:w-[130px] lg:w-[147px] z-[9999] cursor-pointer" /></Link>

            <div className='flex justify-center items-center w-full h-screen '>
                <div className="w-full max-w-lg p-8">
                    <h1 className='text-3xl font-bold text-center'>Create your Account</h1>
                    <p className='text-gray-600 text-md text-center mb-15 py-2'>When sports Meets smart Tech.</p>
                    <div className="card-body">

                        {!otpSent ? (
                            <form className="fieldset" onSubmit={handleSendOtp}>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="label">First Name</label>
                                        <input type="text" className="input input-bordered w-full" placeholder="First Name" name='firstName' value={form.firstName} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label className="label">Last Name</label>
                                        <input type="text" className="input input-bordered w-full" placeholder="Last Name" name='lastName' value={form.lastName} onChange={handleChange} required />
                                    </div>
                                </div>


                                <label className="label mt-3">Email</label>
                                <input type="email" className="input input-bordered w-full" placeholder="Email" name='email' value={form.email} onChange={handleChange} required />


                                <label className="label mt-3">Password</label>
                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="input input-bordered w-full pr-10"
                                        placeholder="Password"
                                        name='password'
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                    />

                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.25 0-9.75-4.5-9.75-9.75 0-1.01.165-1.98.465-2.895M4.22 4.22L19.78 19.78" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <label className="label mt-3 font-semibold">
                                    <input type="checkbox" className="checkbox" required />
                                    I agree to Tech Takes <span className=' underline'>Terms of Service</span>  and <span className=' underline'>Privacy Policy.</span>
                                </label>


                                <button className="btn bg-[#3BA334] hover:bg-[#2E922B] text-white font-medium text-sm border-none w-full mt-4 shadow-lg shadow-[#3BA334]/40" type='submit'>Create Account</button>
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
                            <form className="fieldset" onSubmit={handleVerifyOtp}>
                                <label className="label">Enter OTP</label>
                                <input type="text" className="input input-bordered w-full" placeholder="6-digit code" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                                <button className="btn bg-[#3BA334] hover:bg-[#2E922B] text-white font-medium text-sm border-none w-full mt-2 shadow-lg shadow-[#3BA334]/40" type='submit'>Verify OTP</button>
                            </form>

                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default RegisterPage
