import React from 'react';

const ArrayManipulation=()=>(
    <div> 
    <h2 style={{textAlign: 'left', paddingLeft:'0', marginLeft:'0'}}> Manipulating lists </h2>
<p> Setting state for strings is straight forward in React e.g. {`this.setState({text: something})`} but when it comes to lists
    it requires an extra step. You should never manipulate the state directly, you always need to make a copy of it before modifying.
this.setState does this automatically for simple values but with arrays you will need to manually copy them. 
   </p>

<pre style={{backgroundColor:'#efefef', color:'black'}}> 
{`
//To push something in state use concat instead of push because concat will make a shallow copy of the state
handleSubmit=(value)=>{
    var list = this.state.list.concat(value);
    //After making a copy of your array and modifying it in some way set the state with your new list
    this.setState({list: list})
}
// To remove an element from an array in your state there are a few ways of doing so but this is a common method:
  handleDelete = (index) => {
    var list = this.state.list.slice(); //copy array this time using slice
    list.splice(index, 1); //remove element, the first parameter is the position of the array, the second is the number of elements to remove
    this.setState({list, list); //update state
  },

`}
</pre>    

   <br /> <br /> 

    <h3> Exercise One</h3>
    <h4> Push a new number to the existing array using concat </h4>
    <pre>
        {`
        // list.concat()
         var list = [3,5,3,4]
        `}
     </pre>

    <h3> Exercise Two</h3>
    <h4> Push a new object to the existing array using concat </h4>
    <pre>
        {`
        // list.concat()
         var state = [{name:"Paolo", occupation: "vagrant"}]
        `}
     </pre>



    </div>
)

export default ArrayManipulation;