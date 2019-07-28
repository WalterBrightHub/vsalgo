//将下标为真实序号，order属性为初始序号的项转化为下标为初始序号，order属性为真实序号的项。
//将形如[{data:2,order:1},{data:2,order:0}]的数组转变成形如[{data:9,order:1},{data:2,order:0}]的数组
const tranceformFrame = array => array.reduce((pos, item, ind) => {
  pos[item.order] = { ...item, order: ind }
  return pos
}, Array(array.length))

export const bubbleSortGenerator = function* (A) {
  const array = A.map(item => ({ ...item })) //深拷贝

  yield tranceformFrame(array)

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {

      array[j].status = array[j + 1].status = 'selected'
      yield tranceformFrame(array)

      if (array[j].data > array[j + 1].data) {
        let t = array[j]
        array[j] = array[j + 1]
        array[j + 1] = t

        yield tranceformFrame(array)
      }

      array[j].status = array[j + 1].status = 'unsorted'
      yield tranceformFrame(array)
    }

    array[array.length - i - 1].status = 'sorted'
    yield tranceformFrame(array)
  }

  array[0].status = 'sorted'
  yield tranceformFrame(array)
}