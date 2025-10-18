import PropTypes from "prop-types";
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    const { width, height } = useWindowDimensions();

    let ImageSize = 300;

    if (width < 380) {
        ImageSize = 150;
    }

    if (height < 500) {
        ImageSize = 80;
    }

    const imageStyle = {
        width: ImageSize,
        height: ImageSize,
        borderRadius: ImageSize / 2,
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        source={require("../assets/images/success.png")}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.summeryText}>
                    당신의 휴대폰은 숫자{" "}
                    <Text style={styles.highlight}>{userNumber}</Text>을 맞추기
                    위해 <Text style={styles.highlight}>{roundsNumber}</Text>
                    번의 시도가 필요했습니다.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>
                    새 게임 시작
                </PrimaryButton>
            </View>
        </ScrollView>
    );
};

GameOverScreen.propTypes = {
    roundsNumber: PropTypes.number.isRequired,
    userNumber: PropTypes.number.isRequired,
    onStartNewGame: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
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
        color: Colors.primary500, // 강조 색상
    },
});

export default GameOverScreen;
