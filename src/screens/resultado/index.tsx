import { View, StyleSheet, Text } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { Share } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";









export function Resultado(props: any) {



    const nav = useNavigation<any>();




    let msgShare = () => {
        if (props.route.params.tela == 'quizDB') {
            return 'Dragon Ball';
        } else if (props.route.params.tela == 'quizNaruto') {
            return 'Naruto';
        } else {
            return 'Cavaleiros do Zodiaco';
        }

    }






    return (
        <View style={styles.container}>


            <View style={styles.title}>
                <Text style={styles.score}> Score : </Text>
                <Text style={styles.pontos}>{props.route.params.pontos}/6</Text>
            </View>





            <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace(props.route.params.tela)}>
                <Text style={styles.textos}>Tentar novamente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() =>
                Share.share({
                    title: 'Aplicativo - AnimeQuiz',
                    message: `"nomedousuario" acertou ${props.route.params.pontos}/6 dos pontos no questionário sobre ${msgShare()}, venha participar você também! `
                })}>
                <Text style={styles.textos}>Compartilhar minha pontuação</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => nav.navigate('menu')}>
                <Text style={styles.textos}>Ir para o menu</Text>
            </TouchableOpacity>







        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(192,192,192)'
    },
    button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 0,
        marginTop: 10,
        backgroundColor: 'rgb(255,128,0)'
    },
    title: {
        marginTop: 80,
        alignItems: 'center',
    },
    score: {
        fontSize: 40,
        fontFamily: 'monospace',
        marginLeft: 35,
        color: 'white'
    },
    pontos: {
        fontSize: 170
    },
    textos: {
        color: 'white',
        fontFamily: 'monospace',
    }
})


