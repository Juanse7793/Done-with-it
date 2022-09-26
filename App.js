import {
  StyleSheet,
  Button,
  Alert,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Juancho"
        onPress={() =>
          Alert.alert('Te gusta la sapada?', 'Confirma', [
            { text: 'Simon', onPress: () => console.log('Simon') },
            { text: 'Nola', onPress: () => console.log('Nola') },
          ])
        }
      />
      <Text style={styles.text}>Hi world</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    color: 'tomato',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
