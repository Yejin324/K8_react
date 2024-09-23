import MyDiv22 from './MyDiv22';
export default function MyDiv11(){
  const d1 = 'div1';

  //div1에서 정의한 변수를 2,3으로 보내줌
  const d2 = 'div2';
  const d3 = 'div3';

  return(
    <div className="w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-slate-500 font-bold">
      <div className='w-full h-10 
                      flex justify-start items-center pl-5 mb-3'>
        {d1}
      </div>
      {/* 속성 이름 = {값} */}
      <MyDiv22 dn1={d1} dn2={d2} dn3={d3}/>
    </div>
  )
}