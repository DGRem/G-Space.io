import NavBar from "../utilities/NavBar"
import Background from '../assets/videos/bg-video.mp4'
import Rooms from "../section/Rooms"
import Feature from "../section/Feature"
import Booking from "../section/Booking"
import Footer from "../section/Footer"


export default function Home(){
    const scrollToBooking = (event) => {
        event.preventDefault();
        const aboutSection = document.getElementById('booking');
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                            <a href="#booking" className='px-10 py-4 text-Titilium bg-green rounded-md hover:text-white hover:animate-pulse cursor-pointer' onClick={scrollToBooking}>Book Now!</a>
                        </div>
                        <div className='flex justify-center drop-shadow-2xl'>
                            <video src={Background} className='rounded-lg' autoPlay loop muted>Test</video>
                        </div>
                    </div>
                    {/*Feature Section*/}
                    <Feature />
                    {/*Rooms Section*/}
                    <Rooms />
                    {/*Booking Section*/}
                    <Booking />
                    {/*Footer Section */}
                    <Footer />
                </section>
            </main>
        </>
    )
}
