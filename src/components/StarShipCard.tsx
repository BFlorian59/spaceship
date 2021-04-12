import React from 'react';
import { StatusBar,  StyleSheet, View } from 'react-native';
import { ActivityIndicator, Card, Colors, Text, Title, Button } from 'react-native-paper';
import { NetworkConsumer, NetworkProvider } from 'react-native-offline';
import { useQuery } from 'react-query';
import fetchAsync from '../lib/fetch';
import { DATA } from '../../data';

interface StarShipCardProps {
    title:string;
    model: string;
    manufacturer:string;
    cost_in_credits:string;

}


const StarShipCard = ({
    title,
    model,
    manufacturer,
    cost_in_credits,
}: StarShipCardProps) =>{
    return(
        <Card style={styles.cardItem}>
            <Card.Content>
                <Title style={styles.itemName}>{title} </Title>
                <Text style={styles.itemModel}>{model}</Text>
                <Text style={styles.itemCrew}>{manufacturer}</Text>
                <Title style={styles.itemCost}> {cost_in_credits} Crédits </Title>
            </Card.Content>
           <Card.Actions > <Button style={styles.button}> Acheter un vaisseaux!!!!!!!</Button> </Card.Actions>
        </Card>
    )
}

export default StarShipCard;

const styles = StyleSheet.create({

    safeContainer: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    container: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    item: {
      marginVertical: 8,
      marginHorizontal: 16,
    },
    cardItem: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: "#4b3dad",
        borderWidth : 2,
        borderColor: "#2a1c8a",
        shadowRadius: 10,
        width:500,
    },
  
    itemName: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
    },
    itemModel: {
      marginTop: 5,
      marginLeft: 8,
      color: "white",
    },
    itemCrew: {
      color: "white",
      marginLeft: 8,
      fontSize:20
    },
    itemCost: {
      marginTop: 8,
      color: "white",
    },
    button: {
      marginTop: 12,
      backgroundColor: "white",
      borderWidth : 2,
      borderColor: "#2a1c8a",
    },
    itemButton: {
      color: "#4b3dad",
      fontWeight: "bold",
    }
  });
