import { View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Calculator from './src/screen/Calculator';
import { CountProvider } from './src/context/Count';

const backgroundBar = '#4f4f4f'

export default function App() {
  return (
    <SafeAreaView>
      <CountProvider>
        <View>
          <StatusBar backgroundColor={backgroundBar} barStyle="light-content"/>
          <Calculator/>
        </View>
      </CountProvider>
    </SafeAreaView>
  );
}
