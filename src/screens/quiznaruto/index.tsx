import { Button } from "@rneui/base";
import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from "react-native";






export function QuizNaruto() {
    // - quiz terá 6 perguntas
    // mensagem começa com a primeira pergunta do quiz
    const [mensagem, setMensagem] = useState("Kakashi era sensei do time...?");
    const [pontos, setPontos] = useState(0);
    // respostas começa com as primeiras respostas do quiz
    const [resposta1, setResposta1] = useState("Time 7");
    const [resposta2, setResposta2] = useState("Time 9");
    const [resposta3, setResposta3] = useState("Time 6");
    const [resposta4, setResposta4] = useState("Time 8");
    const [aviso, setAviso] = useState("");
    const [finalizado, setFinalizado] = useState(false);
    const [image, setImage] = useState('https://cdn.popsww.com/blog/sites/2/2021/11/hatake-kakashi.jpg');



    let mudandoPergunta2 = () => {
        setTimeout(() => {
            setImage('https://criticalhits.com.br/wp-content/uploads/2021/04/6232199-2688321943-6231899-4084665585-latest.jpg');
            setAviso("");
            // mudando para a 2 pergunta do quiz
            setMensagem("Qual o sonho de Sasuke Uchiha no 'Naruto Clássico'?");
            //mudando as respostas
            setResposta1("Matar seu irmão mais velho e restaurar o seu clã"); // correta
            setResposta2("Se casar com o sakura");
            setResposta3("Ser hokage");
            setResposta4("Se casar com o naruto");
        }, 3000);
    }

    let mudandoPergunta3 = () => {
        setTimeout(() => {
            setImage('https://popularanime.com.br/wp-content/uploads/2022/09/itachi-marcas-1-768x402.jpg');
            setAviso("");
            // mudando para a 3 pergunta do quiz
            setMensagem("Itachi era de qual clã?");
            //mudando as respostas
            setResposta1("Uzumaki");
            setResposta2("Nara");
            setResposta3("Haruno");
            setResposta4("Uchiha"); // correta
        }, 3000);
    }

    let mudandoPergunta4 = () => {
        setTimeout(() => {
            setImage('https://www.themarysue.com/wp-content/uploads/2022/06/naruto.jpg?fit=1200%2C625');
            setAviso("");
            // mudando para a 4 pergunta do quiz
            setMensagem("Quem é o irmão do naruto?");
            //mudando as respostas
            setResposta1("Neji");
            setResposta2("Hidan");
            setResposta3("Ele não tem"); // correta
            setResposta4("Sasuke");
        }, 3000);
    }

    let mudandoPergunta5 = () => {
        setTimeout(() => {
            setImage('https://criticalhits.com.br/wp-content/uploads/2022/04/kakashi-Sharingan.jpg');
            setAviso("");
            // mudando para a 5 pergunta do quiz
            setMensagem("Quem deu o sharingan para o kakashi?");
            //mudando as respostas
            setResposta1("Itachi");
            setResposta2("Obito"); // correta
            setResposta3("Uchiha Madara");
            setResposta4("Shisui");
        }, 3000);
    }

    let mudandoPergunta6 = () => {
        setTimeout(() => {
            setImage('https://criticalhits.com.br/wp-content/uploads/2020/10/Kyuubi_attack_on_Konoha.jpg');
            setAviso("");
            // mudando para a 6 pergunta do quiz
            setMensagem("Quantas caldas a raposa (bijuu)do naruto tem?");
            //mudando as respostas
            setResposta1("8");
            setResposta2("7");
            setResposta3("9"); // correta 
            setResposta4("6");
        }, 3000);
    }

    let mensagemFinal = () => {
        setTimeout(() => {
            setFinalizado(true);
            setImage('https://www.shutterstock.com/shutterstock/videos/30650614/thumb/12.jpg?ip=x480');
            setAviso('');

            if (pontos >= 0 && pontos <= 3) {
                setMensagem('Seus conhecimentos não são bons, você precisa melhorar!');
            } else if (pontos >= 4) {
                setMensagem('Seus conhecimentos são bons!');
            }

            setResposta1('Tentar Novamente');
            setResposta2('Compartilhar');
            setResposta3('Ir pro Menu');
            setResposta4('Sair');

        }, 3000)
    }



    let verificandoRespostas = (mensagem: string, resposta: number) => {

        switch (mensagem) {
            case "Kakashi era sensei do time...?":
                if (resposta == 1) {  // resposta correta
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta2();

                } else if (resposta != 1) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta2();
                }
                break;
            case "Qual o sonho de Sasuke Uchiha no 'Naruto Clássico'?": // pergunta 2
                if (resposta == 1) { // resposta correta
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta3();
                } else if (resposta != 1) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta3();
                }
                break;
            case "Itachi era de qual clã?": // pergunta 3
                if (resposta != 4) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta4();
                } else if (resposta == 4) {
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta4();
                }
                break;
            case "Quem é o irmão do naruto?":
                if (resposta != 3) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta5();
                } else if (resposta == 3) {
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta5();
                }
                break;
            case "Quem deu o sharingan para o kakashi?":
                if (resposta != 2) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta6();
                } else if (resposta == 2) {
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta6();
                }
                break;
            case "Quantas caldas a raposa (bijuu)do naruto tem?":
                if (resposta != 3) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mensagemFinal();

                } else if (resposta == 3) {
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mensagemFinal();

                }
                break;
            default:
                if (resposta == 1) { // tentar novamente
                    console.log("tentar denovo");
                } else if (resposta == 2) { // compartilhar
                    console.log("compartilhar");
                } else if (resposta == 3) { // ir pro menu
                    console.log("pro menu");
                } else { // sair
                    console.log("saindo");
                }
                break;
        }
    }



    return (
        <View style={styles.container}>

            <ScrollView >

                <View style={styles.mensagem}>
                    {finalizado == true && <Text style={styles.pontos}>Score: {pontos}/6</Text>}
                    <Text style={styles.texto}>{mensagem} {'\n'}</Text>
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
        backgroundColor: 'rgb(0,153,153)'
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
        backgroundColor: 'rgb(0,153,153)',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
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
    botaoFinalizar: {
        backgroundColor: 'rgb(0,153,153)',
        borderRadius: 10,
        borderWidth: 1,
        padding: 5

    },

})