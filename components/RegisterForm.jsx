"use client";

import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); //If click on the submit button, the page doesn't reload

        if(!name || !email || !password) {
            setError("All fields are necessary");
            return;
        }

        try {
            const res = await fetch("api/register/route", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            //Reset Form fields
            if(res.ok) {
                const form = e.target;
                form.reset();
            } else {
                console.log("User registration failed.")
                console.log("User registration failed.", res.statusText)
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    }

    return (
        <main className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-indigo-400">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">

                    <div className="flex flex-col">
                        <label htmlFor="userName" >Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Stephen Cruise" 
                            id="userName"
                            className="inputLogin"
                            value={name} 
                            onChange={eventInp => setName(eventInp.target.value)} 
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userEmail" >Email</label>
                        <input 
                            type="text" 
                            placeholder="iamalbert@gmail.com" 
                            id="userEmail"
                            className="inputLogin"
                            value={email} 
                            onChange={eventInp => setEmail(eventInp.target.value)} 
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userPassword" >Password</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            id="userPassword"
                            className="inputLogin" 
                            value={password} 
                            onChange={eventInp => setPassword(eventInp.target.value)} 
                        />
                    </div>

                    <button className="btn-primary">Register</button>

                    {error && (
                        /* This code will run only if we have any error */
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                    )}
                    
                    <Link href={"/"} className="text-sm mt-3 text-right">
                        Already have an acount? <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom">Login</span>
                    </Link>
                </form>

            </div>
        </main>
    )
}

export default RegisterForm;