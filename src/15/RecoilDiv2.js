import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function RecoilDiv2() {
  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);

  return (
    <div className="w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-slate-400 ">
      <div className='w-full h-10 p-5 m-2
                      flex justify-start items-center m-2'>
        RDiv2 : x = {x}, y = {y}
      </div>
    </div>
  )
}
