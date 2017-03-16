import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "[style*=\"--aspect-ratio\"] > :first-child": {
        "width": "100%"
    },
    "[style*=\"--aspect-ratio\"] > img": {
        "height": "auto"
    }
});