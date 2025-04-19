import React from 'react'

export default function Bio() {
  return (
    <div className=" border-red-100 pl-20 pt-40 bg-gray-700 flex justify-between w-[100%] pb-10 pr-20">
    {/* Name and bio */}
    <div className="w-[40%] pr-5">
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
            <a
              href="mailto:rafikaymanramzy@gmail.com"
              className="hover:underline"
            >
              rafikaymanramzy@gmail.com
            </a>
            <br />
          </div>
          <div className="m-2 p-3 bg-gray-600 border-1 border-amber-100 rounded-md">
            Github:{" "}
            <a
              href="https://github.com/RafikTawfik2002"
              target="_blank"
              className="hover:underline"
            >
              github.com/RafikTawfik2002
            </a>
            <br />
          </div>
          <div className="m-2 p-3 bg-gray-600 border-1 border-amber-100 rounded-md">
            Linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/rafik-tawfik-539b16261/"
              target="_blank"
              className="hover:underline"
            >
              linkedin.com/in/rafik-tawfik-539b16261
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
    {/* Resume, bio, past experience */}

    <div className="w-[60%] flex justify-center pl-5">
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
            <a href={"Resume.pdf"} target="_blank" rel="nooopener noreferrer">
            <div
              className="bg-blue-700 border-1 border-black m-1 rounded-md p-2 text-center hover:cursor-pointer hover:bg-blue-600"
              onClick={() => {}}
            >
              <button>
              View Resume
              </button>
            </div>
            </a>
            <a href={"Resume.pdf"} 
                download="Resume.pdf">
            <div
              className="bg-green-700 border-1 border-black m-1 rounded-md p-2 text-center hover:cursor-pointer hover:bg-green-600"
              onClick={() => {}}
            >

              <button>
              
                
              
                Download Resume
             
              </button>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
