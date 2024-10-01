import { useEffect, useState } from "react" ; 
import BoxOfficeTr from "./BoxOfficeTr.js";
export default function BoxOffice() {

  //tdata가 채워지면 usedEffect를 불러올 수 있도록 함.
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);
  const [info, setInfo] = useState([]);

  const getFetchData = () => {
  const apiKey = process.env.REACT_APP_MV_KEY ;
  const dt = '20240928';

  let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
  url = `${url}key=${apiKey}&targetDt=${dt}`

  fetch(url)
   .then(resp => resp.json())
   .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
   .catch(err => console.log(err));

  console.log('apiKey = ', apiKey);
  console.log('url = ', url);
}
 
const handleTrClick = (item) => {
  console.log('handleTrClick : ', item);
  //item.movieNm : item.movieCd
  //handleClick(item.movieCd) ; //api호출
  let tm = `[${item.movieCd}] '${item.movieNm}' : 
            누적관객수 ${parseInt(item.audiCnt).toLocaleString()} 입니다.
            
            `;
  setInfo(tm);
}

   //맨처음 한번 실행
   useEffect(()=>{
    getFetchData();
  }, []);

  //fetch 데이터가 채워지면
  useEffect(()=>{
    // if(!data) return;
    console.log('tdata= ', tdata);
    let tm = tdata.map(item => <BoxOfficeTr
                                handleClick = {()=>handleTrClick(item)}
                                mv = {item}
                                key = {item.movieCd}/>)
    setTrs(tm);
  }, [tdata]);

  return (
    <div className="w-4/5 h-screen flex flex-col justify-center items-center">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-md font-bold text-gray-700 bg-gray-200 border-b-2 border-gray-500">
            <tr className="text-center">
                <th scope="col" className="px-6 py-3">
                    순위
                </th>
                <th scope="col" className="px-6 py-3">
                    영화명
                </th>
                <th scope="col" className="px-6 py-3">
                    매출액
                </th>
                <th scope="col" className="px-6 py-3">
                    관객수
                </th>
                <th scope="col" className="px-6 py-3">
                    증감율
                </th>
            </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
        <tfoot>
          <tr className="h-20 p-2 text-center
                        text-gray-700 bg-gray-200">
            <td colSpan={5}>{info}</td>
          </tr>
        </tfoot>
    </table>
    </div>
  )
}