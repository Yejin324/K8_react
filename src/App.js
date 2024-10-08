// import MyClockTime from './02/MyClockTime';
import './App.css';
import { FaHome } from "react-icons/fa";

// import Hello from './01/Hello' ;
// import MyClock from './02/MyClock' ;
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import FoodMain from './06/FoodMain';
// import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
// import Traffic from './09/Traffic' ;
// import MyRef from './10/MyRef';
// import Gallery from './11/Gallery';
import Festival from './12/Festival';
function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-200'>
        <div>
          <p className="text-xl font-bold pl-3">REACT BASIC</p>  
          <p className="text-xs pl-3">K8기 DIGITAL TRAINING</p>
        </div>
        <p className='text-4xl font-bold p-5'>
          <FaHome />
        </p>
      </header>
      <main className='w-full flex-grow
                       flex flex-col items-center
                       overflow-y-auto'>

        {/* <MyDiv1 /> */}
        {/* <MyClock /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        {/* <BoxOffice /> */}
        {/* <MyBox /> */}
        {/* <Traffic /> */}
        {/* <MyRef /> */}
        {/* <Gallery /> */}
        <Festival />
      </main>
      <footer className='w-full h-20 flex-shrink-0
                         flex justify-center items-center
                         bg-black text-white'>
        <p>K-digital 8기 천예진 화이팅</p>                  
      </footer>
    </div>
  );
}

export default App;
