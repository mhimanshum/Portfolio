import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import axios from 'axios';
import Typed from 'typed.js';
import him3 from './him3.jpg';

function Home() {
  const [quote, setQuote] = useState([]);
  const el = useRef(null);
  useEffect(() => {
    const handleSearch = async () => {
      try {
        const res = await axios.get('https://type.fit/api/quotes');
        console.log(res);
        const que = res.data.map((ele) => ele.text);
        console.log(que);
        setQuote(que);
        console.log(typeof quote[0]);
        const typed = new Typed(el.current, {
          strings: que,
          startDelay: 50,
          typeSpeed: 40,
          backSpeed: 50,
          backDelay: 600,
        });

        return () => {
          typed.destroy();
        };
      } catch (error) {
        console.log(error);
      }
    };

    handleSearch();
  }, []);
  return (
    <div>
      <div className="relative bg-white">
        <img
          src={him3}
          alt="parallax"
          className="w-full -z-50 brightness-50 px-1"
        ></img>
        {/* <div className=" absolute top-0 flex w-full justify-center">
          <h1 className="text-3xl mt-32 font-bold text-center w-96 h-16">
            <span ref={el}></span>
          </h1>
        </div> */}
        <div className="absolute top-16 md:top-24 left-10 w-full h-1/2">
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
        <div className=" top-[300px] md:top-[500px] left-2 right-2 z-50 bg-white  md:flex grid grid-rows-3 border-1px border-black mx-1">
          <card className="text-center md:px-16 md:py-12 px-5 py-5 md:items-center border border-black animate__animated animate__fadeInUp">
            <div>
              <h1 className="text-3xl  ">Who am I?</h1>
              <h1 className="text-3xl font-semibold -mt-4 text-red-400">
                ----{' '}
              </h1>
              <h4 className="text-xl md:w-80 mt-6 font-semibold">
                A Web Designer / Developer Located In Our Lovely Earth
              </h4>
              <p className="md:w-80 mt-5">
                If there’s one thing you learn by working on a lot of different
                Web sites, it’s that almost any design idea–no matter how
                appallingly bad–can be made usable in the right circumstances,
                with enough effort..
              </p>
            </div>
          </card>
          <card className="md:px-16 md:py-12 px-5 py-5 border border-black animate__animated animate__fadeInUp">
            <div>
              <h1 className="text-3xl  ">Personal info</h1>
              <h1 className="text-3xl font-semibold -mt-4 text-red-400">
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
          <card className="text-center md:px-16 md:py-12 px-5 py-5 border border-black animate__animated animate__fadeInUp">
            <div>
              <h1 className="text-3xl  ">Expertise</h1>
              <h1 className="text-3xl font-semibold -mt-4 text-red-400">
                ----{' '}
              </h1>
              <h4 className="text-xl md:w-80 mt-6 font-semibold">
                A Web Designer / Developer Located In Our Lovely Earth
              </h4>
              <p className="md:w-80 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit
                amet, Qui deserunt consequatur fugit repellendusillo voluptas?
              </p>
            </div>
          </card>
        </div>
      </div>
    </div>
  );
}

export default Home;
