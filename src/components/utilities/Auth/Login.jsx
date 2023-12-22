import { Link } from "react-router-dom";


export default function Login(){
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-[url('./src/components/assets/Images/bg-feat.jpg')]">
                <div className="p-10 border-2 border-gray rounded-lg border-l-8 border-l-green bg-white">
                    <h3 className="text-center font-Bruno text-green text-4xl drop-shadow-lg mb-6">GSPACE</h3>
                    <form className="flex-col justify-center">
                        <div>
                            <label htmlFor="email" className="font-Titilium">Email</label>
                            <input type="email" className="w-full border-[1px] rounded-md border-gray mb-6" />
                        </div>
                        <div>
                            <label htmlFor="password" className="font-Titilium" >Password</label>
                            <input type="password" className="w-full border-[1px] rounded-md border-gray mb-6" />
                        </div>
                        <div>
                            <input type="submit" className="w-full py-2 bg-green rounded-lg hover:cursor-pointer hover:scale-105 transition-transform" />
                        </div>
                    </form>
                    <div className="mt-6">
                        <span>Doesn't have an account? <Link to="/register" className="text-green hover:border-b-[1px] border-green">Register</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}