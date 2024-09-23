//구조 분해 사용 //Object를 변수로 쪼개서 받는 것이 구조 분해
export default function MyDiv33({dnn1, dnn2, dnn3}){

  return(
    <div className="w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-slate-300">
      <div className='w-full h-10 
                      flex justify-start items-center pl-5 mb-3'>
        {/* MyDiv3 */}
        {/* {`${probs.dnn1} > ${probs.dnn2} > ${probs.dnn3}`} */}
        {`${dnn1} > ${dnn2} > ${dnn3}`}
      </div>
    </div>
  )
}