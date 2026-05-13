export default function Navbar(){
    return(
        <div className="flex justify-center">
            <nav className="border rounded-xl border-black mt-4 w-150 h-15 bg-black p-2 ">
                <div className="flex gap-6 p-1">
                    <img src="/hacker.svg" alt="logo" className="h-8 w-8"/>
                    <span className="text-white hover:underline">Home</span>
                    <span className="text-white hover:underline">Projects</span>
                    <span className="text-white hover:underline">Experience</span>
                       
                    <img src="/github.svg" alt="github" className="h-7 w-7 bg-white rounded-full transition-transform duration-300 hover:scale-105"/>
                     <div className="border-r border-gray-100 pr-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-white transition-transform duration-300 hover:scale-105">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                     </div>

                     <button className="border border-gray-200 bg-white rounded-md px-2 py-1 transition-transform duration-300 hover:scale-105">
                        Contact
                     </button>

                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-white transition-transform duration-300 hover:scale-105">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>

                    

                </div>
            </nav>
        </div>
     
    )
}