import {tranceformFrame} from '../utils/tranceformFrame'

export const CODE_BLOCK_BUBBLE_SORT=
`for( i : 0 -> n-2 )
  for( j : 0 -> n-i-2 )
    if( a[j] > a[j+1] )
      swap( a[j] , a[j+1] )
    else
      // do nothing
// sort complete`


export const bubbleSortGenerator = function* (A) {
  const array = A.map(item => ({ ...item })) //深拷贝

  let currentLine = 0

  yield {
    info: { currentLine: 0 },
    sequence: tranceformFrame(array)
  }

  for (let i = 0; i < array.length - 1; i++) {

    currentLine = 1
    yield {
      info: { i, currentLine },
      sequence: tranceformFrame(array)
    }
    for (let j = 0; j < array.length - i - 1; j++) {

      currentLine = 2
      yield {
        info: { i, j, currentLine },
        sequence: tranceformFrame(array)
      }

      array[j].status = array[j + 1].status = 'selected'

      currentLine = 3
      yield {
        info: { i, j, currentLine },
        sequence: tranceformFrame(array)
      }

      if (array[j].data > array[j + 1].data) {
        let t = array[j]
        array[j] = array[j + 1]
        array[j + 1] = t


        currentLine = 4
        yield {
          info: { i, j, currentLine },
          sequence: tranceformFrame(array)
        }
      }
      else { //do nothing
        currentLine = 6
        yield {
          info: { i, j, currentLine },
          sequence: tranceformFrame(array)
        }
      }

      array[j].status = array[j + 1].status = 'unsorted'
      yield {
        info: { i, j, currentLine },
        sequence: tranceformFrame(array)
      }
    }

    array[array.length - i - 1].status = 'sorted'

    yield {
      info: { i, currentLine },
      sequence: tranceformFrame(array)
    }
  }

  array[0].status = 'sorted'

  currentLine = 7
  yield {
    info: { currentLine },
    sequence: tranceformFrame(array)
  }
}