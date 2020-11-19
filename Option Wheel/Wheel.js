import React, { Component } from "react";
import Option from "./Option";

class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 200,
      options: [],
    };
  }

  componentDidMount() {
    let center_of_wheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    };

    let labels = ["hi", "my", "name", "is", "Adam"];
    let new_options = [];

    for (let i = 0; i < 5; i++) {
      new_options.push(
        <Option
          key={i}
          theta={1.25664 * i + 0.314159}
          radius={this.state.radius}
          center={center_of_wheel}
          label={labels[i]}
        />
      );
    }

    this.setState({ options: new_options });
  }

  render() {
    return (
      <div ref={(ref_id) => (this.wheel = ref_id)} style={styles.wheel}>
        {this.state.options}
      </div>
    );
  }
}

const styles = {
  wheel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "300px",
    width: "300px",
    borderRadius: "150px",
  },
};

export default Wheel;
