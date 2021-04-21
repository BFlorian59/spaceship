import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';

import '@react-navigation/stack';



  export default function LoginScreen(){
   
    const navigation = useNavigation();

    function onWriteText(){
      console.log('ok');
    }
    
  
    return (
      
      <View style={styles.container}>
        <View>
          <Title > Welcome to startport </Title>
        </View>
        <View>
          <TextInput label="Email" placeholder="Email" onChangeText={onWriteText} style={styles.paragraph} />
          <TextInput label="Password"  placeholder="Password" onChangeText={onWriteText} style={styles.paragraph} />
        </View>
        
        <View>
        <Button onPress={() => navigation.navigate('Starship')}>
     Go to Starship
   </Button>
        </View>
        
      </View>
      
    );
  }
  
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title:{
    textAlign:'center',
   
  }
});
