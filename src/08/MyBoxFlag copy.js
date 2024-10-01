import React, { useState, useEffect } from "react";

export default function MyBoxFlag({color}) {
  const [Flag, setFlag] = useState(false);
  const colorObj = {
    'blue' : {
      'bg300': 'bg-blue-300',
      'bg200': 'bg-blue-200',
      'bg100': 'bg-blue-100',
    }, 
    'orange' : {
      'bg300': 'bg-orange-300',
      'bg200': 'bg-orange-200',
      'bg100': 'bg-orange-100',
    }, 
    'lime' : {
      'bg300': 'bg-lime-300',
      'bg200': 'bg-lime-200',
      'bg100': 'bg-lime-100',
    }, 
    'pink' : {
      'bg300': 'bg-pink-300',
      'bg200': 'bg-pink-200',
      'bg100': 'bg-pink-100',
    }, 
  }

  const obj = colorObj[color];

  const handleClick = () => {
    //false로 초기값을 설정해둔 blueFlag의 값을 반대로 설정함.
    setFlag(!Flag);
  }

  useEffect(()=>{
    console.log(Flag);
  },[Flag]);

  return (
      <div className={`w-full p-10 m-5
                      border border-slate-200 ${ Flag ? obj['bg300'] : ''}
                      flex flex-col justify-center items-center`}>
        <h1 className={`w-3/5 text-center text-xl
                      border border-slate-300 ${ Flag ? obj['bg100'] : ''}
                      rounded-md p-5 mt-5`}>
          {color.charAt(0).toUpperCase()+ color.slice(1)}
        </h1>
        <div onClick={handleClick}
              className={`w-full text-center
                        border border-slate-300
                        rounded-md p-5 m-5
                        ${obj['bg100']} hover:${obj['bg200']}`}>
          {color.charAt(0).toUpperCase()+ color.slice(1)} Toggle
        </div>
      </div>
  )
}
