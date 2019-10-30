import React from 'react'

import {view as Scene} from './component/Scene'

import {view as ControlPanel} from './component/ControlPanel'

import {view as CodeBlock} from './component/CodeBlock'

let VsalgoApp = () => (
  <div>
    <Scene></Scene>
    <ControlPanel></ControlPanel>
    <CodeBlock></CodeBlock>
  </div>
)

export default VsalgoApp