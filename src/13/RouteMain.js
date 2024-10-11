import RouteNav from './RouteNav';
import RouteHome from './RouteHome';
import RoutePage1 from './RoutePage1';
import RoutePage2 from './RoutePage2';

//브라우저 라우트 import 해오기
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RouteMain() {
  return (
    //BrowserRouter로 감싼 부분 안에서 라우팅이 됨
    <BrowserRouter>
    <div className="w-4/5 flex flex-col justify-center items-center">
      <RouteNav />
      <Routes>
        <Route path='/' element={<RouteHome />} />
        <Route path='/p1/:item/:item2' element={<RoutePage1 />} />
        <Route path='/p2' element={<RoutePage2 />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}
