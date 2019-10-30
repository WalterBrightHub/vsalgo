import React from 'react'

class ArrayInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = { array: '' }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onChange(e) {
    this.setState({
      array: e.target.value
    })
  }

  onClick() {
    let array = this.state.array.split(/[^0-9]+/).map(str => parseInt(str)).filter(x => x >= 0)
    if (array.length > 18) {
      alert('数据太多啦，最多输入18个数字。')
    }
    else if (array.length > 0) {
      this.props.onSetArray(array)
    }
    else {
      alert('数据不合法哟')
    }

  }

  render() {
    return <div>
      <input placeholder='输入整数，用空格或者逗号隔开' onChange={this.onChange}></input>
      <button onClick={this.onClick}>确定</button>
    </div>
  }
}

export default ArrayInput