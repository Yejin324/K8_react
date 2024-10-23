import RecoilDiv2 from "./RecoilDiv2";
import RecoilDiv3 from "./RecoilDiv3";
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function RecoilDiv1() {
  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);

  return(
    <div className="w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-slate-500 font-bold">
      <div className='w-full h-10 p-5 m-2
                      flex justify-start items-center'>
        RDiv : x = {x}, y = {y}
      </div>
      <div className='w-full grid grid-cols-2 gap-4 place-items-center'>
        <RecoilDiv2/>
        <RecoilDiv2/>
      </div>
      <div className='w-full h-1/2 flex justify-center items-center'>
      <RecoilDiv3/>
      </div>
    </div>
  )
}
