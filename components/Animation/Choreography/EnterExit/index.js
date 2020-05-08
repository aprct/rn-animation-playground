import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { getRefs, mergeStyles } from '../../utils';

export default EnterExit = ( props ) => {
  const { enter, idle, exit } = props;

  // Combine refs in reverse order to preserve Enter animation's initial state.
  const refs = getRefs( useRef, {
    ...exit.refs,
    ...idle.refs,
    ...enter.refs,
  });

  const animations = {
    enter: enter.animations( refs ),
    idle: idle.animations( refs ),
    exit: exit.animations( refs )
  }

  // Merge styles in reverse order to preserve Enter animation's initial state.
  const styles = mergeStyles([
    exit.styles( refs ),
    idle.styles( refs ),
    enter.styles( refs ),
  ]);

  useEffect(() => {
    if( props.shouldExit ) {
      idle.start( animations.idle );
      exit.start( animations.exit );
      animations.idle
    } else if( props.shouldEnter ) {
      enter.start( animations.enter, () => {
        idle.start( animations.idle );
      });
    }
  });

  return (
    <Animated.View
      { ...props }
      style={[
        props.styles,
        styles
      ]}>
      { props.children }
    </Animated.View>
  );
}
