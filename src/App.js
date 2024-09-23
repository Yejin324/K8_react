import './App.css';
// import Hello from '/01/Hello';
import { IoHomeSharp } from "react-icons/io5";

function App() {
  return (
     <div className="w-full h-screen
                    flex flex-col justify-center items-center">
      <header className="w-full h-20
                        flex justify-between items-center 
                        bg-slate-200">
      <div>
      <p>리액트 기초</p>  
      <p>K8기 디지털 트레이닝</p>
      </div> 
      <div className="w-10">
        <IoHomeSharp className="w-10"/>
      </div>               
      </header> 
      <main className="w-full grow
                      flex flex-col justify-center items-center
                      overflow-y-scroll">

      </main>
      <footer className="w-full h-20
                        flex justify-center items-center
                        bg-black text-white">
      안녕                   
      </footer>
    </div>
  );
}

export default App;
