import MyDiv33 from "./MyDiv33"
// export default function MyDiv22(probs){

//구조 분해 사용 //Object를 변수로 쪼개서 받는 것이 구조 분해
  export default function MyDiv22({dn1, dn2, dn3}){

  return(
    <div className="w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-slate-400 ">
      <div className='w-full h-10 
                      flex justify-start items-center pl-5 mb-3'>
        {/* MyDiv2 */}
        {/* {`${probs.dn1} > ${probs.dn2}`} */}
        {`${dn1} > ${dn2}`}
      </div>
      {/* <MyDiv33 dnn1={probs.dn1} dnn2={probs.dn2} dnn3={probs.dn3}/> */}
      <MyDiv33 dnn1={dn1} dnn2={dn2} dnn3={dn3}/>
    </div>
  )
} 