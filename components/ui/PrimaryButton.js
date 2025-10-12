import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                android_ripple={{ color: Colors.primary600 }} // 안드로이드에서 눌렀을 때의 물결 효과 색상
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28, // 버튼 외곽의 모서리를 둥글게 처리
        margin: 4, // 버튼 주변의 외부 여백
        overflow: "hidden", // 자식 요소가 둥근 모서리를 넘지 않도록 잘라냄 (모서리 라운드 유지)
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500, // 버튼 내부 배경색
        paddingVertical: 8, // 세로 방향(위/아래) 패딩
        paddingHorizontal: 16, // 가로 방향(좌/우) 패딩
        elevation: 2, // Android에서 그림자/떠있는 효과를 주기 위한 높이
    },
    buttonText: {
        color: "white", // 버튼 텍스트 색상
        textAlign: "center", // 텍스트를 가로 중앙 정렬
    },
    pressed: {
        opacity: 0.75, // 버튼이 눌렸을 때 적용할 반투명 효과 (시각적 피드백)
    },
});

export default PrimaryButton;
