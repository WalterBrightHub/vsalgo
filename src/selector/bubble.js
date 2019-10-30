//将下标为真实序号，order属性为初始序号的项转化为下标为初始序号，order属性为真实序号的项。
//将形如[{data:2,order:1},{data:9,order:0}]的数组转变成形如[{data:9,order:1},{data:2,order:0}]的数组
const tranceformFrame = array => array.reduce((pos, item, ind) => {
  pos[item.order] = { ...item, order: ind }
  return pos
}, Array(array.length))

export const bubbleSortGenerator = function* (A) {
  const array = A.map(item => ({ ...item })) //深拷贝

  let i = 0
  let j = 0
  let currentLine=0

  yield {
    info: { i, j, currentLine: 0 },
    sequence: tranceformFrame(array)
  }

  for (i = 0; i < array.length - 1; i++) {

    currentLine=1
    yield {
      info: { i, j, currentLine},
      sequence: tranceformFrame(array)
    }
    for (j = 0; j < array.length - i - 1; j++) {

      currentLine=2
      yield {
        info:{i,j,currentLine},
        sequence:tranceformFrame(array)
      } 

      array[j].status = array[j + 1].status = 'selected'

      currentLine=3
      yield {
        info: { i, j, currentLine},
        sequence: tranceformFrame(array)
      }

      if (array[j].data > array[j + 1].data) {
        let t = array[j]
        array[j] = array[j + 1]
        array[j + 1] = t

        
        currentLine=4
        yield {
          info: { i, j, currentLine},
          sequence: tranceformFrame(array)
        }
      }
      else{ //do nothing
        currentLine=6
        yield {
          info: { i, j, currentLine},
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
      info: { i, j, currentLine},
      sequence: tranceformFrame(array)
    }
  }

  array[0].status = 'sorted'

  currentLine=7
  yield {
    info: { i, j, currentLine },
    sequence: tranceformFrame(array)
  }
}