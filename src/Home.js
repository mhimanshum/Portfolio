import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import axios from 'axios';
import Typed from 'typed.js';
import him3 from './him3.jpg';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';
import { FcLinux } from 'react-icons/fc';
import { BsBootstrap, BsMicrosoft } from 'react-icons/bs';
import { DiMaterializecss, DiJavascript } from 'react-icons/di';

function Home() {
  const [quote, setQuote] = useState([]);
  const el = useRef(null);
  useEffect(() => {
    const handleSearch = async () => {
      try {
        const res = await axios.get('https://type.fit/api/quotes');
        const que = res.data.map((ele) => ele.text);
        setQuote(que);
        const typed = new Typed(el.current, {
          strings: que,
          // startDelay: 50,
          // typeSpeed: 30,
          // backSpeed: 40,
          // backDelay: 200,
        });

        return () => {
          typed.destroy();
        };
      } catch (error) {
        console.log(error);
      }
    };

    handleSearch();
  }, 10000);
  return (
    <div>
      <div>
        <div className="max-w-[1440px] container mx-auto px-1 relative bg-white">
          <img
            src={him3}
            alt="parallax"
            className="w-full -z-50 brightness-50 md:h-[500px] object-contain md:object-cover"
          ></img>
          <div className="absolute top-16 md:top-48 left-10 h-1/2">
            <h1 className="text-2xl md:text-5xl text-white font-sans font-medium animate__animated animate__backInDown ">
              Hello,I am
            </h1>
            <h1 className="text-4xl md:text-7xl font-sans font-semibold text-red-400 animate__animated animate__bounceInRight">
              Himanshu Maurya
            </h1>
            <p className="text-2xl text-white mt-3 animate__animated animate__backInUp">
              Front end Designer | Developer
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1440px] container mx-auto px-1 z-50 bg-white md:flex grid grid-rows-3 border-1px border-gray-600">
          <card className="text-center md:px-16 md:py-12 px-5 py-5 md:items-center border border-gray-400 animate__animated animate__fadeInUp">
            <div>
              <h1 className="text-3xl text-gray-500 font-bold ">Who am I?</h1>
              <h1 className="text-3xl font-semibold -mt-4 text-red-400">
                ----{' '}
              </h1>
              <h4 className="text-xl md:w-80 mt-6 font-semibold">
                A Web Designer / Developer Located In Our Lovely Earth
              </h4>
              <p className="md:w-80 mt-2">
                If there’s one thing you learn by working on a lot of different
                Web sites, it’s that almost any design idea–no matter how
                appallingly bad–can be made usable in the right circumstances,
                with enough effort..
              </p>
            </div>
          </card>
          <card className=" md:px-16 md:py-12 px-5 py-5 border border-gray-400 animate__animated animate__fadeInUp">
            <div>
              <h1 className="text-3xl text-center text-gray-500 font-bold ">
                Personal info
              </h1>
              <h1 className="text-3xl text-center font-semibold -mt-4 text-red-400">
                ----{' '}
              </h1>
              <p className="font-thin text-gray-500 mt-6">
                <p1 className="font-semibold text-black">Birthdate </p1>:
                05/06/2002
              </p>
              <p className="font-thin text-gray-500">
                <p1 className="font-semibold text-black">Email </p1>:
                mauryahimanshu1999@gmail.com
              </p>
              <p className="font-thin text-gray-500">
                <p1 className="font-semibold text-black">Phone </p1>:
                +917499986369
              </p>
              <a
                className="font-thin text-gray-500"
                href="https://github.com/mhimanshum"
              >
                <p1 className="font-semibold text-black">Github </p1>: Click
                here
              </a>
              <p className="font-thin text-gray-500">
                <p1 className="font-semibold text-black">Address </p1>: Khamaria
                SRN Bhadhohi Uttar Pradesh 221306 India
              </p>
            </div>
          </card>
          <card className="md:px-16 md:py-12 py-5 border border-gray-400 animate__animated animate__fadeInUp">
            <div>
              <h1 className="text-3xl text-center text-gray-500 font-bold">
                Expertise
              </h1>
              <h1 className="text-3xl font-semibold -mt-4 text-red-400 text-center">
                ----{' '}
              </h1>
              <div className="grid grid-cols-2 gap-5 text-center ml-10 md:ml-5">
                <div className="text-center">
                  <div className="flex mt-5">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <AiOutlineHtml5 />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">HTML5</p>
                  </div>
                  <div className="flex ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <BiLogoCss3 />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">CSS3</p>
                  </div>
                  <div className="flex ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <RiReactjsLine />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">ReactJS</p>
                  </div>
                  <div className="flex ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <TbBrandNextjs />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">NextJS</p>
                  </div>
                  <div className="flex ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <TbBrandTailwind />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">Tailwind</p>
                  </div>
                  <div className="flex ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <FcLinux />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">Linux</p>
                  </div>
                </div>
                <div className="w-40 text-center">
                  <div className="flex mt-5 ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <BsBootstrap />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">Bootstrap</p>
                  </div>
                  <div className="flex ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <DiMaterializecss />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">MaterialUI</p>
                  </div>
                  <div className="flex ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <DiJavascript />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">Javascript</p>
                  </div>
                  <div className="flex ">
                    <h1 className="text-3xl font-semibold text-red-400">
                      <BsMicrosoft />
                    </h1>
                    <p className="text-xl md:w-80 text-gray-500">
                      Microsoft365
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
      {/* <div className="flex h-96  justify-center text-center px-10 py-10">
          <h1 className="text-xl items-center text-center w-96">
            <span ref={el}></span>
          </h1>
        </div> */}
      <div>
        <div className="max-w-[1440px] container mx-auto px-1 text-center">
          <h1 className="text-4xl font-serif ml-20 mt-12 mb-10 flex gap-2">
            <h1 className="text-red-500">My</h1> Resume
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-20">
            <div className="w-full border border-gray-500 px-8 py-5">
              <h1 className="text-2xl font-medium">Expertise</h1>
              <h1 className="text-2xl text-red-500 -mt-3">-----</h1>
              <h1 className="text-2xl text-red-500 font-mono mt-2">
                2022-Present
              </h1>
              <h1 className="mt-2 text-gray-600">Front-End-Developer</h1>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum recusandae, cupiditate ullam dolor ratione
                repellendus.aliquid repudiandae saepe!.
              </p>
              <hr className="mt-3" />
              <h1 className="mt-2 text-gray-600">Back-End-Developer</h1>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum recusandae, cupiditate ullam dolor ratione
                repellendus.aliquid repudiandae saepe!.
              </p>
              <hr className="mt-3" />
              <h1 className="mt-2 text-gray-600">UX-Designer</h1>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum recusandae, cupiditate ullam dolor ratione
                repellendus.aliquid repudiandae saepe!.
              </p>
            </div>
            <div className="w-full border border-gray-500 px-8 py-5">
              <h1 className="text-2xl font-medium">Education</h1>
              <h1 className="text-2xl text-red-500 -mt-3">-----</h1>
              <h1 className="text-2xl text-red-500 font-mono mt-2">
                2022-Present
              </h1>
              <h1 className="mt-2 text-gray-600">Web-Developer</h1>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum recusandae, cupiditate ullam dolor ratione
                repellendus.aliquid repudiandae saepe!.
              </p>
              <hr className="mt-3" />
              <h1 className="text-2xl text-red-500 font-mono">2019-2022</h1>
              <h1 className="mt-2 text-gray-600">Graduate(B.Sc.)</h1>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum recusandae, cupiditate ullam dolor ratione
                repellendus.aliquid repudiandae saepe!.
              </p>
              <hr className="mt-3" />
              <h1 className="text-2xl text-red-500 font-mono">2015-2019</h1>
              <h1 className="mt-2 text-gray-600">
                High School And Intermediate
              </h1>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum recusandae, cupiditate ullam dolor ratione
                repellendus.aliquid repudiandae saepe!.
              </p>
            </div>
            <div className="w-full">
              <div className=" border border-gray-500 px-8 py-5 grid grid-rows-2">
                <h1 className="text-2xl font-medium">Skills</h1>
                <h1 className="text-2xl text-red-500 -mt-3">-----</h1>
              </div>
              <div className="  px-8 py-5 border border-gray-500">
                <h1 className="text-2xl font-medium">Language</h1>
                <h1 className="text-2xl text-red-500 -mt-3">-----</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
