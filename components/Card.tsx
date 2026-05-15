import {GitHubCalendar} from "react-github-calendar";

export default function Card() {
    return (
        <a
            href="https://github.com/shubham22062"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className="mt-10 w-full max-w-4xl mx-auto  border border-gray-200 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">

                {/* Top Section */}
                <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">

                        <div className="p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                                />
                            </svg>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold">
                                GitHub Commits
                            </h1>

                            <span className="block text-gray-400 text-sm mt-1">
                                @ShubhamAwasthi
                            </span>
                        </div>

                    </div>

                    {/* Arrow Icon */}
                    <div className="transition-transform duration-300 hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </div>

                </div>

                {/* Contribution Graph */}
                <div className="mt-8 overflow-hidden  border border-white/10 bg-black/20 p-4">
                    <div className="w-full flex justify-center">
                            <GitHubCalendar
                                username="shubham22062"
                                colorScheme="light"
                                theme={{
                                    light: [
                                        "#ebedf0", // no contribution
                                        "#fecaca", // light red
                                        "#f87171", // medium red
                                        "#ef4444", // strong red
                                        "#b91c1c"  // dark red
                                    ]
                                }}
                            />
                        </div>
                </div>

            </div>
        </a>
    );
}