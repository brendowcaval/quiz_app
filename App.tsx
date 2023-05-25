import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QuizNaruto } from './src/screens/quiznaruto';
import { Login } from './src/screens/login';
import { Cadastro } from './src/screens/cadastro';
import { TelaInicial } from './src/screens/telainicial';
import { QuizSeiya } from './src/screens/quizseiya';
import { QuizDragonBall } from './src/screens/quizdragonball';

export default function App() {
  return (
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
