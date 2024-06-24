import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string,
  count: number
}

class Demo2 extends PureComponent<IProps, IState> {

  state = {
    message: 'hello react',
    count: 100
  }

  // constructor(props: IProps) {
  //   super(props)
  //   this.state = {
  //     message: 'hello react',
  //     count: 100
  //   }
  // }

  render(): React.ReactNode {
    return (
      <div>
        <div>{this.props.age}</div>
        <div>{this.props.name}</div>
        <div>{this.state.message}</div>
      </div>
    )
  }
}
