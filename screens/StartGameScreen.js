import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>시작하기</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>다시하기</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16, // 내부 여백
        marginTop: 100, // 상단 여백 (화면 위쪽에서의 간격)
        marginHorizontal: 24, // 좌우 여백
        backgroundColor: "#4e0329", // 컨테이너 배경색
        borderRadius: 8, // 모서리 둥글게
        elevation: 4, // Android용 그림자 깊이
        shadowColor: "black", // iOS용 그림자 색
        shadowOffset: { width: 0, height: 2 }, // iOS용 그림자 오프셋
        shadowRadius: 6, // iOS용 그림자 반경
        shadowOpacity: 0.25, // iOS용 그림자 투명도
    },
    numberInput: {
        height: 60, // 입력 필드의 높이 (픽셀 단위)
        width: 50, // 입력 필드의 너비 (픽셀 단위)
        fontSize: 32, // 입력되는 숫자 글자 크기
        borderBottomColor: "#ddb52f", // 하단 경계선 색상
        borderBottomWidth: 2, // 하단 경계선 두께
        color: "#ddb52f", // 입력 텍스트 색상
        marginVertical: 8, // 위/아래 마진 (간격)
        fontWeight: "bold", // 텍스트 굵기
        textAlign: "center", // 텍스트 중앙 정렬
    },
    buttonsContainer: {
        flexDirection: "row", // 버튼들을 가로로 배치
    },
    buttonContainer: {
        flex: 1, // 버튼이 컨테이너 내에서 균등하게 공간을 차지하도록 설정        
    },
});

export default StartGameScreen;
