import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.png'
import gh_logo from './assets/github_logo.png'
import lnk_logo from './assets/linkedin_logo2.png'
import { context, titleChangeJob } from './utils/titleAnimate'

// DEBUG
// import './debug.css'

export default function () {
  const [title, setTitle] = useState('');
  const [isExpanding, setIsExpanding] = useState(true);

  useEffect(() => {
    // Util.js context var
    _setUtilContext();
    // title change job kickstart
    titleChangeJob();
  }, []);

  useEffect(() => { context.title = title }, [title]);
  useEffect(() => { context.isExpanding = isExpanding }, [isExpanding]);


  return (
    <div className='container-top w-full h-screen flex flex-col justify-center items-center'>

      {/* Container actual */}
      <div className="container-actual bg-transparent w-full max-w-6xl h-full 
          flex flex-col justify-baseline items-start gap-y-10 xl:gap-y-20"
      >

        {/* HEADER */}
        <div className='bg-linear-to-r from-dark-main font-mono to-transparent max-h-[20%] w-full
         flex flex-row gap-x-2 
         border-b-2 border-s-10 xl:border-s-20 ps-5 p-2'>
          <img className='logo h-8' src={logo} />
          <div className='flex-1'></div>
          <p className='flex items-center font-bitcount'>About</p>
           
        </div>
        {/* HEADER */}

        {/* TITLE */}
        <div className='animate-border w-full flex flex-col gap-y-2 p-3'>
          <p className='min-h-12 md:h-20 text-5xl bold md:text-7xl w-[10ch] md:w-full font-sans'>{title}</p>
          <div className='socials w-fit h-[70px] flex gap-x-3 
            py-3 ps-3 pe-5 rounded-tl-3xl rounded-bl-3xl  '
            >
            <a className='aspect-square' href='https://github.com/dhakiweere'><img className="clickable-icon h-full" src={gh_logo} /></a>
            <a className='aspect-square' href='https://linkedin.com/in/dhanikaweerasekara'><img className="clickable-icon h-full" src={lnk_logo} /></a>
          </div>
        </div>
        {/* TITLE */}

        {/* PROJECTS */}
        <div className='animate-border h-fit xl:min-h-[200px] w-full flex flex-col gap-y-3 p-3'>
          <p className='w-fit text-4xl xl:text-5xl mb-3 font-bitcount border-dotted border-b-2'>Projects</p>
          <ol className='text-xl font-inconsolata'>
            {/* reflex ci/cd */}
            <li >
              <div className='animate-selection mb-3 flex flex-row gap-x-2 items-center'>
                <p className="font-bold" >Reflex Ci/Cd</p>
                <div className='flex-1'></div>
                <a href='http://reflex.dhakiweere.space' className='animate-button-online'>Online</a>
                <a href='https://github.com/dhakiweere/reflex-ci-cd' className='animate-button-repo'>Repo</a>
              </div>
            </li>

            {/* other one */}
            <li>
              <div className='animate-selection flex flex-row items-center'>
                <p className="font-bold" >Thock Simulator</p>
                <div className='flex-1'></div>
                <a href='http://reflex.dhakiweere.space' className='animate-button-repo'>Repo</a>
              </div>
            </li>
          </ol>
        </div>
        {/* PROJECTS */}
      </div>
    </div>
  )

  function _setUtilContext() {
    context.title = title;
    context.setTitle = setTitle;
    context.isExpanding = isExpanding;
    context.setIsExpanding = setIsExpanding;
  }
}
