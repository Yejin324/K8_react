
import './App.css';
import { IoHomeSharp } from "react-icons/io5";
// import Hello from '/01/Hello';
// import MyDiv1 from './03/MyDiv11';
import MyList from './04/MyList';

function App() {
  return (
     <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className="w-full h-20
                        flex justify-between items-center 
                        bg-slate-200">
      <div>
      <p className="text-xl font-bold pl-3">REACT BASIC</p>  
      <p className="text-xs pl-3">K8기 DIGITAL TRAINING</p>
      </div> 
      <div className="text-4xl font-bold p-5">
        <IoHomeSharp />
      </div>               
      </header> 
      <main className="w-full grow
                      flex flex-col justify-center items-center
                      overflow-y-auto">
        <MyList />
      </main>
      <footer className="w-full h-20
                        flex justify-center items-center
                        bg-black text-white">
      K-digital 8기 천예진 화이팅                   
      </footer>
    </div>
  );
}

export default App;
