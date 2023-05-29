import { useState } from "react";
import { TextInput, View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';







export function TelaInicial() {

    const nav = useNavigation<any>();

    let textoENavegacao: { texto: string, navegacao: string }[] = [
        { texto: 'Quiz - Naruto', navegacao: 'quizNaruto' },
        { texto: 'Quiz - Dragon Ball', navegacao: 'quizDB' },
        { texto: 'Quiz - Saint Seiya', navegacao: 'quizSaint' }
    ];

    return (
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={styles.titleStyle}>AnimeQuiz</Text>
            </View>


            <FlatList
                data={textoENavegacao}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.button} onPress={() => nav.navigate(item.navegacao)}>
                        <Text style={{ fontFamily: 'monospace', color: 'white' }}>{item.texto}</Text>
                    </TouchableOpacity>
                )} />

            <TouchableOpacity style={styles.buttonBack} onPress={() => nav.goBack()}>
                <Text style={{ color: 'rgb(255,128,0)', fontSize: 15 }}>Sair</Text>
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
    title: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 100
    },
    titleStyle: {
        fontFamily: 'monospace',
        color: 'rgb(224,224,224)',
        fontSize: 30
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(255,128,0)',
        padding: 10,
        borderRadius: 10,
        borderWidth: 0,
        marginTop: 20,
    },
    buttonBack: {
        alignItems: 'center',
        padding: 10,
        fontFamily: 'monospace',
        marginBottom: 150

    }
});