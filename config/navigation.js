
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PickupScreen from '../src/views/PickupScreen';
import DestinationScreen from '../src/views/DestinationScreen';

const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Pickup'>
                <Stack.Screen name="Pickup" component={PickupScreen} />
                <Stack.Screen name="Destination" component={DestinationScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigator
