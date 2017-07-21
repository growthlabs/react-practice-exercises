import React, {Component} from 'react'
//Comment added
const Props =()=>(
    <div>
        
<h3>Exercise One: </h3> 
<h4> Pass name user name and image src to a badge component and then call that badge component inside your App </h4> 
 
 
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
}`
}
</pre> 

<h3> Exercise Two </h3>
<h4> Put all these components together and render the same as above </h4>
   
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

const App =()=> (
    <Badge 

    /> 


    
    `}

</pre>       


<h3> Exercise Three </h3>
<h4> PTake the state and pass it down as props to the header props </h4>
   


<pre>
{`
    class Avatar extends React.Component {
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
      <Badge /> 
    )
  }
}

    `}

</pre>       
   
   
   
    </div>    
)



export default Props; 