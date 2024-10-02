import TailButton from "../UI/TailButton";
import React, { useEffect, useState } from "react";

export default function TrafficNav({title, c}) {
  
  const [sel, setSel] = useState();

  const tags = c.map(item => <TailButton 
                          key = {item}
                          caption = {item}
                          color = {item == sel ? 'orange' : 'blue'}
                          handleClick = {()=>handleBtClick(item)}/>
  );

  const handleBtClick = (item) => {
    setSel(item);
    console.log('item = ', item);
  }

  return (
    <div className="w-10/12 mt-4 m-2
                    flex justify-between items-center">
      <div className="w-1/5 text-center font-bold text-lg">
        교통 사고 {title}
      </div>
      <div  className="w-4/5 flex justify-end items-center">
        {tags}
      </div>
    </div>
  )
}
