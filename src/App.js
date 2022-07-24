import React from "react";
import Counter from "./Counter/Counter";
export default class App extends React.Component {
     state ={
      show: false,
     };
     render() {
      console.log(this.state);
      return(
        <div className= "App">
          <button
              onClick={() => this.setState({ show : !this.state.show })}
              >
                show
              </button>
              {this.state.show ? <Counter /> : null}
        </div>
      );
     };
    }     
