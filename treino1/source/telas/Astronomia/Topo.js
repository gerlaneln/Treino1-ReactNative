import React from "react";
import { Image, Text, StyleSheet, Dimensions } from "react-native";

import topo from '../../../assets/topo.jpg';

const width = Dimensions.get('screen').width;

export default function Topo (){
    return <>
        <Image style={styles.topo} source={topo}/>
        <Text style={styles.tituloAstronomia}>Estrelas</Text>
        <Text style={styles.desc}>As mais brilhantes</Text>
    </>
    ;
}

const styles = StyleSheet.create({
    topo:{
        width: "100%",
        height: 305/566 * width
    },
    tituloAstronomia:{
        position: "absolute",
        color: "white",
        marginTop: 100,
        textAlign: "center",
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 40
    },
    desc:{
        position: "absolute",
        color: "white",
        marginTop: 140,
        textAlign: "center",
        width: "100%",
        fontSize: 17,
        fontStyle: "italic"
    }
});