import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min; // max은 제외, min은 포함

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude); // 재귀 호출
    } else {
        return rndNum; // 유효한 숫자 반환
    }
};

const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber); // 1~99 사이의 랜덤 숫자 생성 (userNumber은 제외)
    const [currentGuess, setCurrentGuess] = useState(initialGuess); // 현재 추측 숫자 상태

    return (
        <View style={styles.screen}>
            <Title>상대방의 추측</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                {/* + - */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});

export default GameScreen;
