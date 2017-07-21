import React from 'react';

const FunClass =()=> (
    <div> 
<h2 style={{textAlign: 'left', paddingLeft:'0', marginLeft:'0'}}> Smart Components vs Dumb Components </h2>
<p> There are two ways to create a components. A smart or stateful component is declared using 
  the class extends syntax. This is essentially an object that you can put state and methods in. 
  This will be used to contain all the data and logic of your App's specific feature. A dumb or
  functional component is simply a function that recieves props as a parameter and displays
  it as HTML. 

     </p>

     <pre style={{backgroundColor:'#efefef', color:'black'}}> 
{`
//Smart Component, also known as container, or stateful components
class Profile extends React.Component {
  //Can use states
  constructor(props){
    super(props);
     this.state = {
       text: ''
     }
  }

  //Can create functions/methods
  Hello=()=>{
    console.log("Yololol")
  }

  render(){
    return(
      <div> Yolo </div> 
    )
  }
}

//Now let's create a functional component,
there are two ways

//Using the curved brackets we invoke return automatically
const Profile =(props)=> (
  <h1> yolo  </h1>   //Access the parent's data with props.
)

//Curly brackets
const Profile =(props)=>{
  return(
    <h1> yolo </h1>
  )
}

//You can pass props or no props
const Profile =()=> (
  <h1> yolo </h1> 
)


`}

</pre> 

   <br /> <br /> 

<h3> Exercise One </h3>
<h4> Turn all the presentational components into functional ones </h4>
   
<pre>
 {`
   var user = {     
    name='Tyler McGinnis'
    username='tylermcginnis'
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}
    `}
  </pre>  

<pre>
{`
    class Avatar extends React.Component {
  render() {
    return (
      <img src={''} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: </h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: </h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar />
        <Label />
        <ScreenName />
      </div>
    )
  }
}

class App extends Component{
    render(){
        return(
             <Badge  /> 
        )
    }

    }


    
    `}

</pre>   


    </div>
)

export default FunClass; 