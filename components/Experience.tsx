export default function Experience() {
    return (
        <div className="mt-25 p-4 max-w-4xl mx-auto">
            <h1 className="font-bold text-3xl mb-6">
                Work Experience
            </h1>

            <div className="py-6 flex justify-between items-start p-6 rounded-xl hover:shadow-lg transition-all duration-300">
 
                {/* Left Side */}
                <div className="max-w-2xl">
                    <h2 className="text-xl font-semibold">
                        Eye Craft Security
                    </h2>

                    <p className="text-gray-400 py-4 leading-7 tracking-wide">
                        Currently focused on the end-to-end development of scalable web applications,
                        handling everything from database architecture to server-side logic and
                        performance tuning. I work on building secure backend systems, designing APIs,
                        optimizing application speed, and ensuring smooth integration between frontend
                        and backend services.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex-shrink-0">
                    <span className="text-gray-400 text-sm font-medium">
                        Jan 2026 – Present
                    </span>
                </div>

            </div>


             <div className="py-8 flex justify-between items-start p-6 rounded-xl hover:shadow-lg transition-all duration-300">

                {/* Left Side */}
                <div className="max-w-2xl">
                    <h2 className="text-xl font-semibold">
                        IBM
                    </h2>

                    <p className="text-gray-400 py-4 leading-7 tracking-wide">
                        During my time as a Web Development Intern at IBM, I developed Wellness Buddy, a web solution focused on promoting mental and physical health. I designed an intuitive, informative UI using HTML, CSS, and JavaScript to make wellness content more accessible to general users. The project was specifically aligned with UN SDG-3 (Good Health and Well-being), aiming to encourage healthy habits through digital innovation.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex-shrink-0">
                    <span className="text-gray-400 text-sm font-medium">
                        Jun 2024 – Aug-2024
                    </span>
                </div>

            </div>

            

            
        </div>
    );
}