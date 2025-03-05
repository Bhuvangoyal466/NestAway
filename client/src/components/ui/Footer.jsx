import React from 'react';

const Footer = () => {
  return (
    <div className="flex  w-full justify-center bg-gray-200 pb-8">
      <div className="flex w-full max-w-screen-xl flex-col items-center px-6">
        {/* grid for links */}
        <div className="grid  w-full grid-cols-1 gap-4 py-8 text-sm md:grid-cols-3 ">
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Support</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Help Center
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Get help with a safety issue
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Air cover
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Anti-discrimination
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Disablity support
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Cancellation options
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Report neighbourhood concern
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Hosting</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Add your home
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                AirCover for Hosts
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Hosting resources
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Community forum
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Hosting responsibly
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <strong className="font-medium">NestAway</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Newsroom
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                New features
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Careers
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Investors
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                NestAway.org emergency stays
              </span>
            </p>
          </div>
        </div>

        <div className="my-4 w-full border-[1px] border-gray-200"></div>

        <div className="flex w-full flex-col items-center justify-between gap-4 md:gap-0 lg:flex-row">
          <div className="mt-4 flex w-full justify-between gap-10 md:order-last md:w-auto">
            <div className="flex text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              English(IN) <span className="mx-4">₹ INR</span>
            </div>

            <div className="flex gap-3">
              {/* Facebook Icon with Personal Profile Link */}
              <a href="https://www.facebook.com/bhuvan.goyal.58/" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>
              </a>


              {/* LinkedIn icon */}
              <a href="https://www.linkedin.com/in/bhuvangoyal28/" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v14H0V8zm7 0h5v2h.07c.69-1.31 2.37-2.69 4.88-2.69C22.92 7.31 24 11 24 15.23V22h-5v-6.19c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.62-2.39 3.28V22H7V8z" />
                </svg>
              </a>

              {/* instagram icon */}
              <a href="https://www.instagram.com/bhuvangoyal28/" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  viewBox="0 0 50 50"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2 px-1 font-normal text-gray-700 md:w-auto md:flex-row md:items-center md:gap-8">
            <p className="text-sm">&copy; 2024 NestAway, Inc.</p>
            <div>
              <ul className=" flex gap-6 text-sm text-gray-700">
                <li className="cursor-pointer text-gray-700 decoration-1 underline-offset-1 hover:underline md:list-disc">
                  Privacy
                </li>
                <li className="cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline">
                  Terms
                </li>
                <li className="cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline">
                  Sitemap
                </li>
                <li className="cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline">
                  Company details
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
