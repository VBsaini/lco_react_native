import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';

import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
const currencyPerRuppes = {
  Dollar: 0.014,
  Euro: 0.012,
  Pound: 0.011,
  Ruble: 0.93,
  AusDollar: 0.2,
  CanDollar: 0.019,
  Yen: 1.54,
  Dinar: 0.0043,
  Bitcoin: 0.000004,
};
const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const buttonPress = currency => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#ea7773',
        textColor: '#000',
      });
    }
    let result = parseFloat(inputValue) * currencyPerRuppes[currency];
    console.log(currency);
    setResultValue(result.toFixed(2));
  };
  return (
    <>
      <ScrollView
        backgroundColor="#1B262C"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue.toString()}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              onChangeText={input => {
                setInputValue(input);
              }}></TextInput>
          </View>
          <View style={styles.ConvertButtonContainer}>
            {Object.keys(currencyPerRuppes).map(currency => (
              <TouchableOpacity
                key={currency}
                style={styles.convertButton}
                onPress={() => {
                  buttonPress(currency);
                }}>
                <Text style={styles.convertButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  resultValue: {fontSize: 30, color: '#ffffff', fontWeight: 'bold'},
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
  },
  input: {textAlign: 'center', fontSize: 30, color: '#ffffff'},
  ConvertButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  convertButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderWidth: 2,
    width: '33.3%',
    backgroundColor: '#0f4c75',
    borderColor: '#bbe1fa',
  },
  convertButtonText: {fontSize: 15, color: '#ffffff'},
});
export default App;
