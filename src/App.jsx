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
  useEffect(() => { context.isExpanding = isExpanding}, [isExpanding]);


  return (
    <>
      {/* HEADER */}
      <div className='bg-dark-main max-h-[20%] flex flex-row gap-x-2 border-2 border-s-8 w-full fixed left-0 top-0 ps-5 p-2'>
        <img className='logo h-8' src={logo} />
        <div className='flex-1'></div>
        <div className=''>About</div>
      </div>
      {/* HEADER */}


      <div className='container-main flex flex-col align bg-dark-main border-s-8 w-full h-screen ps-0 pt-0'>


        {/* TITLE */}
        <div className='animate-border  w-full flex flex-col gap-y-2 pt-2 mt-20 md:mt-40'>
          <p className='min-h-12 md:h-20 text-5xl md:text-7xl w-[10ch] md:w-full'>{title}</p>
          <div className='socials w-fit h-[70px] flex gap-x-3 py-3 ps-2 rounded-tl-3xl rounded-bl-3xl 
            bg-linear-90 from-lime-300 to-dark-main'
          >
            <a className='aspect-square' href='https://github.com/dhakiweere'><img className="clickable-icon h-full" src={gh_logo} /></a>
            <a className='aspect-square' href='https://linkedin.com/in/dhanikaweerasekara'><img className="clickable-icon h-full" src={lnk_logo} /></a>
          </div>
        </div>
        {/* TITLE */}

        {/* PROJECTS */}
        <div className='animate-border flex flex-col min-h-[300px] ps-1 mt-20'>
          <p className='text-4xl text-white mb-3 underline'>Projects</p>
          <ul>
            <li>
              <div className='flex flex-row p-'>
                <a href='http://reflex.dhakiweere.space'>Reflex Ci/Cd Pipeline</a>
                <div className='w-[30%]'></div>
                <div>Online</div>
              </div>
            </li>
          </ul>
        </div>
        {/* PROJECTS */}
      </div>
    </>
  )

  function _setUtilContext() {
    context.title = title;
    context.setTitle = setTitle;
    context.isExpanding = isExpanding;
    context.setIsExpanding = setIsExpanding;
  }
}
