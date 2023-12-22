export default function Footer() {
    return (
        <>
        <footer class="footer grid bg-green dark:bg-gray-900 border">
        <div class="mx-auto w-full">
            <div class="grid grid-cols-2 justify-center gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div className="logo-text">
                    <h1 className="md:text-xl lg:text-4xl font-BrunoSC tracking-wider mb-4 text-white drop-shadow-lg">Where Expectations Become Reality</h1>
                </div>
            <div>
                <h2 class="mb-6 font-bold uppercase text-black">Company</h2>
                <ul class="text-black font-medium">
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
                <ul class="text-black font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Discord Server</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Twitter</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Facebook</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 font-bold uppercase text-black">Legal</h2>
                <ul class="text-black font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Licensing</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="px-4 py-6 border">
            <span class="block text-sm  sm:text-center ">© 2023. All Rights Reserved.</span>
            </div>
        </div>
        </footer>

        </>
    )
};