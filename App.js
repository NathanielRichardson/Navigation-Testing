// Basic imports
import React from 'react';
import { View, Text, } from 'react-native';
import { createAppContainer, createStackNavigator, } from 'react-navigation'; //Imports for the navigation

class HomeScreen extends React.Component {
    render () {
        return (
            <View>
                <Text>
                    Please work
                </Text>
            </View>
        );
    }
}

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

//Awful color that the town uses #857C2F