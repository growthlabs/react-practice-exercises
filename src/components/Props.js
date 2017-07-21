import React, {Component} from 'react'

const Props =()=>(
    <div>
    <h2 style={{textAlign: 'left', paddingLeft:'0', marginLeft:'0'}}> Props  </h2>
<p> Props are how all the different components that you build communicate with one another. Typically, 
  you will have all your data at your most top level component and you will pass props down component by
  component until you're ready to display those props. Data is "uni directional" meaning that you will pass 
  data down to their respective child components. In the real world, most likely the data will come from your
  state.  
  
     </p>


<pre style={{backgroundColor:'#efefef', color:'black'}}> 
{`
<Profile user={this.state.user}/>  //Pass the data from state

 <ProfileImg />  //Recieve the data and display
 <ProfileTitle /> //Recieve the data and display
 <ProfileUsrName /> //Recieve the data and display
 <FriendsList /> // Made of multiple components too
    --> <FriendItem /> //The top data gets passed all the way down here
`}

</pre> 

     <br /> <br /> 



<h3>Exercise One: </h3> 
<h4>
   All the data will flow from the user object.
  Pass the name user name and image src to a badge component and then call that badge component inside your App </h4> 
 
 
<pre>
 {`
   var user = {     
    name:'Tyler McGinnis',
    username:'tylermcginnis',
    img:'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}
    `}
  </pre>  

 
  <pre>
    {`class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={''} />
        <h1>Name: </h1>
        <h3>username: </h3>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return(
      //Pass the user object into badge
      <Badge /> 
    )
  }
}

`
}
</pre> 

<h3> Exercise Two </h3>
<h4> Put all these components together and render the same as above.  </h4>
   
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

class App extends React.Component {
  render(){
    return(
        //Pass the user props down into Badge first again
        <Badge /> 
    )
  }

}
  


    
    `}

</pre>       


<h3> Exercise Three </h3>
<h4> Rather than keeping the data in the user object, delete it and put the data into state </h4>
   


<pre>
{`
    class App extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                name: ''
                img: ''
                username:''
            }
        }
  render() {
    return (
      //Now, pass the state data to the badge component
      <Badge /> 
    )
  }
}

    `}

</pre>       
   
   
   
    </div>    
)



export default Props; 