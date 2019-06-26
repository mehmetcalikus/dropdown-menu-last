import React, { Component } from 'react';
//import './App.css';
import SelectBox from './components/Select-box'

//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectBox
        
          items={[
            { value: 'İstanbul', id: 1 },
            { value: 'Ankara', id: 2 },
            { value: 'İzmir', id: 3 },
          ]}
        /> 



            
            
        
      </div>
    )
  }
}

export default App;
