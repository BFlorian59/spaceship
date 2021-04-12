import React from 'react';
import { ScrollView, ScrollViewBase, StyleSheet, View, Text, StatusBar } from 'react-native';
import { Card } from 'react-native-paper';
import { useQuery } from 'react-query';
import AppLayout from '../components/AppLayout';
import StarShipCard from '../components/StarShipCard';
import fetchAsync from '../lib/fetch';



interface ShipProps{
    name:string;
    model: string;
    manufacturer:string;
    cost_in_credits:string;

}
 

const StarShipScreen = () => {
        // 🥑 Query data with fetchAsync
        const { isLoading, isError, data } =  useQuery( 'starships', () => fetchAsync(`https://swapi.dev/api/starships/`) );

         
    if (isError) { return <Text>Error</Text> }
    if (isLoading) { return <Text>Loading...</Text> }
    //<FlatList data={data} renderItem={RenderItem} />

    //if (data.results === undefined) { return <Text>Not found...</Text> }
    if (data.results === undefined) { return <Text>Not found...</Text> }

        
      return(
        <View>
            {data.results.map((ships:ShipProps) => (
              <Card>
                <StarShipCard
               title ={ships.name}
                model= {ships.model}
                 manufacturer= {ships.manufacturer}
                  cost_in_credits= {ships.cost_in_credits}
                />
              </Card>
            ))}
        </View>
      );
};

const StarshipsFeedScreen = () => {

    return (
  
        <AppLayout title="Starships">
            <View>
                <StarShipScreen></StarShipScreen> 
            </View>
        </AppLayout>
      
  
    );
}



export default StarshipsFeedScreen;


