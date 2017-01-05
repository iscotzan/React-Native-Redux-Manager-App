/**
 * Created by Ori on 28/12/2016.
 */
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {

    return (<View style={[styles.containerStyle, props.style]}>
        {props.children}
    </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#FFF",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: "#DDD",
        position: 'relative'
    }
};

//export default CardSection; //because of the way we export from index.js as export * from..
//                         we need to use the following method:
export { CardSection };
