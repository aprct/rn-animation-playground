import { Animated, Easing, Dimensions } from 'react-native';

const exitLeft = {
  // Initial values for refs
  refs: {
    translateY: 0
  },
  animations: ( refs ) => [
    Animated
      .timing( refs.translateY, {
        toValue: -50,
        duration: 200,
        easing: Easing.easeOutCubic,
        useNativeDriver: true
      }),
    Animated
      .spring( refs.translateY, {
        toValue: Dimensions.get('window').height * 2,
        duration: 200,
        easing: Easing.easeOutElastic,
        useNativeDriver: true
      })
  ],
  start: ( animations, callback = () => {} ) => {
    Animated.sequence( animations ).start( callback );
  },
  styles: ( refs ) => ({
    transform: [ { translateY: refs.translateY } ] // Bind translateY to animated value
  })
}

export default exitLeft;
