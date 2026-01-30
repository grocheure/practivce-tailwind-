import { useState } from "react"

function App() {
  const [open,setOpen] = useState(false);
  const [theme,setTheme] = useState("light");
  return (
    <>
    <div className={`${theme} min-h-screen   text-black bg-white  dark:text-white dark:bg-black `}>
      
      <div className="flex items-center justify-between px-4">
      <div className="font-bold  text-black bg-white  dark:text-white dark:bg-black ">logo</div>

      {/* desktip  */}
      <div className="hidden sm:flex  gap-2 text-black bg-white  dark:text-white dark:bg-black">
          <span>Home</span>
          <span>About</span>
          <span>contact</span>
          <button className="text-xl cursor-pointer " onClick={()=>setTheme(theme==="light"?"dark":"light")}>
            {theme === "light" ? "🌑" : "☀️" }
            </button>  
 
      </div>


     <button className="text-xl cursor-pointer sm:hidden" onClick={()=>setOpen(!open)}>|||</button>
    

   </div>
   {/* mobile version */}
     {open &&(
    <div className="flex flex-col items-center gap-2 text-black bg-white  dark:text-white dark:bg-black sm:hidden">
         <span>Home</span>
          <span>About</span>
          <span>contact</span>    
          <button className="text-xl cursor-pointer sm:hidden" onClick={()=>setTheme(theme==="light"?"dark":"light")}>
             {theme === "light" ? "🌑" : "☀️" }
            </button>  
   </div>
  )
}
   
   <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 text-black bg-white  dark:text-white dark:bg-black p-6 gap-3 text-center font-semibold text-2xl sm:text-lg">
    
    <div className="bg-emerald-300 p-4 rounded hover:bg-emerald-500 hover:scale-105 transition-all duration-300">feature 1 </div>
    <div className="bg-emerald-300 p-4 rounded">feature 2 </div>
    <div className="bg-emerald-300 p-4 rounded">feature 3 </div>
    <div className="bg-emerald-300 p-4 rounded">feature 4 </div>
    <div className="bg-emerald-300 p-4 rounded">feature 5</div>
    <div className="bg-emerald-300 p-4 rounded">feature 6</div>
   </div> 
    </div>


   
    </>
  )
}

export default App
