import { useEffect, useState,useRef } from "react";
import TailCard2 from "../UI/TailCard2";

export default function Festival() {
  const [tdata , setTdata] = useState([]) ;
  const [tsel, setTsel] = useState([]);
  const [tags, setTags] = useState([]);
  const x = useRef() ;

  const getFetchData = async() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    
    let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
    url = `${url}serviceKey=${apiKey}&pageNo=1&numOfRows=40&resultType=json`;

    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.getFestivalKr.item);

    console.log(url);
    console.log('getFetch', data.getFestivalKr.item);
  }

  const selectClick = () => {
    console.log('select = ', x.current.value);
    let tm = tdata.filter(i => i['GUGUN_NM'] === x.current.value).map(i => <TailCard2 key = {i.UC_SEQ}
                                                                                     imgUrl = {i.MAIN_IMG_NORMAL} //사진
                                                                                     title = {i.TITLE} //제목
                                                                                     content = {i.TRFC_INFO} //교통편 정보
                                                                                     kw = {i.USAGE_DAY_WEEK_AND_TIME} //축제일정 
                                                                                     onClick={() => window.open(i.HOMEPAGE_URL, '_blank')} 
                                                                                     /> )
    setTags(tm);
  }

  useEffect(() => {
    getFetchData();
    console.log('tdata',tdata);
  }, [])

  useEffect(() => {
    let tm = tdata.map(item => item['GUGUN_NM'] );
    tm = [...new Set(tm)].sort();
    console.log('tm=', tm);

    tm = tm.map(item => (
      <option value={item} key={item}>
        {item}
      </option>))
    setTsel(tm);
  },[tdata])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="font-bold text-3xl m-2 mt-5">
        부산축제정보
      </div>
      <div className="w-10/12 flex justify-center items-center">
        <select className="m-4 form-select rounded-full px-4 py-3 w-5/12"
                ref = {x}
                onChange = {selectClick}>
          <option value="">  --- 구를 선택하세요 ---</option>
          {tsel}
        </select>
      </div>
      <div className="m-5 grid grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {tags}
      </div>
    </div>
  )
}
