import React from 'react';
import ReactDOM from 'react-dom/client';

// You can define a react component using 2 technique
//1. Fucntional component
function A(props){ //we will receive a formal argument
  let name = "Samyak"
  let s_class = "Nursery"
  return <h1>Hello, {name}  {props.surname}, <B my_class={s_class}/> </h1>; //JSX
}

//2. Class component
//class Child extends Parents{}
class B extends React.Component {
  //1. Properties/Variable

  constructor(){
    super();
    this.address = "Vejalpur";
    this.school_name="Zydus School of Excellence";
  }

  //render is menthod is compulsory
  render(){
    //To use any menber/veriable, have to use this.member
    return <React.Fragment>
              <span>How are you?</span><br/>
              <span>School Name: {this.school_name}</span><br/>
              <span>Class: {this.props.my_class}</span><br/>
              <span>Place: {this.address}</span><br/>
              <C>Friends:</C>
            </React.Fragment>
  }

}

//ES6 Fat arrow function
let C=(props)=>{
  let name="Riya"
  console.log("Hi", props.children);
  return <span>{props.children} {name}</span>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
let sn="Sinha"
root.render(<A surname={sn}/>);
