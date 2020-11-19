import React from "react";
import { Text, View } from "react-native";

function get_my_coords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
}

const defaultSize = 100;
const defaultBorderRadius = 50;
const defaultMarginBottom = 20;
const defaultMarginTop = 0;

export default function Option(props) {
  let new_coords = get_my_coords(props.theta, props.radius);
  const left = props.center.x + new_coords.x;
  const top = props.center.y - new_coords.y;

  const handleOver = (e) => {
    e.target.style.height = `${defaultSize + 20}px`;
    e.target.style.width = `${defaultSize + 20}px`;
    e.target.style.borderRadius = `${defaultBorderRadius + 10}px`;
    e.target.style.backgroundColor = "cornflowerblue";
    e.target.style.marginBottom = `${defaultMarginBottom - 10}px`;
    e.target.style.marginTop = `${defaultMarginTop - 10}px`;
  };

  const handleLeave = (e) => {
    e.target.style.height = `${defaultSize}px`;
    e.target.style.width = `${defaultSize}px`;
    e.target.style.borderRadius = `${defaultBorderRadius}px`;
    e.target.style.backgroundColor = "lightblue";
    e.target.style.marginBottom = `${defaultMarginBottom}px`;
    e.target.style.marginTop = `${defaultMarginTop}px`;
  };
  return (
    <View
      style={{
        ...styles.option,
        left: `${left}px`,
        top: `${top}px`,
      }}
    >
      <View
        style={styles.icon}
        onMouseOver={handleOver}
        onMouseLeave={handleLeave}
      ></View>

      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
}

const styles = {
  option: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  icon: {
    height: "100px",
    width: "100px",
    backgroundColor: "lightblue",
    borderRadius: "50px",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 16.0,
    overflow: "visible",
    marginBottom: "20px",
  },
  label: {
    textAlign: "center",
  },
};
