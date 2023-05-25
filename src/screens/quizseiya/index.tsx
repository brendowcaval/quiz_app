import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";








export function QuizSeiya() {
    // quiz com 6 perguntas também

    // mensagem guardando 1 pergunta
    const [mensagem, setMensagem] = useState('Quantos cavaleiros de ouro existem?');
    // respostas com as primeiras respostas do quiz
    const [resposta1, setResposta1] = useState("10");
    const [resposta2, setResposta2] = useState("11");
    const [resposta3, setResposta3] = useState("12");
    const [resposta4, setResposta4] = useState("13"); //correta

    const [pontos, setPontos] = useState(0);
    const [aviso, setAviso] = useState("");
    const [finalizado, setFinalizado] = useState(false);
    // guardando primeira imagem do quiz
    const [image, setImage] = useState('https://2.bp.blogspot.com/-mUc1mUa5rMw/VAFLIypLOsI/AAAAAAAACI4/BvaG5jVDvfo/s1600/cdz%2B-%2B%2B12%2Bcavaleiros%2Bde%2Bouro.jpg');


    let mudandoPergunta2 = () => {
        setTimeout(() => {
            setImage('https://sm.ign.com/ign_br/screenshot/default/seiya_jb69.png');
            setAviso("");
            // mudando para a 2 pergunta do quiz
            setMensagem("O que acontece quando Seiya é atingido pela espada de Hades?");
            //mudando as respostas
            setResposta1("Fica desacordado por uns instante");
            setResposta2("Ele morre");
            setResposta3("Nada, continua a lutar");
            setResposta4("Ele fica em coma"); // correta
        }, 3000);
    }

    let mudandoPergunta3 = () => {
        setTimeout(() => {
            setImage('https://onlineseries.com.br/wp-content/uploads/2023/03/Shiryu-de-Dragao-Os-Cavaleiros-do-Zodiaco.jpg');
            setAviso("");
            // mudando para a 3 pergunta do quiz
            setMensagem("Qual o ataque mais poderoso de Shiryu?");
            //mudando as respostas
            setResposta1("Cólera do dragão");
            setResposta2("Cólera dos cem dragões");
            setResposta3("Dragão voador");
            setResposta4("Ùltimo dragão"); // correta
        }, 3000);
    }

    let mudandoPergunta4 = () => {
        setTimeout(() => {
            setImage('https://static.wikia.nocookie.net/anicrossbr/images/6/6e/Cavaleiros-do-zodiaco.jpg/revision/latest?cb=20151028002856&path-prefix=pt-br');
            setAviso("");
            // mudando para a 4 pergunta do quiz
            setMensagem("Qual cavaleiro usou a armadura de virgem lutando contra Thanatos?");
            //mudando as respostas
            setResposta1("Ikki de fênix");
            setResposta2("Shun de andrômeda"); // correta
            setResposta3("Shiryu de dragão");
            setResposta4("Hyoga de cisne");
        }, 3000);
    }

    let mudandoPergunta5 = () => {
        setTimeout(() => {
            setImage('https://s.aficionados.com.br/imagens/hyoga.jpg');
            setAviso("");
            // mudando para a 5 pergunta do quiz
            setMensagem("Qual é o local de nascimento de Hyoga de Cisne?");
            //mudando as respostas
            setResposta1("Noruega");
            setResposta2("Finlândia");
            setResposta3("Rússia"); // correta
            setResposta4("Grécia");
        }, 3000);
    }

    let mudandoPergunta6 = () => {
        setTimeout(() => {
            setImage('https://onlineseries.com.br/wp-content/uploads/2023/03/Marin-de-Aguia-Cavaleiros-do-Zodiaco.jpg');
            setAviso("");
            // mudando para a 6 pergunta do quiz
            setMensagem("O que marin é do Seiya?");
            //mudando as respostas
            setResposta1("Melhor amiga");
            setResposta2("Treinadora"); //correta
            setResposta3("Irmã");
            setResposta4("Irmã e treinadora");
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
            case "Quantos cavaleiros de ouro existem?":
                if (resposta != 4) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta2();

                } else if (resposta == 4) { // correta
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta2();
                }
                break;
            case "O que acontece quando Seiya é atingido pela espada de Hades?":
                if (resposta != 4) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta3();

                } else if (resposta == 4) { // correta
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta3();
                }
                break;
            case "Qual o ataque mais poderoso de Shiryu?":
                if (resposta != 4) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta4();

                } else if (resposta == 4) { // correta
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta4();
                }
                break;
            case "Qual cavaleiro usou a armadura de virgem lutando contra Thanatos?":
                if (resposta != 2) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta5();

                } else if (resposta == 2) { // correta
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta5();
                }
                break;
            case "Qual é o local de nascimento de Hyoga de Cisne?":
                if (resposta != 3) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mudandoPergunta6();

                } else if (resposta == 3) { // correta
                    setPontos(pontos + 1);
                    setAviso("Você acertou!");
                    mudandoPergunta6();;
                }
                break;
            case "O que marin é do Seiya?":
                if (resposta != 2) {
                    setPontos(pontos);
                    setAviso("Você errou!");
                    mensagemFinal();

                } else if (resposta == 2) { // correta
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