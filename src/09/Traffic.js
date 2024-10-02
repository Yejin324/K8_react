import React, { useEffect, useState } from'react';
import TrafficNav from './TrafficNav';

export default function Traffic() {
  const [tdata, setTdata] = useState([]); //[변수명, set함수명]
  const [tm, setTm] = useState([]);
  const getFetchData = () => {
      const apiKey = process.env.REACT_APP_API_KEY ;
      
      let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?'
      url = `${url}page=1&perPage=18&serviceKey=${apiKey}`

      fetch(url)
      .then(resp => resp.json()) //json 타입의 데이터로 받아오기
      // .then(data => console.log('data = ', data.data)) //data 출력
      .then(data => setTdata(data.data)) //data 출력
      .catch(err => console.err(err));

      console.log('apiKey = ', apiKey);
      console.log('url = ', url);
  }


  //[]로 비워뒀기 때문에, 맨 처음 한 번만 실행됨.
  useEffect(()=>{
    getFetchData();
  }, []);

  useEffect(() => { 
    let tmData = tdata.map(item => item['사고유형대분류']);
    console.log('tmData = ', tmData);
    //map으로 읽어온 tm 배열을 new Set()에 넣어 중복된 값을 제거한 후, [...] 전개연산자 이용하여 다시 배열로 변환
    setTm([...new Set(tmData)]);
    console.log('중복 제거 = ', tmData);
  },[tdata]);

  return (
    <div className='w-full flex flex-col'>
      <TrafficNav title = '대분류' c={tm}/>
      <TrafficNav title = '중분류' c={['3', '4']}/>
    </div>
  )
}
