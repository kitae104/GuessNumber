module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"], // ✅ Expo는 이걸 사용
        plugins: [
            "react-native-reanimated/plugin", // ✅ 항상 마지막
        ],
    };
};
