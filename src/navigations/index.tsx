import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login';
import { Cadastro } from '../screens/cadastro';
import { TelaInicial } from '../screens/telainicial';
import { QuizDragonBall } from '../screens/quizdragonball';
import { QuizNaruto } from '../screens/quiznaruto';
import { QuizSeiya } from '../screens/quizseiya';
import { Resultado } from '../screens/resultado';
import { Historico } from '../screens/historico';



export type NagevacaoType = {
    login: undefined,
    cadastro: undefined,
    menu: {
        email: string
    },
    quizDB: {
        email: string
    },
    quizNaruto: {
        email: string
    },
    quizSaint: {
        email: string
    },
    resultado: {
        email: string,
        pontos: number,
        tela: string
    },
    historico: {
        email: string
    }
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
                <Stack.Screen name='historico' component={Historico} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}