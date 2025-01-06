import React from "react";

import User9 from "./svg/user9";
import user2 from "../assets/user2.jpeg";
import Squid from "./svg/squid";
import History from "./svg/history";
import Book from "./svg/book";
import user7 from "../assets/user7.png";
import User8 from "./svg/user8";
import Tags from "./svg/tags";
import Source from "./svg/source";
import Leader from "./svg/leader";
import Submit from "./svg/submit";
import Discusion from "./svg/discusion";
import Doc from "./svg/doc";
import Arrowup from "./svg/arrowup";
import Changelog from "./svg/changelog";
import Feedback from "./svg/feedback";
import Image from "./svg/image3";
import { useState } from "react";

function Hero() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <section id="works" className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-60" : "w-16"
        }  bg-neutral-900 text-white transition-all duration-300 ease-in-out h-full`}
      >
        <div className="flex justify-between items-center p-4">
          <h2
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } text-xl font-semibold`}
          >
            Catogeroy
          </h2>
          <button
            onClick={toggleSidebar}
            className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-md"
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${isSidebarOpen ? "block" : "hidden"} mt-4 text-center`}
        >
          <li className="relative p-4 hover:bg-neutral-800 font-bold text-gray-500 text-2xl gap-2 inline-flex items-center">
            <img
              className=" w-5 h-5 rounded-md"
              loading="lazy"
              alt="Profile"
              src={user7}
            />
            <span>My Feed</span>
          </li>
          <li className="p-4 hover:bg-neutral-800 flex gap-2  items-center justify-center ">
            <User8 />
            Following
          </li>

          <li className="p-4 hover:bg-neutral-800 flex  gap-2 items-center justify-center ">
            <User9 />
            Explore
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Book />
            Bookmarks
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <History />
            History
          </li>

          <li className="p-4 hover:bg-neutral-800 font-bold text-gray-500 text-2xl">
            Network
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Squid />
            Find Squads
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <img
              className="w-5 h-5 rounded-md bg-neutral-600 "
              src="https://media.daily.dev/image/upload/s--JMUK_EYA--/f_auto/v1726284422/squads/3014b459-0ca8-40b1-ae74-35c19f1fb35f"
              alt="tomato"
            />
            Code Tomato's Squid
          </li>

          <li className="p-4 hover:bg-neutral-800 font-bold text-gray-500 text-2xl">
            Discover
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Tags />
            Tags
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Source />
            Sources
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Leader />
            Leaderboard
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Discusion />
            Dicussions
          </li>

          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Submit />
            Submit a Link
          </li>
          <li className="p-4 hover:bg-neutral-800 font-bold text-gray-500 text-2xl">
            Resources
          </li>
        
          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Doc />
            Docs
          </li>
          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Changelog />
            Changelog
          </li>
          <li className="p-4 hover:bg-neutral-800 flex items-center justify-center gap-2">
            <Feedback />
            FeedBack
          </li>
          
        </ul>
      </div>

      <div className="max-w-[111rem] mx-auto px-4  mt-10">
        <span className="text-white bg-neutral-900 rounded-md p-3  font-semibold py-3">
          <button
            className="btn focus-outline inline-flex cursor-pointer 
        items-center  transition duration-200 ease-in-out typo-callout justify-center font-bold   rounded-12   "
          >
            {" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 pointer-events-none text-base mr-1"
            >
              <path
                d="M16.5 12a3 3 0 013 3v1.5a3 3 0 01-3 3H15a3 3 0 01-3-3H5.25a.75.75 0 110-1.5H12a3 3 0 013-3h1.5zm0 1.5H15a1.5 1.5 0 00-1.493 1.356L13.5 15v1.5a1.5 1.5 0 001.356 1.493L15 18h1.5a1.5 1.5 0 001.493-1.356L18 16.5V15a1.5 1.5 0 00-1.356-1.493L16.5 13.5zM9 4.5a3 3 0 013 3h6.75a.75.75 0 110 1.5H12a3 3 0 01-3 3H7.5a3 3 0 01-3-3V7.5a3 3 0 013-3H9zM7.5 6a1.5 1.5 0 00-1.493 1.356L6 7.5V9a1.5 1.5 0 001.356 1.493l.144.007H9a1.5 1.5 0 001.493-1.356L10.5 9V7.5a1.5 1.5 0 00-1.356-1.493L9 6H7.5z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            Feed settings
          </button>
        </span>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6 mt-10">
                               
                                {/* ----1--- */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
            <div className="  items-center inline-flex gap-2">
              <img
                src="https://media.daily.dev/image/upload/t_logo,f_auto/v1655817725/logos/community"
                alt="profile"
                className="rounded-full w-8"
              />

              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GiN0HdqNqDogV82n2rAoO7tWGivOaWH8b0gpgQe=s100"
                alt="profileimage"
                className="rounded-full w-8"
              />
            </div>

            <h2 className="text-neutral-300 font-bold mt-3 text-2xl">
              How To create Responsive Tailwind Bento Grid?
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-5">
              <button className="border border-gray-500 rounded-lg  px-1">
                #webdev
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #fronted
              </button>
              <button className="border rounded-lg border-gray-500 px-1">
                +2
              </button>
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-2">
              <p>Nov 08,2024 .9m read time</p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/b238f2f84b836244ee3945456c038812?_a=AQAEuj9"
                alt="images"
                className="rounded-lg "
              />
            </div>

                    {/* Coding for img inside card 1 */}

            <div className="flex justify-between items-center mt-4 ">
              <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">193</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>9</span>
                <Book />
                <Submit />
              </div>
            </div>
          </div>
                                 
                                 {/* 2 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
            <div className="items-center flex">
             <img 
             src="https://media.daily.dev/image/upload/t_logo,f_auto/v1/logos/201e234294cb4132ab31418b7627dbab"
              alt="image1" className="rounded-full w-8"/>
            </div>
            <h2 className="text-neutral-300 font-bold mt-2 text-2xl">
              Headness E-commerce:
              Explaining the Biggest Trend
              in E-Commerce
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-5">
              <button className="border border-gray-500 rounded-lg  px-1">
                #webdev
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #ecommerce
              </button>
              <button className="border rounded-lg border-gray-500 px-1">
                #cms
              </button>
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-2">
              <p>Dec 09,2024 .15m read time</p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/e51abefa0b440abc95f6fa2f3fa0f58f?_a=AQAEuiZ"
                alt="images"
                className="rounded-lg "
              />
            </div>

                      {/* Coding for img inside card 2 */}

            <div className="flex justify-between items-center mt-4">
            <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">44</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>2</span>
                <Book />
                <Submit />
              </div>

            
            </div>
          </div>
                                      
                                      {/* 3 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
             <h2 className="text-neutral-300 font-bold mt-2 text-2xl">
            Don't forget to complete
            your profile
            </h2>
            <h2 className="text-gray-500 mt-16">Promoted</h2>
            <div className="flex justify-center">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1722757412/a/fallback/7MoC0mdaQ"
                alt="images"
                className="rounded-lg "
              />
            </div>

                            {/* Coding for img inside card 3 */}

            <div className="flex justify-between items-center mt-4 text-white w-6 h-6">
              

              <button className="bg-neutral-800 rounded-md p-1">
                <Image/>
              </button>
            </div>
          </div>
                                      
                                      {/* 4 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
          <div className="  items-center inline-flex gap-2 ">
              <img
                src="https://media.daily.dev/image/upload/t_logo,f_auto/v1655817725/logos/community"
                alt="profile"
                className="rounded-full w-8"
              />
            </div>
            <h2 className="text-neutral-300 font-bold mt-3 text-2xl">
              Learn SQL while solving
              crimes!SQL Police
              Department
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-5">
              <button className="border border-gray-500 rounded-lg  px-1">
                #database
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #sql
              </button>
              <button className="border rounded-lg border-gray-500 px-1">
                +1
              </button>
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-2">
              <p>Nov 08,2024 .9m read time</p>
            </div>

            <div className="flex justify-center mt-5">
              <img
                src="https://shadcn.batchtool.com/og.jpg"
                alt="images"
                className="rounded-lg mb-8"
              />
            </div>
            

            {/* Coding for img inside card 4 */}

            <div className="flex justify-between items-center mt-4 ">
              <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">193</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>9</span>
                <Book />
                <Submit />
              </div>
            </div>
          </div>
                                
                                {/* 5 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
            <div className="  items-center inline-flex gap-2 ">
              <img
                src="https://media.daily.dev/image/upload/t_logo,f_auto/v1/logos/9e0b243422ae49b3b9e07052ac76ce84"
                alt="profile"
                className="rounded-full w-8"
              />
            </div>
            <h2 className="text-neutral-300 font-bold mt-3 text-2xl">
              How to Create a Zig-Zig
              Box Using CSS
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-8">
              <button className="border border-gray-500 rounded-lg  px-1">
                #webdev
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #css
              </button>
              <button className="border rounded-lg border-gray-500 px-1">
                #frontend
              </button>
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-4">
              <p>Dec 19,2024 .6m read time</p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/4a03154da4af23a3f810828c7c1a10af?_a=AQAEuj9"
                alt="images"
                className="rounded-lg mb-3"
              />
            </div>

                       {/* Coding for img inside card 5 */}

            <div className="flex justify-between items-center mt-4">
            <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">45</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>12</span>
                <Book />
                <Submit />
              </div>
            </div>
          </div>
                                
                                {/* 6 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
            <div className="  items-center inline-flex gap-2">
              <img
                src="https://media.daily.dev/image/upload/s--aN0ucZq9--/f_auto/v1719999509/squads/622a6400-9cfb-480c-8cbb-1a1c1df917ab"
                alt="profile"
                className="rounded-full w-8"
              />

              <img
                src="https://media.daily.dev/image/upload/s--vyR3FAkl--/f_auto/v1733614530/avatars/avatar_NwmKxgAp8zPcVN2MMvF0m"
                alt="profileimage"
                className="rounded-full w-8"
              />
            </div>

            <h2 className="text-neutral-300 font-bold mt-3 text-2xl">
              9 Must-Try React UI
              Components Libraries for
              Stunning Web App in
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-5">
              <button className="border border-gray-500 rounded-lg  px-1">
                #webdev
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #fronted
              </button>
              <button className="border rounded-lg border-gray-500 px-1">
                +2
              </button>
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-2">
              <p>Feb 08,2024 .10m read time</p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/56b2a9f25c55282bd26ee5af4315835b?_a=AQAEuj9"
                alt="images"
                className="rounded-lg "
              />
            </div>

            {/* Coding for img inside card 6 */}

            <div className="flex justify-between items-center mt-4">
            <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">23</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>25</span>
                <Book />
                <Submit />
              </div>
            </div>
          </div>
                                    
                                    {/* 7 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
            <div className="  items-center inline-flex gap-2">
              <img
                src="https://media.daily.dev/image/upload/s--XdwYKoWo--/f_auto/v1729082225/squads/e769430f-7210-467e-9bf2-c9b502361d3c"
                alt="profile"
                className="rounded-full w-8"
              />

              <img
                src="https://media.daily.dev/image/upload/s--fAEF1D4_--/f_auto/v1733941492/avatars/avatar_TdppcDtXGCVKJZX73eSSA"
                alt="profileimage"
                className="rounded-full w-8"
              />
            </div>

            <h2 className="text-neutral-300 font-bold mt-3 text-2xl">
              Top 10 ChatGPT prompts
              to learn anything 10 times
              faster.
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-5">
              <button className="border border-gray-500 rounded-lg  px-1">
                #ai
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #machine-learning
              </button>
              <button className="border rounded-lg border-gray-500 px-1">
                +2
              </button>
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-2">
              <p>Dec 25,2024 .3m read time</p>
            </div>
            
            <div className="flex justify-center ">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/8ea789abdb8e9ed63f180fe8b52a74fb?_a=AQAEuiZ"
                alt="images"
                className="rounded-lg "
              />
            </div>

                           {/* Coding for img inside card 7 */}

            <div className="flex justify-between items-center mt-4">
            <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">23</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>25</span>
                <Book />
                <Submit />
              </div>
            </div>
          </div>
                                   
                                   {/* 8 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
            <div className="  items-center inline-flex gap-2">
              <img
                src="https://media.daily.dev/image/upload/s--3BoAETXw--/f_auto/v1717993214/squads/8a09782e-202a-450f-afda-d4dd3ae97589"
                alt="profile"
                className="rounded-full w-8"
              />

              <img
                src="https://media.daily.dev/image/upload/s--L2wfFKpd--/f_auto/v1730444673/avatars/avatar_0bT9IMCpfSjCrBjFpDBXR"
                alt="profileimage"
                className="rounded-full w-8"
              />
            </div>

            <h2 className="text-neutral-300 font-bold mt-3 text-2xl">
              Top 05 Open-Source
              Projects for Developers in
              2024..
              
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-5">
              <button className="border border-gray-500 rounded-lg  px-1">
                #open-source
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #devtools
              </button>
              
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-2">
              <p>Dec 04,2024 .4m read time</p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/959198256349b2241674dde355132f71?_a=AQAEuj9"
                alt="images"
                className="rounded-lg "
              />
            </div>

                {/* Coding for img inside card 8 */}

                <div className="flex justify-between items-center mt-4">
            <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">160</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>1</span>
                <Book />
                <Submit />
              </div>
            </div>
          </div>
                                     
                                     {/* 9 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
            <div className="  items-center inline-flex gap-2">
              <img
                src="https://media.daily.dev/image/upload/t_logo,f_auto/v1/logos/newstack"
                alt="profile"
                className="rounded-full w-8"
              />
            </div>

            <h2 className="text-neutral-300 font-bold mt-3 text-2xl">
              5 JavaScript Libraries You
              Should Say Goodbye to in
              2025
              
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-5">
              <button className="border border-gray-500 rounded-lg  px-1">
                #webdev
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #javascript
              </button>
              
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-2">
              <p>Dec 07,2024 .7m read time</p>
            </div>


            <div className="flex justify-center">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/31f696d9d994f44bd8a596a235167fff?_a=AQAEuj9"
                alt="images"
                className="rounded-lg "
              />
            </div>

                      {/* Coding for img inside card 9 */}

          <div className="flex justify-between items-center mt-4">
            <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">97</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>19</span>
                <Book />
                <Submit />
              </div>
            </div>
          </div>
                                    
                                    {/* 10 */}
          <div
            className="bg-neutral-900  p-6 rounded-xl
            shadow-lg flex flex-col justify-between hover:shadow-slate-300"
          >
         <div className="  items-center inline-flex gap-2">
              <img
                src="https://media.daily.dev/image/upload/t_logo,f_auto/v1/logos/f4e5c78441f64e17b064585687d42fc6"
                alt="profile"
                className="rounded-full w-8"
              />
            </div>

            <h2 className="text-neutral-300 font-bold mt-3 text-2xl">
             Astro
              
            </h2>
            <div className="text-gray-500 flex flex-1 min-h-px items-center gap-2 mt-10">
              <button className="border border-gray-500 rounded-lg  px-1">
                #webdev
              </button>
              <button className="border rounded-lg border-gray-500  px-1">
                #javascript
              </button>
              
            </div>
            <div className="flex flex-1 text-left text-neutral-300 mt-2">
              <p>Dec 19,2024 .5m read time</p>
            </div>


            <div className="flex justify-center">
              <img
                src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/bb9bdeda274a8292f1775e00b11794e8?_a=AQAEuj9"
                alt="images"
                className="rounded-lg "
              />
            </div>

                         {/* Coding for img inside card 10 */}

                         <div className="flex justify-between items-center mt-4">
            <div className="flex  bg-neutral-800 rounded-md p-1 ">
                <button
                  className="inline-flex cursor-pointer select-none 
                     items-center  shadow-none transition text-white"
                >
                  <span className="w-6 h-6">
                    <Arrowup />
                  </span>
                  <span className="font-bold">55</span>
                </button>
                <div className=" border-r pr-5"></div>
                <button className="w-6 h-6 rotate-180 pr-10 text-white">
                  <Arrowup />
                </button>
              </div>
              <div className="flex text-white items-center justify-center gap-2">
                <Discusion />
                <span>45</span>
                <Book />
                <Submit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
