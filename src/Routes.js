import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieScreen from './Screens/MovieScreen';
import Details from './Screens/Details';

const Stack = createStackNavigator();


class Routes extends React.Component{
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MovieScreen">
                    <Stack.Screen name="MovieScreen" component={MovieScreen} options={{headerShown:false}} />  
                    <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
               </Stack.Navigator>
            </NavigationContainer>
        )
    }  
};


export default Routes;

// There are two screens
// 1: First is movie screen which shows all the movies in different tabs
// 2: Second is the movie details screen which shows a selected movie with other details of that movie.