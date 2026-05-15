export default function Footer(){
    return(
        <footer className="mt-15 p-6">
            <hr className="border-t border-gray-200 my-6 " />

            <span className="block  text-center text-gray-600">Copyright@2026ShubhamAwasthi</span>
            <div className="flex justify-center gap-2 pt-2">
                <a href="https://www.linkedin.com/in/shubham-awasthi-310520291/"
                target="_blank"
                >
                    <img src="/linkedin.svg" alt="Linkedin" className="h-6 w-6 transition-transform duration-300 hover:scale-110"/>
                </a>

                 <a href="https://x.com/Awa24777Shubham"
                target="_blank"
                >
                    <img src="/twitter.svg" alt="Twitter" className="h-6 w-6 transition-transform duration-300 hover:scale-110"/>
                </a>

                 <a href="https://github.com/shubham22062"
                target="_blank"
                >
                    <img src="/github.svg" alt="github" className="h-6 w-6 transition-transform duration-300 hover:scale-110"/>
                </a>
            </div>
        </footer>
    )

}