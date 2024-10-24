import TailButton from "../UI/TailButton" ;
import { useState, useEffect, useRef } from "react";
export default function Rest() {

  const txt1Ref = useRef();
  const txt2Ref = useRef();
  const [tdata , setTdata] = useState([]) ;
  const [tr, setTr] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false); //입력 or 수정을 확인하는 변수 
  const [ updateID , setUpdateID ] = useState([]); //수정할 데이터의 아이디

  let url = 'http://localhost:3005/posts';

  const getFetchData = async() => {
    
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data);

    console.log(url);
    console.log('getFetch', data);
  };

  const handlePost = async() => {
    //아무 값도 입력하지 않은 채 입력 버튼을 누른 경우
    if (txt1Ref.current.value === ''){
      alert('제목을 입력하세요.');
      txt1Ref.current.focus();
      return;
    }

    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value
    }

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    });

    //입력된 데이터 반환
    const data = await resp.json();
    console.log(data);

    setTdata([data, ...tdata]);

    //입력 버튼 클릭 시 입력 칸 초기화
    txt1Ref.current.value = '';
    txt2Ref.current.value = '';
    txt1Ref.current.focus();
  };

  //삭제
  const handleDelete = async(id) => {
    console.log(id);

    const resp = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });

    //삭제된 데이터 반환
    const data = await resp.json();
    console.log(data);

    //해당 아이디 값이 아닌 값만 읽어서 setTdata에 넣어줌
    //해당 코드가 없으면 화면에서 삭제되는 것을 실시간으로 확인 불가능함. 새로고침으로만 확인할 수 있음. 
    const tm = tdata.filter(item => item.id !== id);
    setTdata(tm);
  };

  //수정하고자 하는 값을 입력창으로 호출
  const handleUpdate = (item) => {
    console.log(item);

    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;

    setIsUpdate(true);
    setUpdateID(item.id);
  };

  //수정
  const handlePut = async() => {
    console.log('HandlePut');
    setIsUpdate(true);

    if (txt1Ref.current.value === ''){
      alert('제목을 입력하세요.');
      txt1Ref.current.focus();
      return;
    }

    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value
    }

    const resp = await fetch(`${url}/${updateID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    });

    //수정된 데이터 반환
    const data = await resp.json();
    console.log(data);

    //tdata를 다시 한 번 읽어오면서 해당 아이디 값과 같은 item만 변경해줌.
    const tm = tdata.map(item => item.id === updateID ? data : item);
    setTdata(tm);

    //수정 버튼 클릭 시 입력 칸 초기화
    txt1Ref.current.value = '';
    txt2Ref.current.value = '';
    txt1Ref.current.focus();

    //버튼을 다시 '입력'으로 바꿔줌
    setIsUpdate(false);
    setUpdateID('');
  }

  //입력과 수정을 구분하는 사용자 정의 함수
  const handleOK = () => {
    if (!isUpdate) handlePost();
    else handlePut();
  };

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    let tm = tdata.map(item => 
      <tr className="text-center" key={item.id}>
            <th scope="col" className="px-6 py-3 w-3/6 text-center">{item.title}</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">{item.author}</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center"><TailButton caption = '삭제'
                                                                                color = 'blue'
                                                                                handleClick = {()=> handleDelete(item.id)}
                                                                                size = 'w-full' /></th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center"><TailButton caption = '수정'
                                                                                color = 'lime'
                                                                                handleClick = {()=> handleUpdate(item)}
                                                                                size = 'w-full' /></th>
      </tr>
    );
    console.log(tm);
    setTr(tm);
  },[tdata]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text" 
            className="form-input  w-full"
            ref={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
            ref={txt2Ref} />
        </div>
        <TailButton caption = {isUpdate ? '수정' : '입력'}
                    color = 'blue'
                    handleClick = {handleOK}
                    size = 'w-1/2' />
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
          {tr}
        </tbody>
      </table>
    </div>
  )
}