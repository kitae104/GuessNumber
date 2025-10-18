import PropTypes from "prop-types";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState("");

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber); // 문자열을 정수로 변환
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Toast.show({
                type: "error",
                text1: "유효하지 않은 숫자",
                text2: "1에서 99 사이의 숫자를 입력해주세요.",
            });
            resetInputHandler(); // 입력 필드 초기화
            return;
        }
        onPickNumber(chosenNumber); // 유효한 숫자면 부모 컴포넌트로 전달
    };

    const resetInputHandler = () => {
        setEnteredNumber(""); // 입력 필드를 초기화
    };

    return (
        <View style={styles.rootContainer}> 
            <Title>숫자 맞추기 게임</Title>
            <Card>
                <InstructionText>1에서 99 사이의 숫자를 입력하세요:</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>
                            시작하기
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>
                            다시하기
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16, // 내부 여백
        marginTop: 20, // 상단 여백 (화면 위쪽에서의 간격)
        marginHorizontal: 24, // 좌우 여백
        backgroundColor: Colors.primary800, // 컨테이너 배경색
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
        borderBottomColor: Colors.accent500, // 하단 경계선 색상
        borderBottomWidth: 2, // 하단 경계선 두께
        color: Colors.accent500, // 입력 텍스트 색상
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

StartGameScreen.propTypes = {
    onPickNumber: PropTypes.func.isRequired,
};

export default StartGameScreen;
