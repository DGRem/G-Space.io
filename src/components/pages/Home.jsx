import NavBar from "../utilities/NavBar"
import Background from '../assets/videos/bg-video.mp4'
import Booking from "./Booking"


export default function Home(){
    return (
        <>
            <main>
                <NavBar />
                <section>
                    {/*HomePage*/}
                    <div>
                        <div className='absolute z-10 mt-[30rem] ml-40 text-left w-1/2'>
                            <h1 className='text-2xl font-BrunoSC tracking-wider mb-4 text-green'>Discover | Reserve | Experience</h1>
                            <p className='text-xl font-Titilium text-justify tracking-wider mb-4 text-white'>Welcome to GSPACE! Transform any occasion into a memorable experience with our simplified reservation process and a diverse range of spaces to meet every need and desire.</p><br />
                            <a href="#" className='px-10 py-4 text-Titilium bg-green rounded-md hover:text-white hover:animate-pulse'>Book Now!</a>
                        </div>
                        <div className='flex justify-center drop-shadow-2xl'>
                            <video src={Background} className='rounded-lg' autoPlay loop muted>Test</video>
                        </div>
                    </div>
                    {/*Hero Section*/}
                    <div className="flex-col w-full justify-center text-center mb-40">
                        <div className="m-40 text-4xl font-Bruno text-green drop-shadow-lg">Discover the GSpace Advantage: Your Premier Gaming Experience</div>
                        <div className="flex w-full justify-center">
                            <div className="flex justify-around container">
                                <div className="w-1/4">
                                    <ul className="drop-shadow-md">
                                        <li className="mb-20 items-center border-l-4 border-l-green border-gray-300 border-opacity-80 rounded-md shadow-lg p-10">
                                            <h3 className="font-bold font-Titilium text-[18px] w-80 mb-6">Effortless Booking, Seamless Experience</h3>
                                            <p className="font-Titilium text-justify w-80 h-30">Our user-friendly platform makes booking a breeze. Navigate, reserve, and secure your ideal space with just a few clicks, ensuring a stress-free and seamless experience.</p>
                                        </li>
                                        <li className="items-center border-l-4 border-l-green border-gray-300 border-opacity-80 rounded-md shadow-lg p-10">
                                            <h3 className="font-bold font-Titilium text-[18px] w-80 mb-6">Community Connections</h3>
                                            <p className="font-Titilium text-justify w-80 h-30">Join a vibrant community of event enthusiasts and space seekers. Connect with like-minded individuals, share experiences, and discover hidden gems within the GSpace community.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-1/4 mt-20">
                                    <ul className="drop-shadow-md">
                                        <li className="mb-20 items-center border-l-4 border-l-green border-gray-300 border-opacity-80 rounded-md shadow-lg p-10">
                                            <h3 className="font-bold font-Titilium text-[18px] w-80 mb-6">24/7 Support</h3>
                                            <p className="font-Titilium text-justify w-80 h-30">Our dedicated support team is available around the clock to assist you. Whether you have a question about a reservation or need guidance, we're here to provide timely and helpful support.</p>
                                        </li>
                                        <li className="items-center border-l-4 border-l-green border-gray-300 border-opacity-80 rounded-md shadow-lg p-10">
                                            <h3 className="font-bold font-Titilium text-[18px] w-80 mb-6">Secure and Reliable</h3>
                                            <p className="font-Titilium text-justify w-80 h-[100px]">Your security is our priority. GSpace has round the clock monitoring to ensure your ensure your safey while you enjoy.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Booking />
                </section>
            </main>
        </>
    )
}
