import RecoilDiv1 from "./RecoilDiv1";
import { RecoilRoot } from "recoil";

export default function RecoilMain() {
  return (
    <RecoilRoot>
      <div className="w-full h-full flex flex-col justify-center items-center">
        RMain
        <RecoilDiv1></RecoilDiv1>
      </div>
    </RecoilRoot>
  )
}
