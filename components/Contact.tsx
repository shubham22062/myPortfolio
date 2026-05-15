export default function Contact(){
    return(
        <div className="mt-25 p-4">
            <h1 className="font-bold text-3xl">Get In touch</h1>
            <p className="text-gray-600 py-3">Whether it's a freelance gig, a collaboration, or a full-time opportunity, or want to say hi? I'm always excited to connect with people who love building meaningful things. Drop a message, and I'll get back to you as soon as I can!</p>
            <div className="flex justify-center gap-8 pt-10">
                <input type="name"
                placeholder="Full Name"
                className="border-2 border-gray-300 bg-gray-100 w-[200px] h-[70px] rounded-xl text-center"
                />

                <input type="email"
                placeholder="email address"
                className="border-2 border-gray-300 bg-gray-100 w-[300px] h-[70px] rounded-xl text-center"
                />

            </div>

            <div className="pt-10">
                <input type="message"
                placeholder="Hi, Shubham are you up for this role..."
                className="w-full h-[200px] border-2 border-gray-300 bg-gray-100 rounded-xl"
                />
            </div>

            <div className="pt-5">
                <button className="border rounded-xl bg-black w-full h-[50px] transition-transform duration-300 hover:scale-105 hover:bg-gray-900 text-white">Send Message</button>
            </div>
        </div>
    )
}