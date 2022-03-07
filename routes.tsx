import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './templates/Home'
import Products from './templates/Product'

const Stack = createNativeStackNavigator()
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Dasboard" component={HomeScreen} />
                <Stack.Screen name="Produtos" component={Products} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes