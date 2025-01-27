"use client"
import Image from "next/image";
import {motion} from "framer-motion";

const Home = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* Image Container */}
      <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
        <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>
      {/* text Container */}
      <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center items-center'>
        {/* TITLE */}
        <h1 className='text-4xl md:text-6xl font-bold'>If you can think about it. It can be created!</h1>
        {/* DESC */}
        <p className="md:text-xl">
          Passionate, dedicated and value obsessed IT personal, with 11+
          years of experience, who uses domain driven techniques to deliver
          comprehensive solutions to most convoluted business problems.
          Extensively worked with Microsoft stack of technology starting from
          Asp.Net Web Forms and MVC to Asp.net Core Web APIs. Currently
        </p>
        {/* BUTTONS */}
        <div className="flex w-full gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
    
  );
};

export default Home;
