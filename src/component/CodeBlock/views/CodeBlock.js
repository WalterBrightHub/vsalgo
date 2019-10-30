import React from 'react'

import { connect } from 'react-redux'

import { selectCodeTexts, selectCurrentInfo ,selectN} from '../selector'

import CodeLine from './CodeLine'
import StatusBar from './StatusBar'


let CodeBlock = ({ codeTexts ,n,info}) => {
  const {i,j,currentLine}=info
  return <div>
    <div>
      {codeTexts.split('\n').map((codeLine, index) => (
        <CodeLine
          key={index}
          isHilighted={index + 1 === currentLine}
          codeText={codeLine}
          lineNumber={index + 1}
        ></CodeLine >))}
    </div>
    <StatusBar n={n} i={i} j={j}></StatusBar>
  </div>
}

let mapState = (state) => ({
  codeTexts: selectCodeTexts(state),
  info: selectCurrentInfo(state),
  n:selectN(state)
})

export default connect(mapState, null)(CodeBlock)