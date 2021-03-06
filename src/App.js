import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
          count: props.count
      };
  }

  handleAddOne() {
      this.setState((prevState) => {
          return {
              count: prevState.count + 1
          }
      })
  }

  handleMinusOne() {
      this.setState((prevState) => {
          return {
              count: prevState.count - 1
          }
      })
  }

  handleReset(){
      this.setState(() => {
          return {
              count: 0
          }
      });
  }
  render() {
      return (
      <div>
          <h1>count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>Reset</button>
      </div>
      );
  }
}
//default counter prop
Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter count={5}/>, document.getElementById('root'));
export default Counter;

