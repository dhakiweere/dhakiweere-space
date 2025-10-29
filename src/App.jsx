import { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import gh_logo from './assets/github_logo.png'
import lnk_logo from './assets/linkedin_logo2.png'
import { context, titleChangeJob } from './utils/titleAnimate'
import ProjectListItem from './component/ProjectListItem'

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
    <div className='container-top scroll-smooth w-full h-screen overflow-y-scroll flex flex-row justify-center items-start'>

      {/* Container actual */}
      <div className="container-actual bg-transparent w-full max-w-6xl h-fit 
          flex flex-col items-start gap-y-10 xl:gap-y-20"
      >

        {/* HEADER */}
        <div className='bg-linear-to-r from-dark-main font-mono to-transparent max-h-[20vh] w-full
         flex flex-row gap-x-2 
         sticky top-0
         border-b-2 border-s-10 xl:border-s-20 ps-5 p-2'>
          <a href='https://dhakiweere.space'><img className='logo h-8' src={logo} /></a>
          <div className='flex-1'></div>
          <button className='flex items-center font-bitcount 
          hover:scale-110 hover:cursor-pointer hover:underline
          ' onClick={() => {
              document.getElementById('about').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}>
            About
          </button>

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
        <div className='animate-border h-fitb xl:min-h-[200px] w-full flex flex-col gap-y-3 p-3'> <p className='w-fit text-4xl xl:text-5xl mb-3 font-bitcount border-dotted border-b-2'>Projects</p> <ol className='text-xl font-inconsolata'>

          {/* reflex ci/cd */}
          <li>
            <ProjectListItem
              title="Reflex Ci/Cd"
              desc="Self reacting duplex Ci/CD Pipeline"
              onlineURL="http://reflex.dhakiweere.space"
              repoURL="https://github.com/dhakiweere/reflex-ci-cd"
            />
          </li>

          {/* lan chat*/}
          <li>
            <ProjectListItem
              title="Lan Chat"
              desc="Console-Based Chat Application for Local Area Networks"
              repoURL="https://github.com/dhakiweere/lan-chat"
            />
          </li>

          {/* master observer*/}
          <li>
            <ProjectListItem
              title="Master Observer"
              desc="File System Monitor with Real-Time Change Detection"
              repoURL="https://github.com/dhakiweere/master-observer"
            />
          </li>

          {/* auto loader*/}
          <li>
            <ProjectListItem
              title="Auto Loader"
              desc="JavaScript Plugin that enables auto refreshing Web Pages in development time."
              repoURL="https://github.com/dhakiweere/auto-loader"
            />
          </li>

        </ol>
        </div>
        {/* PROJECTS */}

        {/* ABOUT*/}
        <div id='about' className='animate-border h-fit w-full flex flex-col gap-y-3 p-3'>
          <p className='w-fit text-4xl xl:text-5xl mb-3 font-bitcount border-dotted border-b-2'>About</p>
          <p className='w-[35ch] xl:w-[100ch] font-inconsolata italic text-xl '>
            I am a final-year undergraduate student at the Java Institute of Advanced Technology,
            pursuing a degree in information technology. <br /><br /> I have a strong passion for cryptography, DevOps, and
            cloud computing, with a particular interest in building secure, scalable, and automated systems.
            <br /><br />I aim to become a skilled Cloud/DevOps Engineer, contributing to innovative and reliable infrastructure solutions.
            Outside of my academic and technical pursuits, I enjoy swimming and open skies.
          </p>
        </div>
        {/* ABOUT*/}

        {/* FOOTER */}
        <footer className="footer w-full h-fit
          flex flex-row justify-center items-center
        ">
          <div className='bg-linear-to-b from-dark-main from-40% to-transparent rounded-t-xl
           font-inconsolata text-sm text-center p-2 font-bold
           flex flex-col md:flex-row'>
            <p>&copy; 2025 Dhanika Weerasekara &nbsp;</p>
            <p>All rights reserved</p>
          </div>
        </footer>
        {/* FOOTER */}
      </div>
    </div >
  )

  function _setUtilContext() {
    context.title = title;
    context.setTitle = setTitle;
    context.isExpanding = isExpanding;
    context.setIsExpanding = setIsExpanding;
  }
}
