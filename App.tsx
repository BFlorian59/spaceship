import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query'
import AppLayout from './src/components/AppLayout';
import StarShipCard from './src/screen/StarShipScreen';
import MyStack from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoute } from './src/navigation/AppRoute';
// import { LoginScreen as App } from './src/Screen/LoginScreen';
//import StorybookUIRoot from './storybook';
// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
// const SHOW_STORYBOOK = true;

// const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
// export default UI;

 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
 
export default function App() {
   return(
    <QueryClientProvider client={queryClient}>
      <AppLayout title="Starships">
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </AppLayout>
    </QueryClientProvider>
   ) 
 }
 


 


