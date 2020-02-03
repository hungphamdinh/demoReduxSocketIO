

import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import io from "socket.io-client"
import {connect}from 'react-redux'
import {submitMessage} from '../redux/actions/messageAction'
import {setMessage} from '../redux/actions/messageAction'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
export class MainScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      chatMessage:""
    };
  }
  componentDidMount(){
    this.socket=io("http://192.168.1.176:3000");
    this.socket.on("chat message",msg=>{
      this.props.submitMessage(msg);
    });
  }

  submitChatMessage(){
    this.socket.emit("chat message",this.props.randomMessage.chatMessage);
    this.props.setMessage("");
  }
  changeText=(msg)=>{
    this.props.setMessage(msg)
  }

  render(){
  return (
    <View>
      <TextInput
      style={{height:40,borderRadius:2}}
      autoCorrect={false}
      value={this.props.randomMessage.chatMessage}
      onSubmitEditing={()=>this.submitChatMessage()}
      onChangeText={chatMessage=>{
        this.changeText(chatMessage)
      }}
      />
    </View>
    
  );
}
}
const mapStateToProps = state =>{
  return {
    randomMessage:state
  }
}
export default connect(
  mapStateToProps,
  {submitMessage,setMessage}
  )(MainScreen);
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

