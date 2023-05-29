import { Button } from "@rneui/themed";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { TextInput, View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';






export function Login(props: any) {

    const [resultado, setResultado] = useState("");
    const nav = useNavigation<any>();

    const handleLogin = ({ email, senha }: any) => {
        if (email.trim() == 'teste@teste.com' && senha.trim() == '123456') {
            setResultado("logado");
            nav.navigate('menu')
        } else {
            setResultado("falhou");
        }

    }
    return (

        <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/0b/31/35/0b3135aae94365f528b130d13b451f49.jpg' }} style={styles.container} >
            <Formik
                initialValues={{ email: '', senha: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().required('Informe o email').email('Email não válido'),
                    senha: Yup.string().required('Informe a senha').max(10, 'Limite da senha é 10 caracteres')
                })}
                onSubmit={handleLogin}>
                {({ handleChange, handleSubmit, errors, touched, handleBlur }) => (

                    <View>


                        <Text style={styles.title} >AnimeQuiz</Text>


                        <SafeAreaView>
                            <TextInput placeholder="Digite seu email" onChangeText={handleChange('email')} style={styles.input} />
                            {errors.email && touched.email && <Text style={styles.stylefalha}>{errors.email}</Text>}



                            <TextInput placeholder="Digite sua senha" onChangeText={handleChange('senha')} style={styles.input}
                                secureTextEntry />
                            {errors.senha && touched.senha && <Text style={styles.stylefalha}>{errors.senha}</Text>}
                        </SafeAreaView>

                        <TouchableOpacity style={styles.button1} onPress={() => handleSubmit()} >
                            <Text style={{ fontFamily: 'monospace', color: 'white' }}>Login</Text>
                        </TouchableOpacity>
                        {resultado == 'falhou' && <Text style={styles.erro}>Email ou Senha incorretas!</Text>}

                        <TouchableOpacity style={styles.button2} onPress={() => nav.navigate('cadastro')}>
                            <Text style={{ fontFamily: 'monospace', color: 'white' }} >Cadastrar</Text>
                        </TouchableOpacity>








                    </View>
                )}
            </Formik>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "rgb(224,224,224)",
        marginBottom: 40,
        fontFamily: 'monospace'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button1: {
        alignItems: 'center',
        backgroundColor: 'rgb(0,204,0)',
        padding: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10

    },
    button2: {
        alignItems: 'center',
        backgroundColor: 'rgb(0,102,204)',
        padding: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10
    },
    stylefalha: {
        fontFamily: 'monospace',
        color: 'red',
        marginLeft: 10
    },
    erro: {
        fontFamily: 'monospace',
        color: 'black',
        marginLeft: 20
    }

});