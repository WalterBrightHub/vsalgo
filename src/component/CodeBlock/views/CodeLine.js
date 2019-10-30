import React from 'react'

import './codeLine.css'

let CodeLine=({lineNumber,codeText,isHilighted})=>{
  return <div className='code-line'
    style={{backgroundColor:isHilighted?'black':'#aaaaaa',
      color:isHilighted?'white':'black'}}>
    {lineNumber}. {codeText}
  </div>
}

export default CodeLine