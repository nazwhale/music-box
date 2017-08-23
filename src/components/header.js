// header component structure
// import libs for making component
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  };
  textStyle: {
    fontSize: 20,
  }
};

// make component available to other parts of the app
export default Header;


// justify content - moves elements vertically in a container: flex-start(default), center, flex-end
// alignItems - moves elements horizontally in a container: flex-start, center, flex-end
