import { Animated } from 'react-native';

const fadeIn = {
  // Initial values for refs
  refs: {
    opacity: 0,
    scale: 2
  },
  animations: ( refs ) => [
    Animated
      .timing( refs.opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }),
    Animated
      .spring( refs.scale, {
        toValue: 1,
        bounciness: 16,
        duration: 100,
        useNativeDriver: true
      })
  ],
  start: ( animations, callback = () => {} ) => {
    Animated.parallel( animations ).start( callback );
  },
  styles: ( refs ) => ({
    opacity: refs.opacity,  // Bind opacity to animated value
    transform: [ { scale: refs.scale } ] // Bind scale to animated value
  })
}

export default fadeIn;
