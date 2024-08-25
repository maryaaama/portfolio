import React, { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import ProgressBar from './components/ProgressBar.js';
import MyProject from './components/myproject.js';
import  db from '/data/db.json';
import ContactUs from './components/contactUs.js'

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
      <div style={{backgroundImage: `url('img/back8.jpg')`}} className="bg-fixed bg-cover bg-no-repeat relative h-3/4 w-full">
        <div className=" z-10 sticky flex items-center justify-between w-full backdrop-contrast-50 p-4 bg-gray-100 rounded-lg shadow-lg">
          <p className="text-lg text-slate-600">
            maryam alipour
          </p>
        <div className="sm:hidden">
        <Menu>
           <MenuButton className={'text-slate-600'}><BeakerIcon className="h-5 w-5" /></MenuButton>
           <MenuItems anchor="bottom">
           <MenuItem>
           <a className="block data-[focus]:bg-blue-100" href="/settings">
           services
           </a>
         </MenuItem>
         <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
          About
          </a>
         </MenuItem>
         <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
          Skills
          </a>
         </MenuItem>
         <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
          Projects
          </a>
         </MenuItem>
        </MenuItems>
        </Menu>
        </div>
         <div className="sm:flex justify-between hidden">
          <div className="mr-5">
          <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <h1 className="text-slate-600">services</h1>
            </a>
          </div>
          <div className="mr-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <h1 className="text-slate-600">About</h1>
            </a>
          </div>
          <div className="mr-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <h1 className="text-slate-600">Skills</h1>
            </a>
          </div>
          <div className="mr-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <h1 className="text-slate-600">Projects</h1>
            </a>
          </div>
         </div>
        </div>
        <div className="flex items-center justify-around w-full py-16">
          <div className="flex flex-col items-start">
            <h3 className="mb-3 text-3xl font-bold">I'm</h3>
            <h1 className="text-7xl mb-3 font-bold">Maryam Alipour</h1>
            <h2 className="text-4xl font-medium animate-pulse ">Front End Developer</h2>
            <div className="flex mt-3">
              <a className="bg-[#eca348] p-4 rounded-lg text-white text-xl ease-in duration-300 ">Download CV</a>
              <div className="flex justify-center items-center ml-12">
              <button className="mr-3">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#eca348] animate-ping" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </button>
              <h5 className="text-xl">Play Video</h5>
              </div>
            </div>
          </div>
          <div>
          <Image
            className="w-full"
            src="/img/ax10.jpg"
            alt=""
            width={480}
            height={480}
            priority
          />
          </div>
        </div>
        
      </div>
      <div className="bg-slate-100 w-full flex flex-col items-center mb-10">
        <div className="grid grid-cols-2 place-content-between w-7/12 my-5">
         <h1 className="text-5xl">My Servises</h1>
         <div className="justify-self-end"><a className="bg-[#eca348] p-4 rounded-lg text-white flex justify-center text-xl">Hire Me</a></div>
        </div>
        <div className="grid grid-cols-1 gap-8 w-full max-w-7xl sm:grid-cols-2">

          <div className="p-12 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex items-center">
            <div style={{backgroundImage: `url('img/Untitled.jpg')`}} className="mr-10 bg-no-repeat rounded-full">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
             </svg>
            </div>
            <div>
            <h2 className="mb-3 text-2xl font-bold">Creative Design</h2>
            <span className="text-[#286eb4] text-xl">Start from $199</span>
            <p className="text-gray-700 mt-3">
            Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos..
            </p>
            </div> 
           
          </div>

          <div className="p-12 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex items-center">
          <div style={{backgroundImage: `url('img/Untitled.jpg')`}} className="mr-10 bg-no-repeat rounded-full">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
           </svg>
           </div>  
           <div>
            <h2 className="mb-3 text-2xl font-bold">Web Design</h2>
            <span className="text-[#286eb4] text-xl">Start from $199</span>
            <p className="text-gray-700 mt-3">
            Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.
            </p>
           </div>
          </div>

          <div className="p-12 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex items-center">
          <div style={{backgroundImage: `url('img/Untitled.jpg')`}} className="mr-10 bg-no-repeat rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
           </div> 
           <div>
            <h2 className="mb-3 text-2xl font-bold">UI/UX Design</h2>
            <span className="text-[#286eb4] text-xl">Start from $199</span>
            <p className="text-gray-700 mt-3">
            Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.
            </p>
           </div> 
          </div>

          <div className="p-12 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex items-center">
          <div style={{backgroundImage: `url('img/Untitled.jpg')`}} className="mr-10 bg-no-repeat rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
           </div>
           <div> 
            <h2 className="mb-3 text-2xl font-bold">Graphic Design</h2>
            <span className="text-[#286eb4] text-xl">Start from $199</span>
            <p className="text-gray-700 mt-3">
            Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.
            </p>
           </div> 
          </div>
        </div>
      </div> 
      <div className="flex justify-around w-2/3 mt-10 mb-10">
        <div className=" basis-2/4">
          <h1 className="text-5xl mb-12">Skills & Experience</h1>
          <p className="text-2xl mb-6 text-slate-400">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
          <h3 className="text-3xl">My Skills</h3>
          <div className="grid grid-cols-2 gap-4 mt-5">
           <div className="flex w-full flex-col gap-4">
             <h6 className='text-base'>html</h6>
             <ProgressBar value={99} color="#8A2BE2"/>
             <h6 className='text-base'>css</h6>
             <ProgressBar value={95} color="#FFA500"/>
             <h6 className='text-base'>Javascript</h6>
             <ProgressBar value={90} color="#0000FF"/>
           </div>
           <div className="flex w-full flex-col gap-4">
           <h6 className='text-base'>tailwindcss</h6>
           <ProgressBar value={85} color="#286eb4"/>
             <h6 className='text-base'>next js</h6>
             <ProgressBar value={55} color="black"/>
             <h6 className='text-base'>react js</h6>
             <ProgressBar value={90} color="#DC143C"/>
           </div>
          </div>
        </div>
        <div className="ml-10  basis-2/4">
          <div className="grid grid-cols-2 place-content-stretch border-[#eca348] border-2 rounded-lg w-full">
            <button
               className={`text-2xl py-4 ${activeTab === 'experience' ? 'bg-[#eca348] ' : ''}`}
               onClick={() => setActiveTab('experience')}
             >
               Experience
             </button>
             <button
               className={`text-2xl py-4 ${activeTab === 'education' ? 'bg-[#eca348]' : ''}`}
               onClick={() => setActiveTab('education')}
             >
               Education
             </button>
          </div>

           {activeTab === 'experience' && (
             <div className='grid grid-cols-2 gap-4 mt-5 pl-5'>
               <div className='grid gap-y-5'>
                 <div className='mb-5'>
                 <h5 className='text-2xl'>UI Designer</h5>
                 <hr className='my-2 text-current'></hr>
                 <p className='text-l text-[#286eb4]'>2005 2006</p>
                 <h6 className='text-xl'>Web Designer</h6>
                 </div>
                 <div>
                 <h5 className='text-2xl'>Apex Software Inc</h5>
                 <hr className='my-2 text-current'></hr>
                 <p className='text-l text-[#286eb4]'>2005 2006</p>
                 <h6 className='text-xl'>Web Designer</h6>
                 </div>
               </div>
               <div className='grid gap-y-5'>
               <div className='mb-5'>
                 <h5 className='text-2xl'>UI Designer</h5>
                 <hr className='my-2 text-current'></hr>
                 <p className='text-l text-[#286eb4]'>2005 2006</p>
                 <h6 className='text-xl'>Web Designer</h6>
                 </div>
                 <div>
                 <h5 className='text-2xl'>Apex Software Inc</h5>
                 <hr className='my-2 text-current w-1/2'></hr>
                 <p className='text-l text-[#286eb4]'>2005 2006</p>
                 <h6 className='text-xl'>Web Designer</h6>
                 </div>
               </div>
             </div>
           )}

           {activeTab === 'education' && (
            <div className='grid grid-cols-2 gap-4 mt-5 pl-5'>
              <div className='grid gap-y-5'>
                <h2 className='text-2xl'>UI Design Course</h2>
                <h2 className='text-2xl'>Web Design</h2>
                <h2 className='text-2xl'>Cambridge University</h2>
                <h2 className='text-2xl'>Cambridge University</h2>
              </div>
              <div className='grid gap-y-5'>
                <h2 className='text-2xl'>IOS Development</h2>
                <h2 className='text-2xl'>Cambridge University</h2>
                <h2 className='text-2xl'>Apps Design</h2>
                <h2 className='text-2xl'>Cambridge University</h2>
              </div>
            </div>
           )}
        </div>
       </div>
        <div className='my-10 w-2/3'>
          <h1 className='text-5xl mb-10'>My Projects</h1>
          <div className='grid grid-cols-3 gap-3'>
            {console.log(db)}
            {db.projects.map((project) => (
               <MyProject key={project.id} {...project}/>
             ))
            }
          </div>
        </div>
      <div className='bg-slate-100 w-full flex justify-center'>
       <div className='grid grid-cols-2 w-2/3 py-24 sm:py-32'>
        <div className='py-10'>
          <h1 className='text-5xl'>Let's Work Together</h1>
          <div className='mt-16'>
            <p className='text-xl text-slate-500 mb-5'>Call me:</p>
            <h3 className='text-3xl'>09193429924</h3>
            <hr></hr>
          </div>
          <div className='mt-16'>
            <p className='text-xl text-slate-500 mb-5'>Mail me:</p>
            <h3 className='text-3xl'>maryamalipour1901@gmail.com</h3>
            <hr></hr>
          </div>
         <div className='mt-16'>
          <p className='text-xl text-slate-500 mb-7'>Follow me:</p>
          <div className='flex'>
           <div className='bg-[#eca348] rounded-full  w-12 h-12 flex justify-center items-center mr-2'>
           <a href='#'>
           <svg xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 41 40" fill="none">
            <rect x="0.109375" width="40.0208" height="40" rx="8" fill="none"/>
           <path className='fill-[#286eb4]' d="M20.1266 12.8212C16.151 12.8212 12.9442 16.0263 12.9442 20C12.9442 23.9737 16.151 27.1788 20.1266 27.1788C24.1023 27.1788 27.3091 23.9737 27.3091 20C27.3091 16.0263 24.1023 12.8212 20.1266 12.8212ZM20.1266 24.6672C17.5575 24.6672 15.4571 22.5741 15.4571 20C15.4571 17.4259 17.5512 15.3328 20.1266 15.3328C22.7021 15.3328 24.7962 17.4259 24.7962 20C24.7962 22.5741 22.6958 24.6672 20.1266 24.6672ZM29.2782 12.5275C29.2782 13.4584 28.5281 14.2019 27.6029 14.2019C26.6715 14.2019 25.9277 13.4522 25.9277 12.5275C25.9277 11.6028 26.6778 10.8531 27.6029 10.8531C28.5281 10.8531 29.2782 11.6028 29.2782 12.5275ZM34.0353 14.2269C33.929 11.9839 33.4165 9.9971 31.7724 8.36015C30.1346 6.7232 28.1468 6.21087 25.9027 6.0984C23.5898 5.9672 16.6573 5.9672 14.3444 6.0984C12.1065 6.20462 10.1187 6.71695 8.47463 8.3539C6.83059 9.99085 6.32426 11.9777 6.21174 14.2207C6.08046 16.5324 6.08046 23.4613 6.21174 25.7731C6.318 28.0161 6.83059 30.0029 8.47463 31.6399C10.1187 33.2768 12.1003 33.7891 14.3444 33.9016C16.6573 34.0328 23.5898 34.0328 25.9027 33.9016C28.1468 33.7954 30.1346 33.2831 31.7724 31.6399C33.4102 30.0029 33.9228 28.0161 34.0353 25.7731C34.1666 23.4613 34.1666 16.5387 34.0353 14.2269ZM31.0473 28.2535C30.5597 29.4781 29.6158 30.4215 28.3843 30.9151C26.5403 31.6461 22.1645 31.4774 20.1266 31.4774C18.0888 31.4774 13.7068 31.6399 11.869 30.9151C10.6438 30.4278 9.69984 29.4843 9.20601 28.2535C8.47463 26.4104 8.64341 22.0368 8.64341 20C8.64341 17.9632 8.48088 13.5834 9.20601 11.7465C9.69359 10.5219 10.6375 9.57849 11.869 9.0849C13.713 8.3539 18.0888 8.52259 20.1266 8.52259C22.1645 8.52259 26.5465 8.36015 28.3843 9.0849C29.6095 9.57224 30.5535 10.5157 31.0473 11.7465C31.7787 13.5896 31.6099 17.9632 31.6099 20C31.6099 22.0368 31.7787 26.4166 31.0473 28.2535Z" fill="white"/>
           </svg>
           </a>
           </div>
           <div className='bg-[#eca348] rounded-full  w-12 h-12 flex justify-center items-center mr-2'>
           <a href='https://wa.me/9193429924?text=Hey%there%How’re%you%doing'>
           <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 32 32"><path className='fill-[#286eb4]' d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z" fill-rule="evenodd"></path></svg>
           </a>
           </div>
           <div className='bg-[#eca348] rounded-full w-12 h-12 flex justify-center items-center mr-2'>
           <a href='#' >
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path className='fill-[#286eb4]' d="M6.77905 27.0504C6.77905 27.5769 6.35594 28 5.82942 28H1.81464C1.28811 28 0.86501 27.5769 0.86501 27.0504V10.1827C0.86501 9.65615 1.28811 9.23304 1.81464 9.23304H5.83882C6.36535 9.23304 6.78845 9.65615 6.78845 10.1827V27.0504H6.77905ZM3.82673 7.64406C1.71122 7.64406 0 5.93284 0 3.82673C0 1.72062 1.71122 0 3.82673 0C5.94224 0 7.65346 1.71122 7.65346 3.82673C7.65346 5.94224 5.93284 7.64406 3.82673 7.64406ZM27.812 27.135C27.812 27.6145 27.4265 28 26.9469 28H22.6313C22.1518 28 21.7663 27.6145 21.7663 27.135V19.2183C21.7663 18.0336 22.1142 14.047 18.6823 14.047C16.0215 14.047 15.4762 16.7831 15.3727 18.0054V27.135C15.3727 27.6145 14.9872 28 14.5077 28H10.3331C9.85359 28 9.4681 27.6145 9.4681 27.135V10.1075C9.4681 9.62794 9.85359 9.24245 10.3331 9.24245H14.5077C14.9872 9.24245 15.3727 9.62794 15.3727 10.1075V11.5836C16.36 10.0981 17.8267 8.96038 20.9483 8.96038C27.8684 8.96038 27.8214 15.4197 27.8214 18.9738L27.812 27.135Z" />
           </svg>
           </a>
           </div>
           <div className='bg-[#eca348] rounded-full w-12 h-12 flex justify-center items-center mr-2'>
           <a href='https://t.me/maryaaamalipour'>
           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path className='fill-[#286eb4]' d="M16,2c-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14S23.732,2,16,2Zm6.489,9.521c-.211,2.214-1.122,7.586-1.586,10.065-.196,1.049-.583,1.401-.957,1.435-.813,.075-1.43-.537-2.218-1.053-1.232-.808-1.928-1.311-3.124-2.099-1.382-.911-.486-1.412,.302-2.23,.206-.214,3.788-3.472,3.858-3.768,.009-.037,.017-.175-.065-.248-.082-.073-.203-.048-.29-.028-.124,.028-2.092,1.329-5.905,3.903-.559,.384-1.065,.571-1.518,.561-.5-.011-1.461-.283-2.176-.515-.877-.285-1.574-.436-1.513-.92,.032-.252,.379-.51,1.042-.773,4.081-1.778,6.803-2.95,8.164-3.517,3.888-1.617,4.696-1.898,5.222-1.907,.116-.002,.375,.027,.543,.163,.142,.115,.181,.27,.199,.379,.019,.109,.042,.357,.023,.551Z" fill-rule="evenodd"></path></svg>
           </a>
           </div> 
          </div>
         </div>
        </div>
        <div><ContactUs/></div>
       </div>
      </div>
      </main>
      
    </>
  );
}
