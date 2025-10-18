import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.instructionText, style]}>
            {children}
        </Text>
    );
};


InstructionText.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: "noto-sans", // 커스텀 폰트 적용
        color: Colors.accent500, // 텍스트 색상
        fontSize: 18, // 텍스트 크기
    },
});

export default InstructionText;
