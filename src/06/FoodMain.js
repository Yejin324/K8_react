import fooddata from './fooddata.json' ;
import FoodCard from './FoodCard';
import { useState } from'react';
import TailButton from '../UI/TailButton';

export default function FoodMain() {
  const [tags, setTags] = useState();

  // console.log(tm)

  //운영주체 분류 중 중복데이터 제거하여 버튼 생성
  let tm = fooddata.map(item => item["운영주체 분류"].replace(' ', ''));

  // tm 배열 중 중복되는 Data 제거
  //[... ] 전개연산자 : 배열로 작성
  tm = [...new Set(tm)];

  const bts = tm.map(item => <TailButton 
                        key = {item}
                        caption = {item}
                        color = 'blue'
                        handleClick = {()=>handleFood(item)}/>);
  console.log(tm)

  const handleFood = (item) => {
    let tm = fooddata.filter(i => i["운영주체 분류"].replace(' ', '') === item).map(i => <FoodCard obj={i} key={i.사업장명}/>);
    setTags(tm);
  }

  return (
    <div className='w-full h-screen flex flex-col justify-start'>
      <div className='w-full h-20 bg-blue-100
                      flex justify-center items-center'>
        {bts}
      </div>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4 p-4'>
        {tags}
      </div>
    </div>
  )
}
