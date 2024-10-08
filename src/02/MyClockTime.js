import { useState, useEffect } from "react";

function MyClockTime() {
  const [cTime, setCTime] = useState(new Date());

  //clear 전까지는 1초에 한 번씩 계속 작동됨
  useEffect(()=>{
    const tm = setInterval(() => {
      setCTime(new Date());
    }, 1000);

    return clearInterval(tm);
  }, []);

  return(
    <div className='w-full flex justify-center items-center
                  text-2xl font-bold'>
      {cTime.toLocaleTimeString()}
    </div>
  );
}

export default MyClockTime ;