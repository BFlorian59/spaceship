import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query'
import AppLayout from './src/components/AppLayout';
import StarShipCard from './src/screen/StarShipScreen';

 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
 
 function App() {
   return(
    <QueryClientProvider client={queryClient}>
      <AppLayout title="Starships">
        <StarShipCard/>
      </AppLayout>
    </QueryClientProvider>
   ) 
 }

 



export default App;


