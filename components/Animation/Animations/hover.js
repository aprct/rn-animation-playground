import { Animated, Easing } from 'react-native';

const hover = {
  // Initial values for refs
  refs: {
    translateY: 0
  },
  animations: ( refs ) => [
    Animated
      .timing( refs.translateY, {
        toValue: -5,
        duration: 1200,
        easing: Easing.easeOutQuint,
        useNativeDriver: true
      }),
    Animated
      .timing( refs.translateY, {
        toValue: 0,
        duration: 1200,
        easing: Easing.easeOutQuint,
        useNativeDriver: true
      })
  ],
  start: ( animations ) => {
    Animated.loop(
      Animated.sequence( animations )
    ).start()
  },
  styles: ( refs ) => ({
    transform: [ { translateY: refs.translateY } ] // Bind scale to animated value
  })
}

export default hover;
