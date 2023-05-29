import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login';
import { Cadastro } from '../screens/cadastro';
import { TelaInicial } from '../screens/telainicial';
import { QuizDragonBall } from '../screens/quizdragonball';
import { QuizNaruto } from '../screens/quiznaruto';
import { QuizSeiya } from '../screens/quizseiya';
import { Resultado } from '../screens/resultado';



export type NagevacaoType = {
    login: undefined,
    cadastro: undefined,
    menu: undefined,
    quizDB: undefined,
    quizNaruto: undefined,
    quizSaint: undefined,
    resultado: {
        pontos: number,
        tela: string
    },
}

const Stack = createNativeStackNavigator<NagevacaoType>();

export function NavegacaoPrincipal() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='cadastro' component={Cadastro} />
                <Stack.Screen name='menu' component={TelaInicial} />
                <Stack.Screen name='quizDB' component={QuizDragonBall} />
                <Stack.Screen name='quizNaruto' component={QuizNaruto} />
                <Stack.Screen name='quizSaint' component={QuizSeiya} />
                <Stack.Screen name='resultado' component={Resultado} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}