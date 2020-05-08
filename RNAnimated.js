import React, { useRef, useState } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

import { fadeIn, fadeOut, exitLeft, exitDown, hover } from './components/Animation/Animations';
import EnterExit from './components/Animation/Choreography/EnterExit';

const RNAnimated = () => {
  const [ shouldEnter, setShouldEnter ] = useState( false );
  const [ shouldExit, setShouldExit ] = useState( false );

  return (
    <View style={styles.container}>

      <EnterExit enter={ fadeIn } shouldEnter={ shouldEnter } idle={ hover } exit={ exitDown } shouldExit={ shouldExit }>
        <Text style={[ styles.text ]}>Hello world!</Text>
      </EnterExit>

      <View style={styles.buttonRow}>
        <Button title="Enter" onPress={ () => { setShouldExit( false ); setShouldEnter( true ); } } />
        <Button title="Exit" onPress={ () => { setShouldExit( true ); setShouldEnter( true ); } } />
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
    marginVertical: 16
  }
});

export default RNAnimated;
