import Link from "next/link";

const LoginForm = () => {
    return (
        <main className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-indigo-400">
                <h1 className="text-xl font-bold my-4">Login</h1>

                <form className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="userEmail" >Email</label>
                        <input 
                            type="text" 
                            placeholder="iamalbert@gmail.com" 
                            id="userEmail"
                            className="inputLogin"
                            // value={title} 
                            // onChange={eventInp => setTitle(eventInp.target.value)} 
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userPassword" >Password</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            id="userPassword"
                            className="inputLogin" 
                            // value={title} 
                            // onChange={eventInp => setTitle(eventInp.target.value)} 
                        />
                    </div>

                    <button className="btn-primary">Login</button>

                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">Error message</div>
                    
                    <Link href={"/register"} className="text-sm mt-3 text-right">
                        Don't have an acount? <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom">Register</span>
                    </Link>
                </form>

            </div>
        </main>
    )
}

export default LoginForm;