import { useState } from "react";
import { TextInput, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";







export function TelaInicial() {




    return (
        <View style={styles.container}>


            <View style={styles.title}>
                <Text style={styles.titleStyle}>AnimeQuiz</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontFamily: 'monospace', color: 'white' }}> Quiz sobre Naruto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontFamily: 'monospace', color: 'white' }}> Quiz sobre Dragon ball</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontFamily: 'monospace', color: 'white' }}> Quiz sobre Saint Seiya</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontFamily: 'monospace', color: 'white' }}> Fale Conosco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontFamily: 'monospace', color: 'white' }}> Sair</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(0,153,153)'
    },
    title: {
        alignItems: 'center',
        marginTop: 40
    },
    titleStyle: {
        fontFamily: 'monospace',
        color: 'rgb(224,224,224)',
        fontSize: 30
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(0,153,153)',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
    },
});