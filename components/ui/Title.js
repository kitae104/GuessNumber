import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "noto-sans-bold",
        fontSize: 24,
        fontWeight: "bold",
        color: "#f9f8f5",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#f9f8f6",
        padding: 12,        
        maxWidth: "80%",
        width: 300,
    }
});

export default Title;
