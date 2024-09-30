import React from 'react'

export default function BoxOfficeTr({handleClick, mv}) {
  return (
    <tr onClick={handleClick}
        className="bg-white border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
          {mv.rank}
      </td>
      <td className="px-6 py-2">
          {mv.movieNm}
      </td>
      <td className="pr-12 py-2 text-right">
          {parseInt(mv.salesAmt).toLocaleString()}
      </td>
      <td className="pr-12 py-2 text-right">
          {parseInt(mv.audiCnt).toLocaleString()}
      </td>
      <td className="px-6 py-2 text-center">
          {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
          {mv.rankInten < 0 ? <span className='text-red-600'>▼ </span>: 
          mv.rankInten == 0 ? "-" : <span className='text-blue-600'>▲</span>}
          {mv.rankInten != 0 && Math.abs(mv.rankInten)}
      </td>
    </tr>
  )
}
