import React, { use } from "react";
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Colors from "../../constants/colors";
import PropTypes from "prop-types";

const NumberContainer = ({ children }) => {

    const {width, height} = useWindowDimensions();
    
    const containerStyle = {
        padding: width > 500 ? 18 : 24,
        margin: width > 500 ? 18 : 24,
    };

    const fontSizeStyle = {
        fontSize: width > 500 ? 28 : 36,
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.numberText, fontSizeStyle]}>{children}</Text>
        </View>
    );
};

NumberContainer.propTypes = {
    children: PropTypes.node.isRequired,   
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,       
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        fontFamily: "noto-sans-bold",
        color: Colors.accent500,        
    },
});
export default NumberContainer;
