import React from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements'
import * as firebase from "firebase";
import db from "../config.js";


export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
     Author :"",
     Story:"",
     Title:"",
     transactionMessage: ""
    };
  }
  saveStory = async () => 
   {
    //add a transaction
    db.collection("Story").add({
      Author: this.state.Author,
      Story: this.state.Story,
      Title: this.state.Title,
      //transactionDate: firebase.firestore.Timestamp.now().toDate(),
    });
    
    this.setState({
      scannedStudentId: "",
      scannedBookId: ""
    });
  };
  handleTransaction = async () => {
    this.saveStory()     
 };
    render() {
      return (
        <View style={{height: 1000}}>  
        <KeyboardAvoidingView behavior='padding'>
            <Header
          backgroundColor={'#00008B'}
          centerComponent={{
            text:'Write Story',
            style:{color:'red', fontSize:20, fontWeight:'bold'}
          }}
        />
           <TextInput
              style={styles.inputBox}
              placeholder="Title"
              onChangeText={text => {
                this.setState({
                  Title: text
                });
              }}
              value={this.state.Title}
            />
        <TextInput
              style={styles.inputBox}
              placeholder="Author"
              onChangeText={text => {
                this.setState({
                  Author: text
                });
              }}
              value={this.state.Author}
            />
        <TextInput
          multiline = {true}
          numberOfLines = {20}
          style={styles.inputBox1}
          onChangeText={(text) => {
            this.setState({ Story:text });
          }}
          value={this.state.Story}
        />

        <TouchableOpacity
        style={styles.submitButton}
        onPress={async () => {
          var transactionMessage = this.handleTransaction();
        }}
          >
        <Text style={styles.submitButtonText}>Submit</Text>
        <Text style={styles.transactionAlert}>
            {this.state.transactionMessage}
          </Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 30,
      width: '90%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      borderColor:'black',
      color:'black',
      fontStyle:'italic',
      fontWeight:'bold',
      fontSize:20
    },
    inputBox1: {
      marginTop: 30,
      width: '90%',
      alignSelf: 'center',
      height: 300,
      textAlign: 'left',
      borderWidth: 4,
      borderColor:'black',
      color:'black',
      fontStyle:'italic',
      fontWeight:'bold',
      fontSize:20
    },
    submitButton:{
      backgroundColor: '#FBC02D',
      width: 100,
      height:50,
      alignSelf: 'center'
    },
    submitButtonText:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: 'white'
    },
    transactionAlert: {
      margin: 10,
      color: "red"
    }
  })