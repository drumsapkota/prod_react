import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
  constructor(){
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val:this.state.val + 1})
  }
  componentDidMount() {
    console.log("Component did mount");
  } 
  render(){
    console.log("render");
    return (<div> 
            <button onClick={this.update}>{this.state.val}</button>
            </div>)
  }
  componentWillMount() {
    console.log("Component will mount");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  componentDidUpdate() {
    console.log("Component was updated")
  }
}

class Wrapper extends React.Component{
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return(<div>
              <button onClick={this.mount.bind(this)}>Mount</button>
              <button onClick={this.unmount.bind(this)}>Un Mount</button>
              <div id="a"></div>
           </div>)
  }
}


export default Wrapper