import React from 'react';

const State =()=> (
        <div> 

        <h2 style={{textAlign: 'left', paddingLeft:'0', marginLeft:'0'}}> States </h2>
<p> 

The state is where your dynamic data is stored. It is simply a plain object that when changed 
updates the UI and re-renders the component. 
     </p>
     
 

   <br /> <br /> 
    

    <h3> Exercise One</h3>
    <h4> Create an input field and an event handler that set's the state everytime the input is changed </h4>
    <pre>
    {
        `      
        class App extends Component {
        //Initial State is here

        //Methods go here
        render(){
            return(
                 <input />
            )
         }
        }
        `
    }
    </pre>    

    <h3> Exercise Two</h3>
    <h4> Now add an empty list to the previous exercise's state.
     Create a button so that every time it's clicked, the input field value 
     is pushed to the list in the state.  Lastly, display that list below the button.
         </h4>

   <pre>
    {
        `      
        class App extends Component {
            constructor(props){
                super(props);
                 this.state = {
                     text:'', //on input change update this state
                     list:[] //on button click push the input value into this list
                 }
            }

        render(){
            return(
                <div>
                    <input />
                    <button> Add </button> 
                    //display the list here by using .map
                </div>

            )
         }
        }
        `
    }
    </pre>

     </div>
)

export default State;