



export default function Feature() {
    return (
        <>
            <div id="about" className="flex-col w-full justify-center text-center p-40 bg-[url('./src/components/assets/Images/bg-feat.jpg')]">
                <div className="text-4xl font-Bruno font-bold text-green drop-shadow-2xl mb-20">Discover the GSpace Advantage: Your Premier Gaming Experience</div>
                <div className="flex w-full justify-center">
                    <div className="flex justify-around container">
                        <div className="w-1/4">
                            <ul className="drop-shadow-md">
                                <li className="mb-20 items-center bg-white border-l-4 border-l-green border-gray-300 border-opacity-80 rounded-md shadow-lg w-auto p-10">
                                    <h3 className="font-bold font-Titilium text-[18px] w-auto mb-6">Effortless Booking, Seamless Experience</h3>
                                    <p className="font-Titilium text-justify w-auto h-30">Our user-friendly platform makes booking a breeze. Navigate, reserve, and secure your ideal space with just a few clicks, ensuring a stress-free and seamless experience.</p>
                                </li>
                                <li className="items-center bg-white border-l-4 border-l-green border-gray-300 border-opacity-80 rounded-md shadow-lg p-10">
                                    <h3 className="font-bold font-Titilium text-[18px] w-auto mb-6">Community Connections</h3>
                                    <p className="font-Titilium text-justify w-auto h-30">Join a vibrant community of event enthusiasts and space seekers. Connect with like-minded individuals, share experiences, and discover hidden gems within the GSpace community.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/4 mt-20">
                            <ul className="drop-shadow-md">
                                <li className="mb-20 items-center bg-white border-l-4 border-l-green border-gray-300 border-opacity-80 rounded-md shadow-lg p-10">
                                    <h3 className="font-bold font-Titilium text-[18px] w-auto mb-6">24/7 Support</h3>
                                    <p className="font-Titilium text-justify w-auto h-30">Our dedicated support team is available around the clock to assist you. Whether you have a question about a reservation or need guidance, we're here to provide timely and helpful support.</p>
                                </li>
                                <li className="items-center bg-white border-l-4 border-l-green border-gray-300 border-opacity-80 rounded-md shadow-lg p-10">
                                    <h3 className="font-bold font-Titilium text-[18px] w-auto mb-6">Secure and Reliable</h3>
                                    <p className="font-Titilium text-justify w-auto h-[100px]">Your security is our priority. GSpace has round the clock monitoring to ensure your ensure your safey while you enjoy.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}