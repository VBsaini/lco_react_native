import React from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
const soundsList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];
const App = () => {
  const playSound = sound => {
    const Soundvar = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log(err);
      }
    });
    setTimeout(() => {
      Soundvar.play();
    }, 1000);
    Soundvar.release();
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.gridContainer}>
        {soundsList.map(sound => (
          <TouchableOpacity
            key={sound}
            style={styles.box}
            onPress={() => {
              playSound(sound);
            }}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 110,
    marginBottom: 15,
    backgroundColor: '#0f4c75',
    width: '46%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});
export default App;
