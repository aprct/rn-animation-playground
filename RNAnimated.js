import React, { useRef, useState } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

import { fadeIn, fadeOut, exitLeft, exitDown, hover } from './components/Animation/Animations';
import EnterExit from './components/Animation/Choreography/EnterExit';

const RNAnimated = () => {
  const [ show, setShow ] = useState( false );

  return (
    <View style={ styles.container }>

      <EnterExit show={ show } enter={ fadeIn } idle={ hover } exit={ exitLeft }>
        <Text style={[ styles.text ]}>Hello world!</Text>
      </EnterExit>

      <View style={ styles.buttonRow }>
        <Button title="Enter" onPress={ () => { setShow( true ); } } />
        <Button title="Exit" onPress={ () => { setShow( false ); } } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  skunchContainer: {

  },
  text: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue",
    fontSize: 24,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 64,
    left: 0,
    right: 0,
  }
});

export default RNAnimated;
