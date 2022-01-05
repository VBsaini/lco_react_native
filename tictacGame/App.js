import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {
  Text,
  Container,
  Header,
  Content,
  Card,
  H1,
  Title,
  H3,
  Button,
  Body,
} from 'native-base';
import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';
const itemArray = new Array(9).fill('empty');
const App = () => {
  const [Num, setnum] = useState(1);
  const [isCross, Setiscross] = useState(false);
  const [winMessage, setwinmessage] = useState();
  const [circleWon, setCircleWon] = useState(0);
  const [crossWon, setCrossWon] = useState(0);
  const changeItem = itemNum => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#000',
        textColor: '#fff',
      });
    }
    if (itemArray[itemNum] === 'empty') {
      itemArray[itemNum] = isCross ? 'cross' : 'circle';
      Setiscross(!isCross);
      setnum(Num + 1);
      if (Num === 9) {
        setwinmessage('draw');
      }
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        textColor: '#fff',
      });
    }
    checkWinner();
  };
  const reloadGame = () => {
    setnum(1);
    Setiscross(false);
    setwinmessage('');
    itemArray.fill('empty', 0, 9);
  };
  const checkWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setwinmessage(`${itemArray[0]} won`);
      if (itemArray[0] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
    if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setwinmessage(`${itemArray[3]} won`);
      if (itemArray[3] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
    if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setwinmessage(`${itemArray[6]} won`);
      if (itemArray[6] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
    if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setwinmessage(`${itemArray[0]} won`);
      if (itemArray[0] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
    if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setwinmessage(`${itemArray[1]} won`);
      if (itemArray[1] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
    if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setwinmessage(`${itemArray[2]} won`);
      if (itemArray[2] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setwinmessage(`${itemArray[0]} won`);
      if (itemArray[0] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
    if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setwinmessage(`${itemArray[0]} won`);
      if (itemArray[0] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
    if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setwinmessage(`${itemArray[2]} won`);
      if (itemArray[2] == 'circle') {
        setCircleWon(circleWon + 1);
      } else {
        setCrossWon(crossWon + 1);
      }
    }
  };
  const Reset = () => {
    setCircleWon(0);
    setCrossWon(0);
    reloadGame();
  };
  return (
    <Container
      style={{
        backgroundColor: '#333945',
        padding: 5,
        paddingTop: 0,
        paddingLeft: 0,
      }}>
      <Header>
        <Body>
          <Title>Tic Tac Toe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemArray.map((item, index) => (
            <TouchableOpacity
              onPress={() => changeItem(index)}
              style={styles.box}
              key={index}>
              <Card style={styles.card}>
                <Icons Name={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button onPress={reloadGame} success block>
              <Text>Reload Game!!</Text>
            </Button>
          </View>
        ) : (
          <View>
            <H3 style={styles.message}>{isCross ? 'cross' : 'circle'} turn</H3>
          </View>
        )}
        <View style={styles.wonContainer}>
          <View>
            <Text style={{fontSize: 20}}>Circle Won</Text>
            <Text style={{alignSelf: 'center', fontSize: 20}}>{circleWon}</Text>
          </View>
          <View style={{}}>
            <Text style={{fontSize: 20}}>Cross Won</Text>
            <Text style={{alignSelf: 'center', fontSize: 20}}>{crossWon}</Text>
          </View>
        </View>
        <Button
          danger
          block
          onPress={() => {
            Reset();
          }}>
          <Text>Reset</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  wonContainer: {
    backgroundColor: 'white',
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    marginTop: 20,
    backgroundColor: '#4652b3',
    paddingVertical: 10,
  },
});

export default App;
