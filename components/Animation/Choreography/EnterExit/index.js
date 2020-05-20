import React, { useState, useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import usePrevious from '../../../../hooks/usePrevious';
import { getRefs, mergeStyles } from '../../utils';

export default EnterExit = ( props ) => {
  const [ mount, setMount ] = useState( props.show );

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

  // Keep track of the previous 'show' prop.
  const prevShow = usePrevious( props.show );

  // Respond to changes in the 'show' prop by entering or exiting.
  useEffect(() => {
    if( !prevShow && props.show ) {
      setMount( true );

      enter.start( animations.enter, () => {
        idle.start( animations.idle );
      });
    } else if( prevShow && !props.show ) {
      idle.start( animations.idle );
      exit.start( animations.exit, () => {
        setMount( false );
      });
    }
  });

  return mount
    ? (
      <Animated.View
        { ...props }
        style={[
          props.styles,
          styles
        ]}>
        { props.children }
      </Animated.View>
    )
    : <View/>
}
