/**
 * react-native-pagination-dots
 *
 * @author      Afaan Bilal
 * @copyright   Eonyx Infotech LLP
 * @link https://eonyx.io
 *
 */

import React from "react";
import { View } from "react-native";

const PaginationDots = ({
    length = 5,
    activeIndex = 0,
    activeWidth = 30,
    passiveWidth = 10,
    height = 10,
    spacing = 5,
    activeColor = "#ffffff",
    passiveColor = "#ffffff",
}) => (
    [...Array(length).keys()].map((_, i) => (
        <View
            key={i}
            style={{
                backgroundColor: i == activeIndex ? activeColor : passiveColor,
                width: i == activeIndex ? activeWidth : passiveWidth,
                height: height, borderRadius: passiveWidth / 2,
                marginRight: spacing
            }}
        />
    ))
);

export default PaginationDots;
