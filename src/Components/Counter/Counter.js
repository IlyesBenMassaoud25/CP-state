import { Component } from "react";
i

export default class App extends React.Components {
    state = {
    counter: 0,
    crono: 0
    };
    handleIncrement = () => {
      this.setState({ counter: this.state.counter +1  });
    };
    handleDecrement = () => {
      this.setState({ counter: this.state.counter -1 });
    };
    componentDidMount =() => {
        console.log("this is from Component Did Mount");
     };
    componentDidUpdate = () => {
      console.log("this is from Component Did Update ");
    };
    componentWillUnmount = () => {
      console.log("this is from Component Will Unmount ");
    };
    render() {
      setInterval(() => {
        this.setstate({ crono: this.state.crono + 1 });
      }, 1000);
      return(
        <div className="Counter-button">
          <h1>Crono : {this.state.crono}</h1>
          <button onClick={this.handleIncrement}>Plus</button>
          <h2 className={this.state.counter > 9 ? "colorS9" : "colorI9"}>
            {this.state.counter}
          </h2>
          <button onClick={this.handleIncrement}>moins</button>
        </div>
      );

    };
  }