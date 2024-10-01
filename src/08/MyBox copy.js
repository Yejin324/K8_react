import { useState, useEffect } from "react" ; 

export default function MyBox() {
  const [blueFlag, setBlueFlag] = useState(false);
  const [orangeFlag, setOrangeFlag] = useState(false);
  const [limeFlag, setLimeFlag] = useState(false);

  const handleBlue = () => {
    //false로 초기값을 설정해둔 blueFlag의 값을 반대로 설정함.
    setBlueFlag(!blueFlag);
  }
  const handleOrange = () => {
    //false로 초기값을 설정해둔 blueFlag의 값을 반대로 설정함.
    setOrangeFlag(!orangeFlag);
  }
  const handleLime = () => {
    //false로 초기값을 설정해둔 blueFlag의 값을 반대로 설정함.
    setLimeFlag(!limeFlag);
  }
  
  useEffect(()=>{
    console.log(blueFlag);
  },[blueFlag]);
  //blueFlag가 바뀌었을때만 useEffect 실행

  useEffect(()=>{
    console.log(orangeFlag);
  },[orangeFlag]);
  
  useEffect(()=>{
    console.log(limeFlag);
  },[limeFlag]);

  return (
    <div className="h-screen flex flex-row justify-center items-center">
      <div className={`w-full p-10 m-5
                      border border-slate-200 ${blueFlag ? 'bg-blue-300' : ''}
                      flex flex-col justify-center items-center`}>
        <h1 className={`w-3/5 text-center text-xl
                      border border-slate-300 ${blueFlag ? 'bg-blue-100' : ''}
                      rounded-md p-5 mt-5`}>
          Blue
        </h1>
        <div onClick={handleBlue}
              className={`w-full text-center
                        border border-slate-300
                        rounded-md p-5 m-5
                        bg-blue-100 hover:bg-blue-200`}>
          Blue Toggle
        </div>
      </div>
      <div className={`w-full p-10 m-5
                      border border-slate-200 ${orangeFlag ? 'bg-orange-300' : ''}
                      flex flex-col justify-center items-center`}>
        <h1 className={`w-3/5 text-center text-xl
                      border border-slate-300 ${orangeFlag ? 'bg-orange-100' : ''}
                      rounded-md p-5 mt-5`}>
          Orange
        </h1>
        <div onClick={handleOrange}
              className="w-full text-center
                        border border-slate-300
                        rounded-md p-5 m-5
                        bg-orange-100 hover:bg-orange-200">
          Orange Toggle
        </div>
      </div>
      <div className={`w-full p-10 m-5
                      border border-slate-200 ${limeFlag ? 'bg-lime-300' : ''}
                      flex flex-col justify-center items-center`}>
        <h1 className={`w-3/5 text-center text-xl
                      border border-slate-300 ${limeFlag ? 'bg-lime-100' : ''}
                      rounded-md p-5 mt-5`}>
          Lime
        </h1>
        <div onClick={handleLime}
              className="w-full text-center
                        border border-slate-300
                        rounded-md p-5 m-5
                        bg-lime-100 hover:bg-lime-200">
          Lime Toggle
        </div>
      </div>
    </div>
  )
}
