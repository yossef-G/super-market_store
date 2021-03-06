// import { useState } from 'react'
// import { Card, CardHeader, CardContent, CardFooter } from './Card'

// const items = [{
//   id: 'fdsfsd', img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&#39',
//   price: '5$ for kg',
//   name: 'Pineapple',
//   vitamin: ["c", "b"]
// }, {
//   id: 'asd332', img: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80&#39',
//   price:  '3$ for kg',
//   name: 'Banana',
//   vitamin: ["a", "b"]
// }, {
//   id: 'sadahg5', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80&#39',
//   price:  '2$ for kg',
//   name: 'Orange',
//   vitamin: ["c", "b"]
// }, {
//   id: 'ds21sad', img: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-1.2.1&ixid=https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&#39&auto=format&fit=crop&w=870&q=80&#39',
//   price:  '7$ for kg',
//   name: 'Kiwi',
//   vitamin: ["b"]
// }, {
//   id: 'sdfsdf8767',
//   img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80&#39",
//   price: '5$ for kg',
//   name: 'Melon',
//   vitamin: ["c"]
// },]

// // console.log(fruitsFiltered(2));
// // const itemsCard = items.map(item => <Card key={item.id} img={item.img} name={item.name} price={item.price} />)

// function App() {
//   const [fruits, setFruits] = useState(items)

//   const fruitsFiltered = (index) => {
//     let res = fruits.filter((v, i) => i !== index)
//     setFruits(res)
//   }

//   const filterByV = (vit, checked) => {
//     let res = checked ? items.filter((v) => v.vitamin.includes(vit)) : items
//     setFruits(res)
//   }

//   const range = () => {
//     let range = document.getElementById("price");
//     let lbl = document.getElementById("lbl-price");
//     lbl.innerText = `<<<<<${range.value}>>>>`
//   }
//   return (
//     <div>
//         <h1>Y-G market</h1>
//       <div id="filter">
//         <input id="price" type="range" min="0"  max="200" step="1" onInput={range} />
//         <label id="lbl-price" htmlFor="price" >price</label>
//         <div className="form" onChange={(e) => console.log(e)}>
//           <label for="v-c" > Vitamin C </label>
//           <input id="v-c" type="checkbox" name="vitamin-c" value="c" onChange={(e) => { filterByV(e.target.value, e.target.checked); }} />
//         </div>
//         <div>
//           <label for="v-B" > Vitamin B </label>
//           <input id="v-B" type="checkbox" name="vitamin-b" value="b" onChange={(e) => { filterByV(e.target.value, e.target.checked); }}/>
//         </div>
//       </div>

//       <div className="items">
//         {fruits.map((item, index) => {
//           return (
//             <Card key={item.id}>
//               <CardHeader>
//                 {
//                   (item.img) ?
//                   <a href='https://www.google.com'><img src={item.img} alt="Avatar" /></a> : ''
//                 }
//               </CardHeader>
//               {(true) ?
//                 <CardContent>
//                   <h4><b ><a href='https://www.google.com'>{item.name}</a></b></h4>
//                   <h4><b ><a href='https://www.google.com'>{item.price}</a></b></h4>
//                 </CardContent> : <></>
//               }
//               <CardFooter>
//                 {/* {(index % 2 == 0) ? */}
//                 {/* <p>{item.price}</p> : */}
//                 <button onClick={() => fruitsFiltered(index)}>Remove me</button>
//                 {/* } */}
//               </CardFooter>
//             </Card>

//             // <Card key={item.id} img={item.img} name={item.name} price={item.price} />
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default App




// ####################################################################

import React from 'react';

class DemoForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] !== input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h1>React Forum</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="name">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter name" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
   
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
              
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}
  
export default DemoForm;