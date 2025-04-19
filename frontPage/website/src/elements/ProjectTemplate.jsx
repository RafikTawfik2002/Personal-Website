import React from 'react'
import { useState } from 'react'

const photos = [
    "dailyHabster/img1.png",
    "dailyHabster/img2.jpg",
    "dailyHabster/img3.jpg",
]






export default function ProjectTemplate({photo: photo, desc: desc}) {
    const [index, setIndex] = useState(0);
    const total = photos.length;


const next = () => setIndex((index + 1) % total);
const prev = () => setIndex((index - 1 + total) % total);

  return (
    <div className='flex p-20'>
      {/* on the left is a description  and    on the right is a photos */}
        <div className='w-[50%]'>
        {/* Title */}
        <div className='text-4xl pb-4'>
            Daily Habster
        </div>
        <div className='text-xl'>
            Production grade fullstack productivity tool used to track habits<br />
            <div className='pt-4 '>
            Repo: <a
              href="https://github.com/RafikTawfik2002/Daily-Habster"
              target="_blank"
              className="hover:underline text-purple-300 underline"
            >
              github.com/RafikTawfik2002/Daily-Habster
            </a><br />
            Website: <a
              href="https://dailyhabster.vercel.app"
              target="_blank"
              className="hover:underline text-purple-300 underline"
            >
              https://dailyhabster.vercel.app
            </a>
            </div>
        </div>
        {/* Technologies */}
        <div className='text-md pt-4'>
            Technologies: 
            <ul className='ml-5'>
                <li>
                     * React
                </li>
                <li>
                    * MonogoDB
                </li>
                <li>
                    * Express.js
                </li>
                <li>
                    * CSS / Tailwind
                </li>
            </ul>
        </div>


        {/* Photo display */}
        </div>
        <div className='w-[50%]'>
        <div className="relative w-full max-w-xl mx-auto aspect-video overflow-hidden rounded-2xl shadow-lg">
      <img
        src={photos[index]}
        alt={`Slide ${index}`}
        className="w-full h-full object-cover"
      />

      <button
        onClick={() => {prev()}}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded-full shadow"
      >
        ‹
      </button>

      <button
        onClick={() => {next()}}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded-full shadow"
      >
        ›
      </button>
    </div>
        </div>
    </div>
  )
}
