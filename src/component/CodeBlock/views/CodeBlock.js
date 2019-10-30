import React from 'react'

import { connect } from 'react-redux'

import {selectCodeTexts,selectCurrentLine} from '../selector'

import CodeLine from './CodeLine'


let CodeBlock=({codeTexts,currentLine})=>{
  return <div>
    {codeTexts.split('\n').map((codeLine,index)=>(
      <CodeLine
        key={index}
        isHilighted={index+1===currentLine}
        codeText={codeLine}
        lineNumber={index+1}
      ></CodeLine>))}
  </div>
}

let mapState=(state)=>({
  codeTexts:selectCodeTexts(state),
  currentLine:selectCurrentLine(state)
})

export default connect(mapState,null)(CodeBlock)