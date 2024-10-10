
export default function TailButton({caption, color, handleClick, size}) {
  const btColor = {
    'blue' : 'bg-blue-900' ,
    'orange' : 'bg-orange-600'
  };

  const btColorHover = {
    'blue' : 'hover:bg-blue-600' ,
    'orange' : 'hover:bg-orange-400'
  };


  return (
    <button className={`inline-flex justify-center items-center
                       p-3 mx-2
                       ${btColor[color]} text-white
                       ${btColorHover[color]} font-bold
                       rounded-md
                       ${size ? size : ''}
                       `}
            onClick={handleClick}>
      {caption}
    </button>
  )
}
