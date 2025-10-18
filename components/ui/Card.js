import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
    return <View style={styles.card}>{children}</View>;
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
    card: {
        justifyContent: "center", // 주 축(기본 세로 방향) 기준으로 자식 요소를 수직 중앙 정렬
        alignItems: "center", // 교차 축(가로) 기준으로 자식 요소를 수평 중앙 정렬
        marginTop: 36, // 컴포넌트 상단 외부 여백
        marginHorizontal: 24, // 좌우 외부 여백
        padding: 16, // 내부 여백(내용과 경계 사이 간격)
        backgroundColor: Colors.primary800, // 카드 배경색
        borderRadius: 8, // 모서리 둥글게 처리
        elevation: 4, // Android에서 그림자(떠 있는 효과)의 깊이
        shadowColor: "black", // iOS에서 사용할 그림자 색
        shadowOffset: { width: 0, height: 2 }, // iOS 그림자의 x/y 오프셋
        shadowRadius: 6, // iOS 그림자의 번짐 반경
        shadowOpacity: 0.25, // iOS 그림자 투명도(0~1)
    },
});

export default Card;
