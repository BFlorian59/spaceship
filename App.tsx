import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query'
import AppLayout from './src/components/AppLayout';
import StarShipCard from './src/screen/StarShipScreen';
// import { LoginScreen as App } from './src/Screen/LoginScreen';
//import StorybookUIRoot from './storybook';


 
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
 const SHOW_STORYBOOK = true;

//  const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
//  export default UI;
 export default App;
 


