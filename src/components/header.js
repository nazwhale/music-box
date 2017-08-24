// header component structure
// import libs for making component
import React from 'react';
import { Text } from 'react-native';

// make component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// make component available to other parts of the app
export default Header;


// justify content - moves elements vertically in a container: flex-start(default), center, flex-end
// alignItems - moves elements horizontally in a container: flex-start, center, flex-end
