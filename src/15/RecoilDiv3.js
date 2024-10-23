import { useEffect } from 'react';
import TailButton from '../UI/TailButton';
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilState, useRecoilValue } from 'recoil';

export default function RecoilDiv3() {
  const [x, setX] = useRecoilState(AtomN);
  // const [y, setY] = useRecoilState(AtomN2);
  const y = useRecoilValue(AtomN2);

  const handleUp = () => {
    setX(x + 1);
  }

  const handleDown = () => {
    setX(x - 1);
  }

  // useEffect(() => {
  //   setY(x*2);
  // }, [x]);

  //component 생성 시 localStorage에 있는 x값을 가져옴
  useEffect(() => {
    if(!localStorage.getItem('x'))
      setX(0);
    else
    setX(parseInt(localStorage.getItem('x')));
  },[]);

  //x가 변경되면 localStorage에 x값을 저장
  useEffect(() => {
    localStorage.setItem('x', x);
  }, [x]);

  return (
    <div className="w-10/12 h-4/6
                    flex flex-col justify-center items-center
                    bg-slate-300">
      <div className='w-full h-10 p-5 m-2
                      flex justify-start items-center'>
        RDiv3 : x = {x}, y = {y}
      </div>
      <div className='w-full grid grid-cols-2 place-items-center'>
      <TailButton caption = '증가'
                        color = 'orange'
                        handleClick = {handleUp}
                        size = 'w-1/2' />
      <TailButton caption = '감소'
                        color = 'blue'
                        handleClick = {handleDown}
                        size = 'w-1/2' />
      </div>
    </div>
  )
}
