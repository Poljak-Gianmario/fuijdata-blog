import React from 'react';
import { Link } from "react-router-dom";
import hero from "../photos/3D.png"

function Hero() {

 return (

   <div className="w-screen h-screen text-white" style={{

     background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"

   }}>

     <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

       <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center widthSet heightSet" alt="hero" src={hero}/>

       <div class="text-center lg:w-5/12 w-full">

         <h1 className="my-4 text-5xl font-bold leading-tight">

         Data-Driven Governance: Empowering Nations with Actionable Insights

         </h1>

         <p className="text-2xl mb-8">

         Our company creates data-driven policy solutions for nations

         </p>

        { /*<p>
          
          <button>
              <Link to="/blog" className="py-2 px-6 rounded shadow text-white
              bg-black hover:bg-transparent border-2 border-black transition-all
              duration-500 hover:text-black font--bold">Read my posts</Link>
          </button> 
  </p>*/}
        
        

         <div className="flex justify-center mx-auto">

           <button>

             <Link to="/blog" className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Read my posts</Link>
            

           </button>


         </div>

       </div>

     </div>

   </div >

 );

}


export default Hero