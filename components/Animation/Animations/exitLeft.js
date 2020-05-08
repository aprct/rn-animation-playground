import { Animated, Easing, Dimensions } from 'react-native';

const exitLeft = {
  // Initial values for refs
  refs: {
    translateX: 0
  },
  animations: ( refs ) => [
    Animated
      .timing( refs.translateX, {
        toValue: 50,
        duration: 200,
        easing: Easing.easeOutCubic,
        useNativeDriver: true
      }),
    Animated
      .spring( refs.translateX, {
        toValue: Dimensions.get('window').width * -2,
        duration: 200,
        easing: Easing.easeOutElastic,
        useNativeDriver: true
      })
  ],
  start: ( animations, callback = () => {} ) => {
    Animated.sequence( animations ).start();
  },
  styles: ( refs ) => ({
    transform: [ { translateX: refs.translateX } ] // Bind translateX to animated value
  })
}

export default exitLeft;
