import React, { ReactElement } from 'react';
import { ScrollView, ScrollViewBase, StyleSheet, Text, View } from 'react-native';
import { Headline } from 'react-native-paper';


// 🥑 Add a `NetworkProvider
import { NetworkProvider } from 'react-native-offline';
import App from '../../App';


interface Props {
  title: string;
  children?: ReactElement;
  
}

const AppLayout = (props: Props) => {
  return (
    
    
        <View style={styles.container}>
            <Headline>{props.title}</Headline>
          <ScrollView>{props.children}</ScrollView>  
        </View>
   
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 36,
  },
});

