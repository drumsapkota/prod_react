import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }
  update(e){
    this.setState({txt:e.target.value})
  }

  render(){
    let txt = this.props.txt
    return (<div>      
              <h1>Hello JSX</h1>
              <input type="text" onChange={this.update.bind(this)}/>
              <h2>{this.state.txt}</h2>
            </div>)
  }
}



//const App = () => <h1> Hello stateless </h1>

export default App