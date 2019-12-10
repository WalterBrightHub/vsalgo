import React from 'react'

import { view as Scene } from '../component/Scene'

import { view as ControlPanel } from '../component/ControlPanel'

import { view as CodeBlock } from '../component/CodeBlock'

import './vsalgoApp.css'

let VsalgoApp = () => (
  <div>
    <header>
    </header>

    <article className='main'>

      <div className='atc'>
        
      <h1>冒泡排序</h1>
        <Scene></Scene>
        <ControlPanel></ControlPanel>
        <div className='text'>
          <p>冒泡排序是一种基本的排序方式。其基本思想是，对于长度为n的数组，进行n-1轮排序，每轮从左到右比较相邻的两个数字，若不是升序则互换位置。算法复杂度为O(n*n)。</p>
        </div>
      </div>
      <div className='code-block'>
        <CodeBlock></CodeBlock>
      </div>
    </article>

  </div>
)

export default VsalgoApp