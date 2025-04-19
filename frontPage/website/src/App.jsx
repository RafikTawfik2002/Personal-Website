import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Bio from "./elements/Bio";

import Header from "./elements/Header";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import ProjectTemplate from "./elements/ProjectTemplate";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  return (
    <div className="w-screen bg-gray-800 font-mono  text-gray-200">
      {/* HEADER SECTION */}

      <Header />

      {/* NAME AND RESUME SECTION */}
      <Bio />


      <div className="bg-gray-500 rounded-md">
        <ProjectTemplate />
      </div>

    </div>
  );
}

export default App;
