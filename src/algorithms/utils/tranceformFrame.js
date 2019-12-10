//将下标为真实序号，order属性为初始序号的项转化为下标为初始序号，order属性为真实序号的项。
//将形如[{data:2,order:1},{data:9,order:0}]的数组转变成形如[{data:9,order:1},{data:2,order:0}]的数组
export const tranceformFrame = array => array.reduce((pos, item, ind) => {
  pos[item.order] = { ...item, order: ind }
  return pos
}, Array(array.length))
