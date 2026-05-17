export default function Footer(){
    return(
        <footer className="mt-5 p-6">
            <hr className="border-t border-gray-200 dark:border-gray-700 my-6 " />

            <span className="block text-center text-gray-600 dark:text-gray-400">
                Copyright@2026ShubhamAwasthi
            </span>
            <div className="flex justify-center gap-2 pt-2">
                <a href="https://www.linkedin.com/in/shubham-awasthi-310520291/"
                target="_blank"
                >
                    <img 
                        src="/linkedin.svg" 
                        alt="Linkedin" 
                        className="h-6 w-6 transition-transform duration-300 hover:scale-110 dark:invert border-2 border-blue-400 bg-blue-400 rounded-full"
                    />
                </a>

                <a href="https://x.com/Awa24777Shubham"
                target="_blank"
                >
                    <img 
                        src="/twitter.svg" 
                        alt="Twitter" 
                        className="h-6 w-6 transition-transform duration-300 hover:scale-110 dark:invert border-blue-400 border-2 rounded-full"
                    />
                </a>

                <a href="https://github.com/shubham22062"
                target="_blank"
                >
                    <img 
                        src="/github.svg" 
                        alt="github" 
                        className="h-6 w-6 transition-transform duration-300 hover:scale-110 dark:invert bg-blue-400 rounded-full "
                    />
                </a>
            </div>
        </footer>
    )
}