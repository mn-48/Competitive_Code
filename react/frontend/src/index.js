import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
      </div>
    );
   
}
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Car from './App.js';

// ReactDOM.render(<Car />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';

// class MyHeader extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!.</p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<MyHeader />, document.getElementById('root'));
// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // class MyHeader extends React.Component {
// //   render() {
// //     const mystyle = {
// //       color: "white",
// //       backgroundColor: "DodgerBlue",
// //       padding: "10px",
// //       fontFamily: "Arial"
// //     };
// //     return (
// //       <div>
// //       <h1 style={mystyle}>Hello Style!</h1>
// //       <p>Add a little style!</p>
// //       </div>
// //     );
// //   }
// // }

// // ReactDOM.render(<MyHeader />, document.getElementById('root'));




// // // import React from 'react';
// // // import ReactDOM from 'react-dom';

// // // class MyForm extends React.Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       mycar: 'Volvo'
// // //     };
// // //   }
// // //   render() {
// // //     return (
// // //       <form>
// // //       <select value={this.state.mycar}>
// // //         <option value="Ford">Ford</option>
// // //         <option value="Volvo">Volvo</option>
// // //         <option value="Fiat">Fiat</option>
// // //       </select>
// // //       </form>
// // //     );
// // //   }
// // // }

// // // ReactDOM.render(<MyForm />, document.getElementById('root'));





// // // // import React from 'react';
// // // // import ReactDOM from 'react-dom';



// // // // class MyForm extends React.Component {
// // // //   constructor(props) {
// // // //     super(props);
// // // //     this.state = {
// // // //       description: 'The content of a textarea goes in the value attribute'
// // // //     };
// // // //   }
// // // //   render() {
// // // //     return (
// // // //       <form>
// // // //       <textarea value={this.state.description} />
// // // //       </form>
// // // //     );
// // // //   }
// // // // }

// // // // ReactDOM.render(<MyForm />, document.getElementById('root'));




// // // // class MyForm extends React.Component{
// // // //   constructor(props){
// // // //  super(props);
// // // //   this.state = {
// // // //     username: '',
// // // //     age : null,
// // // //     };
// // // //   }


// // // // mySubmitHandler = (event) => {
// // // //     event.preventDefault();
// // // //     let age = this.state.age;
// // // //     if (!Number(age)) {
// // // //       alert("Your age must be a number");
// // // //     }
// // // //   }

// // // // myChangeHandeler = (event) => {
// // // //   let nam = event.target.name;
// // // //   let val = event.target.value;

// // // //  /*  if (nam === "age") {
// // // //     if (!Number(val)) {
// // // //       alert("Your age must be a number");
// // // //     }
// // // //   }  */

// // // //   this.setState({[nam]: val});
// // // //   }


// // // // render(){
// // // //   return (
// // // //     <form onSubmit={this.mySubmitHandler}>
// // // //       <h1>Hello {this.state.username} {this.state.age} </h1>
// // // //       <p>Enter your name: </p>

// // // //       <input type='text' name='username' onChange={this.myChangeHandeler}/>

// // // //       <p>Enter your name: </p>

// // // //       <input type='text' name='age' onChange={this.myChangeHandeler}/>
// // // //       <br/>
// // // //       <br/>
// // // //       <input type='submit'/>
// // // //     </form>
// // // //   );
// // // // }

// // // // }


// // // // ReactDOM.render(<MyForm />, document.getElementById('root'));



// // // /* 
// // // class Football extends React.Component {

// // //   constructor(props){

// // //     super(props);
// // //     this.state = {username:''};
// // //   }

// // //   mySubmitHandler = (event) => {
// // //     event.prevenDefault();
// // //     alert("You are submitting " + this.state.username);
// // //   }

// // //   myChange= (event) => {

// // //     this.setState({username: event.target.value})
// // //   }


// // //   render(){


// // //     return(
// // //       <form onSubmit = {this.mySubmitHandler}>
// // //         <h1>Hello {this.state.username}</h1>
          
// // //       <p>Enter your name and submit:
// // //         <input type="text"
// // //         onChange = {this.myChange}
// // //         />

// // //         <input type='submit'/>
// // //       </p>
// // //       </form>

// // //     );

// // //   }

 
  
  
// // // }

// // // ReactDOM.render(<Football />, document.getElementById('root'));

// // //  */

// // // /* 
// // // class Container extends React.Component{
// // //   constructor(props){
// // //     super(props);
// // //     this.state = {show: true};
// // //   }

// // //   delHeader = () => {
// // //     this.setState({show: false});
// // //   }

// // //   render(){
// // //     let myHeader;
// // //     if(this.state.show){
// // //       myHeader = <Child />;
// // //     }


// // //   return(
// // //     <div>
// // //       {myHeader};
// // //       <button type="button" onClick={this.delHeader}>Delete Header</button>
// // //     </div>
// // //   );

// // //   }
// // // }

// // // class Child extends React.Component{
// // //   componentDidMount(){
// // //     alert("The component named Header is about to be unmounted.")
// // //   }

// // //   render(){
// // //     return (<h1>Hello world</h1>);
// // //   }
// // // }

// // // ReactDOM.render(<Container/>, document.getElementById("root"));
















// // //  */



// // // /* import React from 'react';
// // // import ReactDOM from 'react-dom';


// // // class Header extends React.Component{
// // //   constructor(props){
// // //     super(props);
// // //     this.state = {favoritecolor: 'red'};
// // //   }

// // //   shouldComponentUpdate(){
// // //     return true;
// // //     //return false; //kaj kore na

// // //   }

// // //   changeColor=()=> {
// // //     this.setState({favoritecolor: "blue"});
// // //   }

// // // render(){
// // //   return(
// // //       <div>
// // //         <h1> My favorite color is {this.state.favoritecolor} </h1>
// // //       <button type='button' onClick = {this.changeColor} >Change color</button>
      
// // //       </div>
// // //   );
// // // }

// // // }

// // // ReactDOM.render(<Header/>, document.getElementById('root'));
// // //  */

// // // /* 
// // // import React from 'react';
// // // import ReactDOM from 'react-dom';

// // // class Header extends React.Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {favoritecolor: "red"};
// // //   }
// // //   changeColor = () => {
// // //     this.setState({favoritecolor: "blue"});
// // //   }
// // //   render() {
// // //     return (
// // //       <div>
// // //       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
// // //       <button type="button" onClick={this.changeColor}>Change color</button>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // ReactDOM.render(<Header />, document.getElementById('root'));
// // //  */