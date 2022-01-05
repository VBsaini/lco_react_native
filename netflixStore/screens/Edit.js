import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text, Button, H1, Container, Form, Item, Input} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';
import {set} from 'react-native-reanimated';
const Edit = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [totalSeasons, setTotalSeasons] = useState('');
  const [id, setId] = useState(null);
  const update = async () => {
    try {
      if (!name && !totalSeasons) {
        return Snackbar.show({
          text: 'Please enter name or number of seasons',
        });
      } else {
        const seasonToUpdate = {
          id,
          name,
          totalSeasons,
          isWatched: false,
        };
        const storedValue = await AsyncStorage.getItem('@season_list');
        const list = await JSON.parse(storedValue);
        list.map(item => {
          if (item.id == id) {
            item.name = seasonToUpdate.name;
            item.totalSeasons = seasonToUpdate.totalSeasons;
          }
          return item;
        });
        setId('');
        setName('');
        setTotalSeasons('');
        await AsyncStorage.setItem('@season_list', JSON.stringify(list));
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const {season} = route.params;
    const {id, name, totalSeasons} = season;
    setId(id);
    setName(name);
    setTotalSeasons(totalSeasons);
  }, []);
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add to watch list</H1>
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Show Name"
              style={{color: '#eee'}}
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Total Number of Seasons"
              style={{color: '#eee'}}
              keyboardType="number-pad"
              value={totalSeasons}
              onChangeText={text => {
                setTotalSeasons(text);
              }}
            />
          </Item>
          <Button rounded block onPress={update}>
            <Text style={{color: '#eee', fontSize: 20}}>Update</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});

export default Edit;
