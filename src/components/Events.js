import React, {Component} from 'react';

const Events =()=> (
    <div> 

        <h2 style={{textAlign: 'left', paddingLeft:'0', marginLeft:'0'}}> Three steps to creating an event handler </h2>
<p> 

    Step 1: Choose the element you want to attach an event listener to and choose the event  e.g.onClick
    <br />
    Step 2: To handle the event assign it to a method that you will now create e.g. this.handleChange
    <br />
    Step 3: Create the method/function to handle that event and bind it. 

     </p>
     
     <pre style={{backgroundColor:'#efefef', color:'black'}}> 
{`

//Step 3, Create the method to handle the event
//The es6 function automatically handles the binding
handleChange=(event)=>{
    console.log(event.target.value)
}

render(){
    return(
        //Step 1, choose element and event
        <input onChange={this.handleChange} />  //Step 2, Assign a method
    )
}

`}

</pre> 

   <br /> <br /> 
    

    <h3> Exercise One</h3>
    <h4> Assign an onchange handler to a field and console log hello </h4>
    <pre>
    {
        `      
        class App extends Component {

        render(){
            return(
                 <button> Console log hello </button>

            )
         }
        }
        `
    }
    </pre>    

    <h3> Exercise Two</h3>
    <h4> Assign an onchange handler to an input field that updates the state
        of your existing project. 
         </h4>

   <pre>
    {
        `      
        class App extends Component {

        render(){
            return(
                 <Badge text={this.state.name}
                        url={this.state.url}
                        username={this.state.username}

            )
         }
        }
        `
    }
    </pre>

     </div>
)

export default Events; 