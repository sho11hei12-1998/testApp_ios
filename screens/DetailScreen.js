import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is DetailScreen</Text>
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailScreen;