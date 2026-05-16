export default function Hero(){
    return(
        <div id="home" className="flex flex-col items-center mt-50 ">
            <img src="/profile.svg" alt="myProfile" className="rounded-full h-60 w-50 animate-float transition-transform duration-300 hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.4)]"/>
            <h1 className="font-bold text-5xl pt-5">Hi I'm Shubham Awasthi.</h1>
            <h1 className="font-bold text-5xl">Software Engineer</h1>

            <div className="mt-3 p-2">
                <p className="text-gray-700 text-center">Adaptable developer with a track record of onboarding users to live platforms and contributing to the open-source ecosystem.</p>
            </div>
           <div className="flex justify-center gap-4 mt-5"> 
             <button className="border border-black bg-black text-white rounded-md p-2 hover:bg-gray-900 ">
                Hire me!
            </button>
                <button className="relative text-green-500 border rounded-xl border-black py-2 px-8 bg-black">
                
                
                <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>

                Available for collaboration
                </button>           </div>
        </div>
    )
}