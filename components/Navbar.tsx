export default function Navbar(){
    return(
        <div className="flex justify-center">
            <nav className="border rounded-xl border-black mt-2 w-86 bg-black ">
                <div className="flex gap-4 p-1">
                    <img src="/hacker.svg" alt="logo" className="h-8 w-8"/>
                    <span className="text-white">Home</span>
                    <span className="text-white">Projects</span>
                    <span className="text-white">Experience</span>
                </div>
            </nav>
        </div>
     
    )
}