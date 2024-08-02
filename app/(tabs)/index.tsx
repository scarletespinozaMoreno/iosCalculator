import { Image, StyleSheet, Platform, View, StatusBar } from 'react-native';
import { styles } from '@/src/config/theme/app-theme';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CalculatorScreen } from '@/src/presentation/screens/CalculatorScreen';

export default function HomeScreen() {
  return (
      <View style={ styles.background }>
        <StatusBar
          barStyle={ 'light-content' }
          backgroundColor={ 'black' }
        />
  
        <CalculatorScreen />
      </View>
    );
}
