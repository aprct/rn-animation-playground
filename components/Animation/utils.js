import { Animated } from 'react-native';
import _ from 'lodash';

export const getRefs = ( useRef, refs ) => Object.keys( refs )
  .map( key => ({
    [ key ]: useRef( new Animated.Value( refs[ key ] ) ).current
  }) )
  .reduce(( acc, curr ) => ({ ...acc, ...curr }));

// Construct the styles without the transform rules, then reintroduce the transform rules to prevent collisions
export const mergeStyles = ( styles ) => ({
  ...styles.reduce(( acc, curr ) => _.merge( acc, _.omit( curr, 'transform' ) ) ),
  transform: styles
    .filter( style => style.transform )
    .map( style => style.transform )
    .reduce(( acc, curr ) => [ ...acc, ...curr ])
});
