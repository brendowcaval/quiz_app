import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavegacaoPrincipal } from './src/navigations';
import { initializeApp } from "firebase/app";


export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyChPMibMcZQ0w5oNBcpvKXxTXpEphLvICE",
    authDomain: "quiz-app-d903b.firebaseapp.com",
    projectId: "quiz-app-d903b",
    storageBucket: "quiz-app-d903b.appspot.com",
    messagingSenderId: "78970326689",
    appId: "1:78970326689:web:4de1691e8d754a55fe6ae0"
  };

  const app = initializeApp(firebaseConfig);

  return (
    <NavegacaoPrincipal />
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
