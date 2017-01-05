/**
 * Created by Ori on 28/12/2016.
 */
//import libraries to make a component
import React from 'react';
import { Text, View } from 'react-native';

//make the component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
        );
};

const styles = {
    viewStyle: {
        //backgroundColor: '#F8F8F8',
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//make the component available to other parts of the app
//export default Header; //because of the way we export from index.js as export * from..
//                         we need to use the following method:
export { Header };
