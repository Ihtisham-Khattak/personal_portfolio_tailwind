import React from "react";
import CruptoCurrency from '../assets/cryptoCurrency.png'
import Pagination from '../assets/Pagination.png'
import ReactTodo from '../assets/ReactTodo.png'
import TypeScriptReact from '../assets/TypeScriptReact.jpg'

function Work() {
  return (
    <div name="work" className="w-full md:h-screen bg-[#1e293b] ">
      <div className="max-w-[1000px] mx-auto w-full h-full flex flex-col justify-center">
        <div className="sm:text-center px-8 pb-8 py-2 ">
          <p className=" text-4xl font-bold text-white border-b-4 inline border-pink-600 ">Work</p>
          <p className="py-4  text-[#ccd6f6] font-bold text-4xl">Some of my recent work</p>
        </div>

{/* Container For Portfolio  */}
        <div className="grid sm:gird-cols-3 md:grid-cols-3 gap-4 ">

          {/* Grid 1 Item */}
          <div style={{ backgroundImage: `url(${CruptoCurrency})`}}  className="content-div shadow-lg shadow-[#0401c6] group container rounded-md flex items-center justify-center mx-auto">
              
              {/* Hover Effect */}
              <div className="opacity-0 group hover:opacity-100" >
                <span className="text-white font-bold text-2xl tracking-wider">CryptoCurrency React js</span>
                
                <div className="pt-8 text-center"> 
                  <a href="https://currency-app-portfolio.herokuapp.com/" target='_blank' rel='noopener noreferrer'> <button className="text-center font-bold py-3 px-4 m-2 text-lg rounded-lg bg-white text-gray">Demo</button> </a>
                  {/* <a href="/"> <button>Code </button> </a> */}
                  
                </div>
              </div>
          </div>

          {/* Grid 2 Item */}

          <div style={{ backgroundImage: `url(${ReactTodo})`}}  className="content-div shadow-lg shadow-[#0401c6] group container rounded-md flex items-center justify-center mx-auto">
              
              {/* Hover Effect */}
              <div className="opacity-0 group hover:opacity-100" >
                <span className="text-white font-bold text-2xl tracking-wider">ReactJS ToDO </span>
                
                <div className="pt-8 text-center"> 
                  <a href="https://react-todo-port.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="text-center font-bold py-3 px-4 m-2 text-lg rounded-lg bg-white text-gray">Demo</button> </a>
                  {/* <a href="/"> <button>Code </button> </a> */}
                  
                </div>
              </div>
          </div>

          {/* Grid 3 Item */}

          <div style={{ backgroundImage: `url(${Pagination})`}}  className="content-div shadow-lg shadow-[#0401c6] group container rounded-md flex items-center justify-center mx-auto">
              
              {/* Hover Effect */}
              <div className="opacity-0 group hover:opacity-100" >
                <span className="text-white font-bold text-2xl tracking-wider"> ReactJS Pagination </span>
                
                <div className="pt-8 text-center"> 
                  <a href="https://react-website-port.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <button className="text-center font-bold py-3 px-4 m-2 text-lg rounded-lg bg-white text-gray">Demo</button> </a>
                  {/* <a href="/"> <button>Code </button> </a> */}
                  
                </div>
              </div>
          </div>

            {/* Grid 4 Item */}

            <div style={{ backgroundImage: `url(${TypeScriptReact})`}}  className="content-div shadow-lg shadow-[#0401c6] group container rounded-md flex items-center justify-center mx-auto">
              
              {/* Hover Effect */}
              <div className="opacity-0 group hover:opacity-100" >
                <span className="text-white font-bold text-2xl tracking-wider">ReactJS Typescript ToDO </span>
                
                <div className="pt-8 text-center"> 
                  <a href="https://react-todo-port.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="text-center font-bold py-3 px-4 m-2 text-lg rounded-lg bg-white text-gray">Demo</button> </a>
                  {/* <a href="/"> <button>Code </button> </a> */}
                  
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
