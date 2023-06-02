import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NagevacaoType } from '../../navigations';
import React from "react";
import { getFirestore, doc, setDoc, updateDoc, addDoc, collection, Timestamp } from 'firebase/firestore';









export function QuizDragonBall(props: any) {







    const nav = useNavigation<NativeStackNavigationProp<NagevacaoType, 'quizDB'>>();
    const db = getFirestore();

    // quiz com 6 perguntas também

    // mensagem guardando 1 pergunta
    const [mensagem, setMensagem] = useState('Qual foi o motivo de Goku se transformar em ssj?');
    // respostas com as primeiras respostas do quiz
    const [resposta1, setResposta1] = useState("Morte de vegeta");
    const [resposta2, setResposta2] = useState("Morte de kuririn"); // correta
    const [resposta3, setResposta3] = useState("Morte de goten");
    const [resposta4, setResposta4] = useState("Morte de gohan");

    const [pontuacao, setPontuacao] = useState(0);
    const [aviso, setAviso] = useState("");

    // guardando primeira imagem do quiz
    const [image, setImage] = useState('https://www.latercera.com/resizer/vZ5_qPHMpfImqPJJSfPHdrfXDHU=/800x0/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/J7UEIVG7TZDGTAA3XGHL3T6AXQ.jpg');

    let mudandoPergunta2 = () => {
        setTimeout(() => {
            setImage('https://criticalhits.com.br/wp-content/uploads/2019/12/goku-cell.jpg');
            setAviso("");
            // mudando para a 2 pergunta do quiz
            setMensagem("Quais foram os vilões que mataram Goku?");
            //mudando as respostas
            setResposta1("Vegeta e Nappa");
            setResposta2("Majin buu e Dabura");
            setResposta3("Raditz e Cell"); // correta
            setResposta4("Frezza e rei cold");
        }, 3000);
    }

    let mudandoPergunta3 = () => {
        setTimeout(() => {
            setImage('https://www.einerd.com.br/wp-content/uploads/2018/05/dragon-ball-super-saiyajin-capa-e1561380510175-890x466.jpg');
            setAviso("");
            // mudando para a 3 pergunta do quiz
            setMensagem("Quem é o principe dos saiyajins?");
            //mudando as respostas
            setResposta1("Trunks");
            setResposta2("Vegeta"); // correta
            setResposta3("Gohan");
            setResposta4("Goku");
        }, 3000);
    }

    let mudandoPergunta4 = () => {
        setTimeout(() => {
            setImage('https://64.media.tumblr.com/701b0b596564e7f85454f9caece0b8e6/04f41ba1049fb23b-f2/s1280x1920/ba8252c3a0869b3b93d95e6094762f16c68a2bbc.jpg');
            setAviso("");
            // mudando para a 4 pergunta do quiz
            setMensagem("Quem foi o primeiro a se transforma em ssj2?");
            //mudando as respostas
            setResposta1("Goku");
            setResposta2("Vegeta");
            setResposta3("Gohan"); // correta
            setResposta4("Trunks");
        }, 3000);
    }

    let mudandoPergunta5 = () => {
        setTimeout(() => {
            setImage('https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/03/Dragon-Ball-Por-que-Goten-y-Trunks-perdieron-protagonismo-en-el-anime-1.jpg');
            setAviso("");
            // mudando para a 5 pergunta do quiz
            setMensagem("Qual a idade de Trunks e Goten em Dragon Ball Z?");
            //mudando as respostas
            setResposta1("7 e 6");
            setResposta2("10 e 11");
            setResposta3("11 e 10");
            setResposta4("8 e 7"); // correta
        }, 3000);
    }

    let mudandoPergunta6 = () => {
        setTimeout(() => {
            setImage('https://static.wikia.nocookie.net/dragonball/images/2/21/GokuS35.png/revision/latest?cb=20150210194534&path-prefix=pt-br');
            setAviso("");
            // mudando para a 6 pergunta do quiz
            setMensagem("Como Goku aprendeu o teletransporte?");
            //mudando as respostas
            setResposta1("Com piccolo");
            setResposta2("Na sala do tempo");
            setResposta3("Lutando contra o cell");
            setResposta4("No planeta yardrat"); // correta
        }, 3000);
    }

    let Finalizando = () => {
        setTimeout(() => {

            //const documento = doc(db, 'pontos_quiz', '1');
            //const dados = { pontos: pontuacao, quiz: 'dragon ball' };
            //setDoc(documento, dados);

            addDoc(collection(db, props.route.params.email), {
                pontos: pontuacao,
                quiz: 'dragon ball',
                data: new Date().toDateString()
            })

            nav.navigate('resultado', { email: props.route.params.email, pontos: pontuacao, tela: 'quizDB' });



        }, 3000)
    }



    let verificandoRespostas = (mensagem: string, resposta: number) => {

        switch (mensagem) {
            case "Qual foi o motivo de Goku se transformar em ssj?":
                if (resposta != 2) {
                    setPontuacao(pontuacao);
                    setAviso("Você errou!");
                    mudandoPergunta2();

                } else if (resposta == 2) { // correta
                    setPontuacao(pontuacao + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta2();
                }
                break;
            case "Quais foram os vilões que mataram Goku?":
                if (resposta != 3) {
                    setPontuacao(pontuacao);
                    setAviso("Você errou!");
                    mudandoPergunta3();

                } else if (resposta == 3) { //correta
                    setPontuacao(pontuacao + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta3();
                }
                break;
            case "Quem é o principe dos saiyajins?":
                if (resposta != 2) {
                    setPontuacao(pontuacao);
                    setAviso("Você errou!");
                    mudandoPergunta4();

                } else if (resposta == 2) { //correta
                    setPontuacao(pontuacao + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta4();
                }
                break;
            case "Quem foi o primeiro a se transforma em ssj2?":
                if (resposta != 3) {
                    setPontuacao(pontuacao);
                    setAviso("Você errou!");
                    mudandoPergunta5();

                } else if (resposta == 3) { // correta
                    setPontuacao(pontuacao + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta5();
                }
                break;
            case "Qual a idade de Trunks e Goten em Dragon Ball Z?":
                if (resposta != 4) {
                    setPontuacao(pontuacao);
                    setAviso("Você errou!");
                    mudandoPergunta6();

                } else if (resposta == 4) {  // correta
                    setPontuacao(pontuacao + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta6();
                }
                break;
            case "Como Goku aprendeu o teletransporte?":
                if (resposta != 4) {
                    setPontuacao(pontuacao);
                    setAviso("Você errou!");
                    Finalizando();

                } else if (resposta == 4) {  // correta
                    setPontuacao(pontuacao + 1);
                    setAviso("Você acertou!");
                    Finalizando();


                }
                break;

        }
    }







    return (
        <View style={styles.container}>

            <ScrollView>



                <View style={styles.mensagem}>
                    <Text style={{ fontFamily: 'monospace', color: 'black' }}>{mensagem} {'\n'}</Text>
                </View>

                <Image style={styles.image} source={{ uri: image }} />

                <TouchableOpacity style={styles.button} onPress={() => verificandoRespostas(mensagem, 1)}>
                    <Text style={styles.texto}>{resposta1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => verificandoRespostas(mensagem, 2)}>
                    <Text style={styles.texto}>{resposta2}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => verificandoRespostas(mensagem, 3)}>
                    <Text style={styles.texto}>{resposta3}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => verificandoRespostas(mensagem, 4)}>
                    <Text style={styles.texto}>{resposta4}</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    {aviso == 'Você acertou!' && <Text style={styles.msgAcertou}>Correto!</Text>}
                    {aviso == 'Você errou!' && <Text style={styles.msgErrou}>Errado!</Text>}
                </View>


            </ScrollView>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(192,192,192)'
    },
    mensagem: {
        marginTop: 80,
        alignItems: 'center',
    },
    texto: {
        fontFamily: 'monospace',
        color: 'white'
    },
    pontos: {
        fontSize: 25,
        fontFamily: 'monospace',
        color: 'orange'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(255,128,0)',
        padding: 10,
        borderRadius: 10,
        borderWidth: 0,
        marginTop: 10,
    },
    msgAcertou: {
        alignItems: 'center',
        fontFamily: 'monospace',
        color: 'green'
    },
    msgErrou: {
        alignItems: 'center',
        fontFamily: 'monospace',
        color: 'red'
    },
    image: {
        width: 300,
        height: 200,
        marginLeft: 15
    },

})


