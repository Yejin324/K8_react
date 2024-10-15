import { useNavigate } from "react-router-dom";
import TailButton from "../UI/TailButton"
import getxy from "./getxy.json"
import { useState, useEffect, useRef } from "react";

export default function Fcst() {
  const serviceKey = process.env.REACT_APP_API_KEY;
  
  const txtArea = useRef() ;
  const txtDt = useRef() ;

  let slc = getxy.map(item => item["1단계"]).sort().map(item => (
    <option value={item} key={item}>
      {item}
    </option>));

  useEffect(() => {
    txtDt.current.min = getToday();
  },[])

  const selectClick = () => {
    console.log('select = ', txtArea.current.value);
  }
  
  const getToday= () => {
    const today = new Date(); 
 
    const hours = today.getHours();
    const minutes = today.getMinutes();
  
    console.log('today = ', today);
    today.setDate(today.getDate());
    const year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    if (hours < 6 || (hours === 6 && minutes < 30)) {
      day = today.getDate() + 1;
    }
  
    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    const minDate = `${year}-${month}-${day}`;
    return minDate;
  }

  const handleOK = (gubun) => {
    if(txtDt.current.value === ''){
      alert('날짜를 선택하세요.')
      txtDt.current.focus();
      return;
    }
    if(txtArea.current.value === ''){
      alert('지역을 선택하세요.')
      txtArea.current.focus();
      return;
    }
    
    const dt = txtDt.current.value.replaceAll('-', '');
    const location = getxy.filter(item => item["1단계"] == txtArea.current.value)[0];
    const x = location["격자 X"];
    const y = location["격자 Y"];
    navigate(`/FcstList?gubun=${gubun}&dt=${dt}&x=${x}&y=${y}&area=${txtArea.current.value}`);
  }

  const navigate = useNavigate();
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <h2 className="font-bold text-3xl my-5">단기예보 입력정보</h2>
      </div>
      <div className="w-4/5 grid grid-cols-1 gap-3
                      md:grid-cols-2 gap-3">
        <input className="form-input border-black-200 border-1 
                          mx-2 w-full mb-2"
               ref = {txtDt} 
               type="date" id="date" name="date"></input>
        <select className="form-select mx-2 mb-2 w-full"
                ref = {txtArea}
                onChange = {selectClick}>
          <option value="">-- 지역을 선택하세요 --</option>
          {slc}
        </select>
        <TailButton caption = '단기예보'
                        color = 'blue'
                        handleClick = {() => handleOK('단기예보')}
                        size = 'w-full' />
        <TailButton caption = '초단기예보'
                        color = 'blue'
                        handleClick = {() => handleOK('초단기예보')}
                        size = 'w-full' />
      </div>
    </div>
  )
}
