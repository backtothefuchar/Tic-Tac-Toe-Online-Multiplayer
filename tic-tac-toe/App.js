import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.jpeg')} style={styles.background} resizeMode="contain">
        <View style={styles.map}>
          <View style={styles.circle} />

          <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReverse]} />
          </View>
        </View>

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#242D34",
  },

  background: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },

  map: {
    borderWidth: 1,
    borderColor: "#fff",
    width: "80%",
    aspectRatio: 1,
  },

  circle:{
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,

    borderWidth: 10,
    borderColor: 'white',
  },

  cross: {
    width: 75,
    height: 75,
  },

  crossLine:{
    position: 'absolute',
    left: 32,
    width: 12,
    height: 80,
    backgroundColor: 'white',
    transform: [{rotate: '45deg'}],
    borderRadius: 7,
  },

  crossLineReverse:{
    transform: [{rotate: '-45deg'}],
  },
});
