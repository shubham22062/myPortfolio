export default function Projects() {
  return (
    <div id="projects" className="mt-20 flex flex-col">
      <h1 className="font-bold text-4xl text-center mb-10">
        Shipped Projects
      </h1>

      <div className="flex gap-3 flex-wrap justify-center">
        <div className="pt-10">
          <div className="border border-gray-200 rounded-xl w-[90vw] sm:w-[360px] h-auto sm:h-[440px] p-5 flex flex-col">
            <a
              href="https://dev.dg4uqajhampr9.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Meshspire.svg"
                alt="Meshspire"
                className="w-full sm:w-80 h-40 rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </a>

            <h2 className="font-bold py-6 text-xl">MeshSpire</h2>

            <p className="text-gray-600">
              A real-time tutoring platform built with Next.js and WebRTC that
              facilitates seamless student-tutor interaction through live video
              calls, chat, and integrated payments.
            </p>

            <button className="mt-auto self-center px-6 py-2 bg-gray-300 text-black border border-gray-200 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-400">
              View Project
            </button>
          </div>
        </div>

        <div className="pt-10">
          <div className="border border-gray-200 rounded-xl w-[90vw] sm:w-[360px] h-auto sm:h-[440px] p-5 flex flex-col">
            <a
              href="https://finance-dashboard-system-9w37.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Finance.svg"
                alt="Finance"
                className="w-full sm:w-80 h-40 rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </a>

            <h2 className="font-bold py-6 text-xl">Finance Dashboard</h2>

            <p className="text-gray-600">
              A full-stack financial management system built with React and
              Node.js that provides real-time spending insights through
              interactive charts and secure data tracking.
            </p>

            <button className="mt-auto self-center px-6 py-2 bg-gray-300 text-black border border-gray-200 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-400">
              View Project
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <div className="pt-10">
          <div className="border border-gray-200 rounded-xl w-[90vw] sm:w-[360px] h-auto sm:h-[440px] p-5 flex flex-col">
            <a
              href="https://dev.dg4uqajhampr9.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Awast.svg"
                alt="AwastAi"
                className="w-full sm:w-80 h-40 rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </a>

            <h2 className="font-bold py-6 text-xl">AwastAi</h2>

            <p className="text-gray-600">
             Developed a full-stack AI chatbot that leverages large language models to answer questions,
              assist users, and provide personalized interactions..
            </p>

            <button className="mt-auto self-center px-6 py-2 bg-gray-300 text-black border border-gray-200 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-400">
              View Project
            </button>
          </div>
        </div>

        <div className="pt-10">
          <div className="border border-gray-200 rounded-xl w-[90vw] sm:w-[360px] h-auto sm:h-[440px] p-5 flex flex-col">
            <a
              href="https://finance-dashboard-system-9w37.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Finance.svg"
                alt="Finance"
                className="w-full sm:w-80 h-40 rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </a>

            <h2 className="font-bold py-6 text-xl">Finance Dashboard</h2>

            <p className="text-gray-600">
              A full-stack financial management system built with React and
              Node.js that provides real-time spending insights through
              interactive charts and secure data tracking.
            </p>

            <button className="mt-auto self-center px-6 py-2 bg-gray-300 text-black border border-gray-200 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-400">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}