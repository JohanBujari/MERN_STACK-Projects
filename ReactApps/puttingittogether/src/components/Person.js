import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age
    };
  }

  handleClick = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <h1>
          {this.props.firstName} {this.props.lastName}
        </h1>
        <p>Age: {this.state.age}</p>
        <button onClick={this.handleClick}>
          Birthday button for {this.props.firstName} {this.props.lastName}
        </button>
        <p>Hair Color: {this.props.color}</p>
      </div>
    );
  }
}

export default Person;





// import React, { useState } from "react";

// const Person = (props) => {
//   const [age, setAge] = useState(props.age);
//   return (
//     <div>
//       <h1>
//         {props.firstName} {props.lastName}
//       </h1>
//       <p>Age: {age}</p>
//       <button onClick={(event) => setAge(age + 1)}>
//         Birthday button for {props.firstName} {props.lastName}
//       </button>
//       <p>Hair Color: {props.color}</p>
//     </div>
//   );
// };

// export default Person;