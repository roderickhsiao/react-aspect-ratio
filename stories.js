import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "card": {
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "boxShadow": "0 1px 4px 0 rgba(0,0,0,.12)",
        "borderRadius": 2
    }
});