import { TextInput, View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button } from "@rneui/base";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';











export function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState<null | string>(null);
    const [sucesso, setSucesso] = useState<null | string>(null);

    const nav = useNavigation<any>();

    const auth = getAuth();




    const handleCadastro = async () => {
        setSucesso(null);
        setErro(null);


        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            setSucesso('Conta criada com sucesso!');
        } catch (erro) {
            console.log(erro);
            if (erro.code == 'auth/email-already-in-use') {
                setErro('Esse email já está em uso!');
            } else {
                setErro('Houve um erro, conta não criada!');
            }

        }
    }

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/originals/30/f9/00/30f900fd7fec80bb029ea4e984319e80.jpg' }}
            style={styles.container}>

            <Formik initialValues={{ nome: '', email: '', senha: '' }}
                validationSchema={Yup.object({
                    nome: Yup.string().required('informe o nome'),
                    email: Yup.string().email("Esse email não é válido!"),
                    senha: Yup.string().max(10, "A senha não pode ultrapassar 10 caracteres")
                })}
                onSubmit={handleCadastro}>

                {({ handleChange, handleSubmit, errors, touched, handleBlur }) => (

                    <View>

                        <TouchableOpacity>

                        </TouchableOpacity>

                        <Text style={styles.title}>Cadastro</Text>



                        <SafeAreaView>


                            <TextInput placeholder="Infome seu nome" onChangeText={handleChange('nome')} style={styles.input} />
                            {touched.nome && errors.nome && <Text style={styles.erro}>{errors.nome}</Text>}


                            <TextInput placeholder="Digite um email" onChangeText={setEmail} style={styles.input} />
                            {errors.email && touched.email && <Text style={styles.erro}>{errors.email}</Text>}


                            <TextInput placeholder="Digite uma senha" onChangeText={setSenha}
                                style={styles.input}
                                secureTextEntry />
                            {errors.senha && touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}

                        </SafeAreaView>

                        {sucesso != null && <Text style={styles.sucess}> {sucesso}</Text>}
                        {erro != null && <Text style={styles.erro}>{erro}</Text>}
                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                            <Text>Cadastrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('login')}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>





                    </View>


                )}

            </Formik>


        </ImageBackground >
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
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(0,204,0)',
        padding: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    erro: {
        fontFamily: 'monospace',
        color: 'red',
        marginLeft: 10
    },
    sucess: {
        fontFamily: 'monospace',
        color: 'green',
        marginLeft: 20
    },
    notsucess: {
        fontFamily: 'monospace',
        color: 'red',
        marginLeft: 20
    }
});

function then(arg0: (userCredential: any) => void) {
    throw new Error("Function not implemented.");
}
