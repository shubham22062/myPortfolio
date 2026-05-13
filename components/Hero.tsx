export default function Hero(){
    return(
        <div className="flex flex-col items-center mt-30 ">
            <img src="/profile.svg" alt="myProfile" className="rounded-full h-45 w-45"/>
            <h1 className="font-bold text-5xl pt-5">Hi I'm Shubham Awasthi.</h1>
            <h1 className="font-bold text-5xl">Software Engineer</h1>

            <div className="mt-3 p-2">
                <p className="text-gray-700 text-center">Adaptable developer with a track record of onboarding users to live platforms and contributing to the open-source ecosystem.</p>
            </div>
           <div className="flex justify-center gap-4 mt-5"> 
             <button className="border border-black bg-black text-white rounded-md p-2 hover:bg-gray-900 ">
                Hire me!
            </button>
            <button className="text-green-500 border rounded-xl bg-green-200 border-gray-200 p-2"> . Available for collaboration</button>
           </div>
        </div>
    )
}