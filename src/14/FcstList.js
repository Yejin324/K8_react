import { useSearchParams } from "react-router-dom"
import { useRef } from "react"
import getcode from "./getcode.json"
export default function FcstList() {
  const [sParams] = useSearchParams();
  const txt = useRef();

  const gubun = sParams.get('gubun');
  const dt = sParams.get('dt');
  const x = sParams.get('x');
  const y = sParams.get('y');
  const area = sParams.get('area');

  console.log(gubun, dt, x, y, area);

  const selectClick = () => {
    console.log('select = ', txt.current.value);
  }

  let slc2 = getcode.filter(item => item["예보구분"] === gubun).map(item => item["항목명"]).map(item => (
    <option value={item["항목값"]} key={item["항목값"]}>
      {item}
    </option>));
  console.log(slc2);

  return (
    <div className="w-full flex justify-center m-5">
      <div className="w-4/5 flex justify-center">
      <h1 className="font-bold text-xl w-1/2">{gubun} : {area}({dt})</h1>
      <select className="form-select mx-2 mb-2 w-1/2"
              ref = {txt}
              onChange = {selectClick}>
          <option value="">-- 항목명을 선택하세요 --</option>
          {slc2}
        </select>
      </div>
    </div>
  )
}




// 초 단기예보
// https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=JwNm7FcddDQvKzUECbtVVZtx9dclRLOsGHR0kBN5OUlSDkZCcNTUVFdUOtZ4CBgewMJ%2BI7fRfqSvs47RTdVNCA%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=20241015&base_time=0630&nx=55&ny=127

// 단기예보
// https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=JwNm7FcddDQvKzUECbtVVZtx9dclRLOsGHR0kBN5OUlSDkZCcNTUVFdUOtZ4CBgewMJ%2BI7fRfqSvs47RTdVNCA%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=20241015&base_time=0500&nx=55&ny=127
