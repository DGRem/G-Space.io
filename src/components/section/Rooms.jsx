import Arcade from "../assets/images/arcade.jpg"
import Console from "../assets/images/console.jpg"
import Desktop from "../assets/images/desktop.jpg"

export default function Rooms() {
    return (
        <>
        <div id="rooms" className="w-full bg-[url('./src/components/assets/Images/parallax.jpg')] bg-fixed bg-no-repeat h-screen
                    flex items-center justify-center
                    tablet:text-[40px]
                    desktop:text-[70px]"
        >
            <div className="container h-auto">
                <h1 className="text-green text-4xl font-Bruno text-center drop-shadow-xl mb-20">Gspace Hubs</h1>
                <div className="flex justify-around">
                    <div className="bg-white bg-opacity-40 hover:bg-opacity-100 transition-transform hover:scale-110 border-l-8 border-green p-10 rounded-lg">
                        <img src={Arcade} alt="Arcade" className="h-40 w-60 rounded-md" />
                        <h3 className="text-green text-2xl font-BrunoSC my-4">Arcade</h3>
                        <p className="w-60 text-black">"Dive into gaming paradise at GSpace Arcade – Power up, play hard!" <br /><br /> 🎮✨ #GamingSpace #ArcadeEscape</p>
                    </div>
                    <div className="bg-white bg-opacity-40 hover:bg-opacity-100 transition-transform hover:scale-110 border-l-8 border-green p-10 rounded-lg">
                        <img src={Console} alt="Arcade" className="h-40 w-60 rounded-md" />
                        <h3 className="text-green text-2xl font-BrunoSC my-4">Console</h3>
                        <p className="w-60 text-black">"Dive into the next level of gaming bliss at GSpace Console Room – Seamless play, endless fun!" <br /><br /> 🕹️🚀 #ConsoleMagic #GamingNirvana</p>
                    </div>
                    <div className="bg-white bg-opacity-40 hover:bg-opacity-100 transition-transform hover:scale-110 border-l-8 border-green p-10 rounded-lg">
                        <img src={Desktop} alt="Arcade" className="h-40 w-60 rounded-md" />
                        <h3 className="text-green text-2xl font-BrunoSC my-4">Desktop</h3>
                        <p className="w-60 text-black">"Unleash the power of play at GSpace Desktop Room – Where every click propels you into a universe of gaming brilliance!" <br /><br /> 🚀💫 #DesktopUniverse #GamingBeyondLimits</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}