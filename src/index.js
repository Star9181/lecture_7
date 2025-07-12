import React from 'react';
import ReactDOM from 'react-dom/client';

// You can define a react component using 2 technique
//1. Fucntional component
function A(props){ //we will receive a formal argument
  let A_var = "1"
  let A_var2 = "2"
  return <h1>{props.main_root} A {A_var} <B my_class={A_var2}/> </h1>; //JSX
}

//2. Class component
//class Child extends Parents{}
class B extends React.Component {
  //1. Properties/Variable
  var3="3";

  constructor(){
    super();
    this.var4="4";
  }

  //render is menthod is compulsory
  render(){
    //To use any menber/veriable, have to use this.member
    return <span>{this.props.my_class} B {this.var3} {this.var4} <C>5</C></span>
  }

}

//ES6 Fat arrow function
let C=(props)=>{
  let var6="6"
  console.log("Hi", props.children);
  return <span>{props.children} C {var6} <D></D></span>
}

//Function component
function D(){
  let var7="7"
  return <span>D {var7}</span>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
let main="0"
root.render(<A main_root={main}/>);
