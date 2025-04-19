import React from 'react'
import Project from './helpers/Project'
import { VscGithub } from 'react-icons/vsc'
import { CiLinkedin } from 'react-icons/ci'
import { MdMailOutline } from 'react-icons/md'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between font-bold bg-gray-900 backdrop-blur-3xl px-10 shadow-lg items-center">
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
          <a href="https://github.com/RafikTawfik2002" target="_blank">
            <div className="py-4 px-4">
              <VscGithub size={36} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/rafik-tawfik-539b16261/"
            target="_blank"
          >
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
  )
}
