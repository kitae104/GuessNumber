import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// 스플래시 스크린이 자동으로 사라지지 않도록 설정
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [userNumber, setUserNumber] = useState(); // 사용자가 선택한 숫자
    const [gameIsOver, setGameIsOver] = useState(true); // 게임 오버 상태 추적
    const [guessRounds, setGuessRounds] = useState(0); // 사용자가 몇 번 만에 맞췄는지 추적

    // 1. 폰트 로딩
    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        "gabia_bombaram": require("./assets/fonts/gabia_bombaram.ttf"),
        "noto-sans": require("./assets/fonts/NotoSansKR-Regular.ttf"),
        "noto-sans-bold": require("./assets/fonts/NotoSansKR-Bold.ttf"),
    });

    // 2. 앱 상태(준비 완료)를 추적하는 state
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // 여기에 폰트 로딩 외 다른 비동기 작업(e.g., API 호출, 자산 로딩)을 넣습니다.
                // 예시: await Font.loadAsync(...) // useFonts 훅을 안 쓸 경우

                // 인위적으로 1초 지연 (테스트용)
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                // 3. 모든 준비가 끝나면 state를 true로 변경
                setAppIsReady(true);
            }
        }

        prepare();
    }, []); // 앱 실행 시 1회만 실행

    // 4. 앱이 준비되었고, 폰트도 로딩되었는지 확인(useCallback은 불필요한 리렌더링 방지)
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady && fontsLoaded) {
            // 5. 모든 준비가 완료되면 스플래시 스크린을 숨깁니다.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady, fontsLoaded]);

    // 6. 아직 준비가 안됐으면 null을 반환 (스플래시 스크린이 계속 보임)
    if (!appIsReady || !fontsLoaded) {
        return null;
    }

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = (numberOfRounds) => {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    };

    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    };

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }

    if (gameIsOver && userNumber) {
        screen = (
            <GameOverScreen
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onStartNewGame={startNewGameHandler}
            />
        );
    }

    return (
        <LinearGradient
            colors={[Colors.primary700, Colors.accent500]}
            style={styles.rootScreen}
        >
            <Toast />
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
