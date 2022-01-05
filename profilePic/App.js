import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
const PendingView = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: 'red', fontSize: 30}}>Loading...</Text>
  </View>
);
const App = () => {
  const [image, setImage] = useState(null);
  const takePicture = async camera => {
    try {
      const options = {quality: 0.9, base64: false};
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        {image ? (
          <View style={styles.preview}>
            <Text style={styles.camText}>Here is your new profile pic</Text>
            <Image
              style={styles.clicked}
              source={{uri: image, width: '100%', height: '100%'}}
            />
            <Button
              title="click new Image"
              onPress={() => {
                setImage(null);
              }}></Button>
          </View>
        ) : (
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'longer text to use camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to capture audio',
              message: 'longer text to capture audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
            {({camera, status}) => {
              if (status !== 'READY') return <PendingView></PendingView>;
              return (
                <View
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={styles.capture}
                    onPress={() => takePicture(camera)}>
                    <Text>SNAP</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0a79df',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'orange',
    padding: 20,
    alignSelf: 'center',
  },
  camText: {
    backgroundColor: '#3498db',
    color: '#fff',
    marginBottom: 10,
    width: '100%',
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 25,
  },
  clicked: {
    width: 300,
    alignSelf: 'center',
    height: 300,
    borderRadius: 150,
  },
});
export default App;
