import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if(counters[index].value===-1)
    return counter;
    this.setState({ counter: counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counter.filter((c) => c.id !== counterId);
    this.setState({ counter: counters });
  };
  handleReset = () => {
    const counters = this.state.counter.map((m) => {
      m.value = 0;
      return m;
    });
    this.setState({ counter: counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counter.filter((m) => m.value > 0).length}
        />
        <main className="container">
          <Counters
            counter={this.state.counter}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
