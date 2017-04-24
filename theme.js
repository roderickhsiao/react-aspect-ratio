import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "body": {
        "backgroundColor": "#fafafa",
        "fontFamily": "'Helvetica,Arial,sans-serif'",
        "fontSmoothing": "antialiased",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minHeight": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textRendering": "optimizeLegibility"
    },
    "page__title": {
        "borderBottom": "1px solid rgba(0,0,0,.12)",
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "fontSize": 20,
        "backgroundColor": "#4caf50",
        "color": "#fff",
        "fontWeight": "400"
    },
    "page__title-desc": {
        "fontStyle": "italic"
    },
    "card": {
        "boxShadow": "0 1px 4px 0 rgba(0,0,0,.14)",
        "width": "50%",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "backgroundColor": "#fff"
    },
    "card__head": {
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "borderBottom": "1px solid rgba(0,0,0,.12)"
    },
    "card__title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "500",
        "fontSize": 20
    },
    "card__conent": {
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16
    }
});