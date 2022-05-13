import { useState } from 'react'
import { Card, CardHeader, CardContent, CardFooter } from './Card'

class Welcome extends React.Component {
    render() {
    return <> {this.props.name}</>;
    }
}
constructor(props) {
    super(props);
    this.state = { counter: 0 };
}

componentDidMount(){
    document.titile = `you clicked ${this.state.count} times`;
}

componentDidUpdate() {
    document.titile = `you clicked ${this.state.count} times`;
}

render() {
    return(
        <div>
            <p>you clicked {this.state.count} times</p>
            <button onClick={() => this.setState({count : this.state.count + 1})}>click me</button>
        </div>
    )
}

export default Cardcomps