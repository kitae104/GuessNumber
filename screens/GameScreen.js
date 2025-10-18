import Ionicons from '@expo/vector-icons/Ionicons';
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min; // max은 제외, min은 포함

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude); // 재귀 호출
    } else {
        return rndNum; // 유효한 숫자 반환
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber); // 1~99 사이의 랜덤 숫자 생성 (userNumber은 제외)
    const [currentGuess, setCurrentGuess] = useState(initialGuess); // 현재 추측 숫자 상태
    const [guessRounds, setGuessRounds] = useState([initialGuess]); // 추측한 숫자들의 배열 상태

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length); // 게임 오버 콜백 호출
        }
    }, [currentGuess, userNumber, onGameOver]); // currentGuess나 userNumber가 변경될 때마다 실행

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "higher" && currentGuess > userNumber)
        ) {
            Toast.show({
                type: "error",
                text1: "거짓말 하지 마세요!",
                text2: "올바른 방향으로 버튼을 눌러주세요.",
            });
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess; // 현재 추측 숫자를 새로운 최대값으로 설정
        } else {
            minBoundary = currentGuess + 1; // 현재 추측 숫자 + 1을 새로운 최소값으로 설정
        }
        console.log(minBoundary, maxBoundary);
        const newRandomNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRandomNumber);
        setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
    };

    const guessRoundsLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>상대방의 추측</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    더 큰 수 혹은 더 작은 수?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "higher")}
                        >
                            <Ionicons name="add-outline" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "lower")}
                        >
                            <Ionicons name="remove-outline" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        </View>
    );
};

GameScreen.propTypes = {
    userNumber: PropTypes.number.isRequired,
    onGameOver: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 12,
        fontSize: 16,
        color: "#f9f8f5",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});

export default GameScreen;
