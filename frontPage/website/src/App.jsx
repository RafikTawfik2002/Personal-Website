import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Project from "./elements/Project";
import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa"; // light mode icon
import { VscGithub } from "react-icons/vsc";
import { MdMailOutline } from "react-icons/md";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  return (
    <div className="w-screen bg-gray-800 font-mono  text-gray-200">
      {/* HEADER SECTION */}

      <div className="flex justify-between w-screen font-bold bg-gray-900 backdrop-blur-3xl px-10 shadow-lg items-center h-[100%]">
        <div className="flex">
          <div className="py-4">
            <div className="border-0 border-gray-400 border-t-0 border-b-0 border-l-0 px-4">
              Projects:{" "}
            </div>
          </div>
          <Project title="Daily Habster" />
          <Project title="SPY Network (OOP)" />
          <Project title="2D Games" />
        </div>

        <div className="flex float-right px-4 items-center ">
          <a href="https://github.com/RafikTawfik2002">
          <div className="py-4 px-4">
            
            <VscGithub size={36} />
          </div>
          </a>
          <a href="https://www.linkedin.com/in/rafik-tawfik-539b16261/">
          <div className="py-4 px-4">
            <CiLinkedin size={40} />
          </div>
          </a>
          <a href="mailto:rafikaymanramzy@gmail.com">
          <div className="py-4 px-4">
            <MdMailOutline size={36} />
          </div>
          </a>
        </div>
      </div>

      {/* NAME AND RESUME SECTION */}

      <div className=" border-red-100 pl-20 pt-20 bg-gray-700 flex justify-between w-[100%]">
        {/* Name and bio */}
        <div className="w-[40%]">
          <div className="text-5xl">Rafik Tawfik</div>
          <div className="text-lg mt-5">
            Software engineer and computer scientist, specialized in full-stack
            development and passionate about working on software projects aimed
            at solving real life problems for as many people and businesses as
            possible
          </div>

          {/* Get in touch */}
          <div className="mt-10 p-2 bg-gray-800 rounded-md">
            <div className="mb-3 p-3 text-2xl">Contacts</div>
            <div>
              <div className="m-2 p-3 bg-gray-600 border-1 border-amber-100 rounded-md">
                Phone: +1 647 450 6368
                <br />
              </div>
              <div className="m-2 p-3 bg-gray-600 border-1 border-amber-100 rounded-md">
              Email:{" "}
              <a href="mailto:rafikaymanramzy@gmail.com" className="hover:underline">
                rafikaymanramzy@gmail.com
              </a>
                <br />
              </div>
              <div className="m-2 p-3 bg-gray-600 border-1 border-amber-100 rounded-md">
                Github:{" "}
                <a href="https://github.com/RafikTawfik2002" className="hover:underline">
                  github.com/RafikTawfik2002
                </a>
                <br />
              </div>
              <div className="m-2 p-3 bg-gray-600 border-1 border-amber-100 rounded-md">
                Linkedin:{" "}
                <a href="https://www.linkedin.com/in/rafik-tawfik-539b16261/"className="hover:underline">
                  linkedin.com/in/rafik-tawfik-539b16261
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* Resume, bio, past experience */}

        <div className="w-[60%] flex justify-center">
          <div>
            
            
            <div className="relative inline-block">
            <div className="h-140 overflow-y-scroll">
                <img
                  quality={100}
                  height="500px"
                  width="800px"
                  src="/Resume.jpg"
                  alt="Description of image"
                />
                </div>

              {/* View and download resume */}
            <div className=" mb-4 absolute -top-8 right-0 flex space-x-2 flex-row-reverse text-sm">
              <div
                className="bg-blue-700 border-1 border-black m-1 rounded-md p-2 text-center hover:cursor-pointer hover:bg-blue-600"
                onClick={() => {}}
              >
                View Resume
              </div>
              <div
                className="bg-green-700 border-1 border-black m-1 rounded-md p-2 text-center hover:cursor-pointer hover:bg-green-600"
                onClick={() => {}}
              >
                Download Resume
              </div>
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
