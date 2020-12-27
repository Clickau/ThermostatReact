import React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import DashboardScreen from './src/screens/Dashboard';
import SchedulesScreen from './src/screens/Schedules';
import MoreScreen from './src/screens/More';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={RootScreen}
                    options={({ route }) => ({
                        headerTitle: getFocusedRouteNameFromRoute(route) ?? "Dashboard"
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createBottomTabNavigator();

function RootScreen() {
    return (
        <Tab.Navigator
            backBehavior="none"
            initialRouteName="Dashboard"
            tabBarOptions={{
                style: { height: 60 },
                labelStyle: { fontSize: 12 }
            }}
        >
            <Tab.Screen
                name="Dashboard"
                title="Dashboard"
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="dashboard" size={size} color={color} />)
                }}
            />
            <Tab.Screen
                name="Schedules"
                title="Schedules"
                component={SchedulesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="schedule" size={size} color={color} />)
                }}
            />
            <Tab.Screen
                name="More"
                title="More"
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="list" size={size} color={color} />)
                }}
            />
        </Tab.Navigator>
    )
}
