import React from 'react'


let StatusBar=({n,i,j})=>{
  return <div
    style={{backgroundColor:'#ddd',
      fontFamily:'Consolas',
      padding:'10px'
    }}
  > n={n}{i===undefined?``:`, i=${i}`}{j===undefined?``:`, j=${j}`}</div>
}

export default StatusBar