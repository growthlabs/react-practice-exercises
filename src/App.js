import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
        library : [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ]

     }
    console.log('!!!!!!!!!!!', this)

  }



  render() {
    return (

    
      <div className="App " style={{textAlign:"left"}}>
        <div className="row">
        
  


          <div className="col-md-8 col-md-offset-2">
          <br /> <br /> 
          <ul style={{ textAlign: "left"  }}className="nav nav-tabs">
               <li role="presentation"> <Link to='/map'   className="btn btn-lg"> Map</Link> </li>
                 <li role="presentation"> <Link to='/array'   className="btn btn-lg"> Array Manipulation</Link> </li>


  <li role="presentation"> <Link to='/props'   className="btn btn-lg"> Props</Link> </li>
   <li role="presentation"> <Link to='/funcclass'   className="btn btn-lg"> Class vs Functional</Link> </li>

  <li role="presentation"> <Link to='/events'   className="btn btn-lg"> Events</Link> </li>
  <li role="presentation"> <Link to='/state'   className="btn btn-lg"> States</Link> </li>

</ul>
           
          {this.props.children}

          
          </div>
         </div> 
      </div>
    );
  }
}



export default App;
