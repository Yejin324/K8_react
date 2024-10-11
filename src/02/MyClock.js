import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";
function MyClock() {

  return(
    <div className="h-screen flex flex-col justify-center items-center">
    <MyClockImage />
    <MyClockTime />
    </div>
  );
}

export default MyClock ;