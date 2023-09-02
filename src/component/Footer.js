import React from 'react';
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from 'react-icons/rx';
import { FaFacebookSquare, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <main className="mx-1">
        <div className="h-80 bg-gray-900 max-w-[1440px] container mx-auto">
          <div className="relative flex justify-center max-w-[1440px] container mx-auto">
            <h1 className="absolute font-sans text-white font-bold text-2xl mt-3">
              Developed By Himanshu Maurya
            </h1>
            <h3 className="absolute font-mono text-white text-center w-80 h-28 md:w-80  mt-12">
              Good code is its own best documentation. As you’re about to add a
              comment, ask yourself, “How can I improve the code so that this
              comment isn’t needed?” Improve the code and then document it to
              make it even clearer.
            </h3>
            <div className="absolute flex gap-5 mt-60">
              <a href="https://github.com/mhimanshum">
                <RxGithubLogo className="text-white text-5xl  hover:bg-gray-600" />
              </a>
              <RxLinkedinLogo className="text-white text-5xl  hover:bg-gray-600 " />
              <RxTwitterLogo className="text-white text-5xl  hover:bg-gray-600" />
              <FaFacebookSquare className="text-white text-5xl  hover:bg-gray-600" />
              <FaUserAlt className="text-white text-5xl  hover:bg-gray-600" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-between bg-black h-20 items-center gap-2">
            <h3 className="md:ml-5 ml-2 font-semibold text-white">
              Copyright @2023{' || '}
              <a
                className="text-white font-bold hover:text-cyan-500"
                href="https://www.myonlineca.in/how-to-copyright-website-in-india/"
              >
                All Rights Reserved
              </a>
            </h3>
            <div className="md:mr-5 mr-2 text-sm md:text-xl ">
              <Link
                to="/"
                className="text-white mr-5 font-bold hover:text-cyan-500"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="text-white font-bold hover:text-cyan-500"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Footer;
