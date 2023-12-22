export default function Footer() {
    return (
        <>
        <footer id="contact" class="footer grid bg-green">
            <div class="p-10 w-full">
                <div class="grid grid-cols-2 justify-center gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div className="logo-text">
                        <h1 className="md:text-xl lg:text-4xl font-BrunoSC tracking-wider mb-4 text-white drop-shadow-lg">Where Expectations Become Reality</h1>
                    </div>
                <div>
                    <h2 class="mb-6 font-bold uppercase text-black">Company</h2>
                    <ul class="text-white">
                        <li class="mb-4">
                            <a href="#" class=" hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Careers</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Brand Center</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 font-bold uppercase text-black">Help center</h2>
                    <ul class="text-white">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Discord Server</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Twitter</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Facebook</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 font-bold uppercase text-black">Contact Us</h2>
                    <ul class="text-white">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">80 Shaw Blvd, Mandaluyong, 1552 Metro Manila</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">02 490 7901</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">gspaceofficial@business.com</a>
                        </li>
                    </ul>
                </div>
            </div>
                <div class="px-2 py-2">
                    <span class="block text-sm  sm:text-center ">All Rights Reserved © GSPACE 2023</span>
                </div>
            </div>
        </footer>
        </>
    )
};