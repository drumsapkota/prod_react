import React from 'react';

class App extends React.Component{
  render(){
    let txt = this.props.txt
    return (<div>      
              <h1>Hello JSX</h1>
              <h2>{txt}</h2>
            </div>)
  }
}


App.propTypes = {
  txt:React.PropTypes.string,
  cat:React.PropTypes.number.isRequired
}


App.defaultProps = {
  txt:"this is the default prop"
}
//const App = () => <h1> Hello stateless </h1>

export default App