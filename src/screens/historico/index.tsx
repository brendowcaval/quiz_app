import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NagevacaoType } from '../../navigations';
import { getFirestore, doc, setDoc, updateDoc, addDoc, collection, getDocs } from 'firebase/firestore';
import { useState } from "react";







export function Historico(props: any) {

    const nav = useNavigation<NativeStackNavigationProp<NagevacaoType, 'historico'>>();
    const db = getFirestore();

    const [erro, setErro] = useState<null | string>(null);
    const [pontos, setPontos] = useState<any[]>([]);













    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.button} onPress={() => nav.goBack()}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={async () => {
                    try {
                        const resposta = await getDocs(collection(db, props.route.params.email));
                        const lista: any[] = [];
                        resposta.forEach((doc) => {
                            lista.push(doc.data())
                        })

                        setPontos(lista);

                    } catch (erro) {

                        setErro('Houve um erro, tente novamente!');
                    }
                }}>
                    <Text>Atualizar</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.title}>Pontuações</Text>
            <Text style={styles.subtitle}>Pontos  |   Quiz   |   Data  </Text>

            {erro != null && <Text> {erro}</Text>}
            {pontos.map((ponto, index) =>

                <Text style={styles.pontos} key={index}>{ponto.pontos}/6            {ponto.quiz}           {ponto.data}</Text>
            )}

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
        backgroundColor: 'rgb(255,128,0)',
        padding: 10,
        borderRadius: 10,
        borderWidth: 0,
        marginTop: 20,

    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "rgb(224,224,224)",
        marginBottom: 40,
        fontFamily: 'monospace',
        marginTop: 20,
        marginLeft: 80
    },
    subtitle: {
        marginLeft: 50,
        fontFamily: 'monospace',
    },
    pontos: {
        color: 'green',
        marginLeft: 65,
        marginTop: 10
    }
});