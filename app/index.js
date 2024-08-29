import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Button, Text, Switch } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ExpenseProvider, useExpenseContext } from "./components/ExpenseContext";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import Addform from "./components/add_expense";
import ExpenseComponent from "./components/expense_component";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    const { expenses, setExpenses } = useExpenseContext();
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <SafeAreaView className={`flex-1 p-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <StatusBar style={isDarkMode ? "light" : "dark"} />
            <View className="items-center mb-4">
                <Text className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    Expense Tracker
                </Text>
            </View>
            <View className="items-center mb-4">
                <Button
                    onPress={() => navigation.navigate('AddExpense', { editMode: false })}
                    color={isDarkMode ? "#007BFF" : "#007BFF"}
                    title="Add Expense"
                />
            </View>
            <ExpenseComponent expenses={expenses} setExpenses={setExpenses} />
            <View style={{ position: 'absolute', bottom: 16, right: 16 }}>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleTheme}
                    thumbColor={isDarkMode ? "#FFFFFF" : "#000000"}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>
        </SafeAreaView>
    );
};

const App = () => (
    <ThemeProvider>
        <ExpenseProvider>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: "Expense Tracker",
                            headerStyle: { backgroundColor: '#0033A0' },
                            headerTintColor: '#FFF'
                        }}
                    />
                    <Stack.Screen
                        name="AddExpense"
                        component={Addform}
                        options={{
                            title: "Add/Edit Expense",
                            headerStyle: { backgroundColor: '#0033A0' },
                            headerTintColor: '#FFF'
                        }}
                    />
                </Stack.Navigator>
        </ExpenseProvider>
    </ThemeProvider>
);

export default App;
