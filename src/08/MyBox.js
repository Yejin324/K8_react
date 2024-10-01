import MyBoxFlag from "./MyBoxFlag"

export default function MyBox() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/5 grid grid-cols-2 gap-4">
        <MyBoxFlag color='blue'/>
        <MyBoxFlag color='orange'/>
        <MyBoxFlag color='pink'/>
        <MyBoxFlag color='lime'/>

      </div>
    </div>
  )
}
