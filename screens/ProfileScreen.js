import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';


class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  reply() {
    return {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      }
    };
  }


  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(GiftedChat.append(previousState.messages, messages), this.reply()),
    }))
  }

  render() {
    console.log(this.state.messages);
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
            name: 'Me',
            avater: 'https://placeimg.com/140/140/any'
          }}
          placeholder={'メッセージを入力'}
          locale='ja'
          timeFormat='H:mm'
          dateFormat='M月D日'
          keyboardShouldPersistTaps='never'
          renderSend={(props) => {
            return (
              <Send {...props} containerStyle={styles.sendContainer}>
                <Text style={styles.sendButtonTitle}>送信</Text>
              </Send>
            );
          }}
        />
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
  sendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 15,
  },
  sendButtonTitle: {
    color: '#4fa9ff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProfileScreen;