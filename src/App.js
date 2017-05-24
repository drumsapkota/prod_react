import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: ' DSF',
    }
  }
 
 update(e){
  this.setState({txt:'Delhi'});
 }
  render(){
    return (<div> 
              <h3>{this.state.txt}</h3>
              <input type="text" onChange={this.update.bind(this)}/> 
              <button onClick={this.update.bind(this)}>Change</button>    
              <Button>I <Heart/> React</Button>
            </div>)
  }
}



const Button = (props) => <button>{props.children}</button>


class Heart extends React.Component{
    render(){
      return <span>&hearts;</span>
    }
}
export default App