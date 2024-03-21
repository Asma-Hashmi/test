


function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <div className='h-[80px] w-screen bg-slate-950 font-semibold flex items-center justify-around'>
         <h1 className='text-white text-2xl'>About<span className=' text-yellow-500 text-2xl'>Me.</span></h1>
         {/* LINKS */}
         <div className='flex justify-between gap-4 text-white '>
         <a href=''>HOME</a>
         <a href=''>ABOUT</a>
         <a href=''>SERVICE</a>
         <a href=''>PORTFOLIO</a>
         <a href=''>RESUME</a>
         <a href=''>BLOG</a>
         <a href=''>CONTACT</a>
         </div>
         </div>
         {/* HERO */}
         <div className='h-screen w-screen bg-slate-900 flex items-center justify-center gap-8 p-24 '>
          {/* LEFT */}
          <div className=' text-white flex flex-col flex-1 gap-4'>
            <h3 className='text-yellow-500'>Hello,Welcome</h3>
            <h1 className='text-4xl '>I M ASMA HASHMI</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatum dolor illum aperiam dolorum nobis vel ea doloribus
              laboriosam consectetur, aliquam explicabo provident</p>
            <button className='text-slate-950 text-xl h-10 w-36 p-5 rounded-md  bg-amber-500 text-white md flex items-center justify-center'>Contact us</button>
          </div> 
          {/* RIGHT */}   
          <div className="flex flex-1 w-full"> 
               <img src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" className="object-cover rounded-xl   " width="400px" height="800px"  alt="" />
          </div>
         </div>
      </div>
      
  );
}

export default App;
