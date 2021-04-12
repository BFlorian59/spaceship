import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Colors, Text } from 'react-native-paper';
import { NetworkConsumer, NetworkProvider } from 'react-native-offline';


const Offline = () => {
  return (
    <View>
    
    <NetworkConsumer>
      {({ isConnected }) =>
        isConnected ? (
          <Text>ok</Text>
        ) : (
          <Text>Downloading images is disabled since you are offline</Text>
        )
      }
    </NetworkConsumer>
  </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: 'absolute',
    top: 55,
    width: '90%',
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    color: Colors.red800,
  },
});