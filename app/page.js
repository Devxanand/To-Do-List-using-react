"use client"
import React, { useState } from 'react';
// screen pe dikhane ke lia usestatesnipet ka use kia jata hai 
const page = () => {
  const [title,settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const [copytask, setcopytask] = useState([])

  const submitHandler = (e)=>{
    // e.preventDefault stop form to submit or reload and print in console.
     e.preventDefault(title)
    //  setmainTask ke ander hame data ko rakhna hai
     setmainTask([...mainTask,{ title, desc }]);
    console.log(mainTask)
    //  this helps to blank after submit 
     settitle("")
     setdesc("")
  }
  const deleteHandler = (i) => {
      let copytask = [...mainTask]
      // splice is used for removing object form list 
      copytask.splice(i,1)
      setmainTask(copytask)
  }

  let renderTask=<h2 className='bg-green-300 flex h-16 items-center text-2xl'>No Task Available</h2>;
  // here t is jo particular element chal raha hai ooska naam hai t and i for index map ke ander aisa he hota hai
  //  har baar jo object aa raha hai wo t hai 
  if(mainTask.length>0){
   renderTask = mainTask.map((t, i)=>{  
    return(
      // key give the unicque identity to any function 
    <li key={i} className='flex justify-center bg-green-300'>
     <div className='flex justify-between px-10 py-3 w-2/3' >
     <h5 className='text-3xl  m-2'>{t.title}</h5>
     <h6 className='text-3xl m-2'>{t.desc}</h6>
    </div>
    <button onClick={()=>{
      deleteHandler(i)
      }} className='text-2xl bg-red-600 text-white rounded py-2 px-4 ml-10 font-bold m-4'>Delete</button>
    </li>);
   });
  
 }
  
  return (
   <>
   <h1 className="bg-black text-white h-16 flex justify-center text-5xl items-center font-bold">Anand ToDoList</h1>
   <form className='flex justify-center' onSubmit={submitHandler}>
   <input type="text" className='border-black text-2xl border-4 m-5 px-4 py-2'
    placeholder='Enter Task Here'
    value={title} 
    // two way binding 
    // settitle(e.target.value) help to  write on screen what you write or you can say its replecating on screen wahat you write in enter title here
    //  two way binding ma hota a hai ki ak koi title naam ka box jisme ma change kar rha hou aur wo ja ke replicate ho rah hai Enter title here ma
    onChange={(e)=>{
      settitle(e.target.value)
    }}
   />
    <input type="text" className='border-black text-2xl border-4 m-5 px-4 py-2'
     placeholder='Enter Descriptioin Here'  
     value={desc}
     onChange={(e)=>{
       setdesc(e.target.value)
     }}/>
    <button className='bg-black px-4 py-1  m-5 font-bold rounded margin text-white text-2xl'>Add task</button> 
   </form>
   <hr/>
   <div className='bg-black h-1 '>
      <ul>
        {renderTask}
      </ul>
   </div>
   </>
  )
}

export default page