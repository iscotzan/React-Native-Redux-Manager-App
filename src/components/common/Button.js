/**
 * Created by Ori on 28/12/2016.
 */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
      <TouchableOpacity
          onPress={onPress}
          style={buttonStyle}
      >
        <Text style={textStyle}>
            {children}
        </Text>
      </TouchableOpacity>
          );
};

const styles = {
  textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
  },
  buttonStyle: {
      flex: 1, //expand to fill as much content as possibly can
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5
  }
};

//export default Button; //because of the way we export from index.js as export * from..
//                         we need to use the following method:
export { Button };
