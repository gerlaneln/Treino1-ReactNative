import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import estrela4 from '../../../assets/estrela4.png';
import estrela5 from '../../../assets/estrela5.png';

export default function Detalhes (){
    return <>
        <View style={styles.estrela}>
            <Image style={styles.estrelaImage} source={estrela4}/>
            <Text style={styles.nomeEstrela}>Sirius</Text>
        </View>
        <Text style={styles.dsg}>Designação de Bayer: </Text>
        <Text style={styles.bayer}>αCMa</Text>
        <View style={styles.estrela}>
            <Image style={styles.estrelaImage} source={estrela5}/>
            <Text style={styles.nomeEstrela}>Canopus</Text>
        </View>
        <Text style={styles.dsg}>Designação de Bayer: </Text>
        <Text style={styles.bayer}>αCar</Text>
        <View style={styles.estrela}>
            <Image style={styles.estrelaImage} source={estrela4}/>
            <Text style={styles.nomeEstrela}>Alpha Centauri</Text>
        </View>
        <Text style={styles.dsg}>Designação de Bayer: </Text>
        <Text style={styles.bayer}>αCen</Text>
        <View style={styles.estrela}>
            <Image style={styles.estrelaImage} source={estrela5}/>
            <Text style={styles.nomeEstrela}>Arcturus</Text>
        </View>
        <Text style={styles.dsg}>Designação de Bayer: </Text>
        <Text style={styles.bayer}>αBoo</Text>
        <View style={styles.estrela}>
            <Image style={styles.estrelaImage} source={estrela4}/>
            <Text style={styles.nomeEstrela}>Vega</Text>
        </View>
        <Text style={styles.dsg}>Designação de Bayer: </Text>
        <Text style={styles.bayer}>αLyr</Text>
    </>
    ;
}

const styles = StyleSheet.create({
    estrela:{
        marginTop: 20,
        flexDirection: "row",
        padding: 10
    },
    estrelaImage:{
        width: 32,
        height: 32,
        marginLeft: 30
    },
    nomeEstrela:{
        color: "#3A0474",
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: "bold",
        lineHeight: 26,
        marginLeft: 10
    },
    dsg:{
        fontSize: 20,
        marginLeft: 40
    },
    bayer:{
        color: "#020873",
        marginLeft:45,
        fontSize: 18,
        fontWeight: "bold"
    }
});