import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/success.png")}
                    style={styles.image}
                />
            </View>
            <Text style={styles.summeryText}>
                당신의 휴대폰은 숫자 <Text style={styles.highlight}>{userNumber}</Text> 
                을 맞추기 위해 <Text style={styles.highlight}>{roundsNumber}</Text>
                번의 시도가 필요했습니다.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>새 게임 시작</PrimaryButton>
        </View>
    );
};

GameOverScreen.propTypes = {
    roundsNumber: PropTypes.number.isRequired,
    userNumber: PropTypes.number.isRequired,
    onStartNewGame: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({    
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary900, 
    },
    imageContainer: {
        width: 350,
        height: 350,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
        alignSelf: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summeryText: {
        fontFamily: "noto-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24,
    },
    highlight: {
        fontFamily: "noto-sans-bold",
        color: Colors.accent500,
    },
});

export default GameOverScreen;
