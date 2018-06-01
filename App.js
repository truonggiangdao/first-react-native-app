import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: {
        style: {
          width: 120,
          height: 120,
          borderRadius: 10,
          marginBottom: 20,
        },
        src: {
          uri: 'https://avatars0.githubusercontent.com/u/13427999?s=460&v=4',
        },
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={this.state.avatar.style}
          source={this.state.avatar.src}
        />
        <Text style={styles.titleText}>Giang Dao</Text>
        <Text style={styles.smallText}>github@truonggiangdao</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29487d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 3,
    textShadowColor: '#444',
  },
  smallText: {
    fontSize: 20,
    color: '#e2e2e2',
  },
});
