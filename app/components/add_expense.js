import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { Button, Text, TextInput, View, ScrollView } from "react-native";
import { useExpenseContext } from "./ExpenseContext";
import { useTheme } from "./ThemeContext";

const Addform = ({ route, navigation }) => {
    const { expenses, setExpenses, chartData, setChartData } = useExpenseContext();
    const { editMode, expenseData } = route.params || {};
    const { isDarkMode } = useTheme();

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [payee, setPayee] = useState("");
    const [category, setCategory] = useState("Food");
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const [status, setStatus] = useState("Cleared");
    const [refCheque, setRefCheque] = useState("");
    const [description, setDescription] = useState("");

    const categories = ["Food", "Clothes", "Bills", "Others"];

    useEffect(() => {
        if (editMode && expenseData) {
            setName(expenseData.name);
            setAmount(expenseData.amount.toString());
            setPayee(expenseData.payee);
            setCategory(expenseData.category);
            setPaymentMethod(expenseData.paymentMethod);
            setStatus(expenseData.status);
            setRefCheque(expenseData.refCheque);
            setDescription(expenseData.description);
        }
    }, [editMode, expenseData]);

    return (
        <ScrollView className={`p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <View className={`bg-${isDarkMode ? 'gray-800' : 'white'} p-6 rounded-lg shadow-lg`}>
                <Text className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {editMode ? "Edit Expense" : "Add Expense"}
                </Text>
                <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Expense Name</Text>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    className={`border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} p-3 rounded mb-4`}
                    placeholder="Enter the expense name"
                    placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
                    style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                />
                <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Amount</Text>
                <TextInput
                    keyboardType="numeric"
                    onChangeText={(value) => setAmount(value.replace(/[^0-9]/g, ""))}
                    value={amount}
                    className={`border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} p-3 rounded mb-4`}
                    placeholder="Amount"
                    placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
                    style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                />
                <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Category
                </Text>
                <Picker
                    style={{
                        borderColor: isDarkMode ? '#555' : '#DDD',
                        borderWidth: 1,
                        borderRadius: 4,
                        marginBottom: 16,
                        backgroundColor: isDarkMode ? '#333' : '#FFF' // Background color for better contrast
                    }}
                    selectedValue={category}
                    onValueChange={setCategory}
                >
                    {categories.map((cat, index) => (
                        <Picker.Item
                            key={index}
                            label={cat}
                            value={cat}
                            style={{ color: isDarkMode ? 'text-gray-200' : '#000' }} // Text color inside Picker
                        />
                    ))}
                </Picker>

                <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Payee</Text>
                <TextInput
                    onChangeText={setPayee}
                    value={payee}
                    className={`border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} p-3 rounded mb-4`}
                    placeholder="Enter the payee name"
                    placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
                    style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                />
                <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>
                    Payment Method
                </Text>
                <Picker
                    style={{
                        borderColor: isDarkMode ? '#555' : '#DDD',
                        borderWidth: 1,
                        borderRadius: 4,
                        marginBottom: 16,
                        backgroundColor: isDarkMode ? '#333' : '#FFF' // Background color for better contrast
                    }}
                    selectedValue={paymentMethod}
                    onValueChange={setPaymentMethod}
                >
                    <Picker.Item
                        label="Credit Card"
                        value="Credit Card"
                        style={{ color: isDarkMode ? 'text-gray-200' : '#000' }} // Text color inside Picker
                    />
                    <Picker.Item
                        label="Cash"
                        value="Cash"
                        style={{ color: isDarkMode ? 'text-gray-200' : '#000' }} // Text color inside Picker
                    />
                    <Picker.Item
                        label="Bank Transfer"
                        value="Bank Transfer"
                        style={{ color: isDarkMode ? 'text-gray-200' : '#000' }} // Text color inside Picker
                    />
                </Picker>

                <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Status
                </Text>
                <Picker
                    style={{
                        borderColor: isDarkMode ? '#555' : '#DDD',
                        borderWidth: 1,
                        borderRadius: 4,
                        marginBottom: 16,
                        backgroundColor: isDarkMode ? '#333' : '#FFF' // Background color for better contrast
                    }}
                    selectedValue={status}
                    onValueChange={setStatus}
                >
                    <Picker.Item
                        label="Cleared"
                        value="Cleared"
                        style={{ color: isDarkMode ? 'text-gray-200' : '#000' }} // Text color inside Picker
                    />
                    <Picker.Item
                        label="Uncleared"
                        value="Uncleared"
                        style={{ color: isDarkMode ? '#text-gray-200' : '#000' }} // Text color inside Picker
                    />
                </Picker>

                <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ref/Cheque</Text>
                <TextInput
                    onChangeText={setRefCheque}
                    value={refCheque}
                    className={`border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} p-3 rounded mb-4`}
                    placeholder="Enter reference or cheque number"
                    placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
                    style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                />
                <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description</Text>
                <TextInput
                    onChangeText={setDescription}
                    value={description}
                    className={`border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} p-3 rounded mb-6`}
                    placeholder="Enter a description"
                    placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
                    style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                />
                <View className="flex-row justify-between">
                    <Button
                        onPress={() => {
                            let amountNumber = parseInt(amount, 10);
                            if (amountNumber <= 0 || name === "") {
                                alert("Please enter a valid amount and name");
                                return;
                            }

                            if (editMode) {
                                let updatedExpenses = expenses.map((exp) =>
                                    exp.id === expenseData.id
                                        ? {
                                              ...exp,
                                              name,
                                              amount: amountNumber,
                                              payee,
                                              category,
                                              paymentMethod,
                                              status,
                                              refCheque,
                                              description,
                                          }
                                        : exp
                                );

                                setExpenses(updatedExpenses);

                                let newChartData = [...chartData];
                                let index = newChartData.findIndex(
                                    (item) => item.name === category
                                );
                                if (index !== -1) {
                                    newChartData[index].amount += amountNumber - expenseData.amount;
                                    setChartData(newChartData);
                                }
                            } else {
                                setExpenses([
                                    ...expenses,
                                    {
                                        id: new Date().getTime(),
                                        category,
                                        name,
                                        amount: amountNumber,
                                        payee,
                                        paymentMethod,
                                        status,
                                        refCheque,
                                        description,
                                    },
                                ]);

                                let newChartData = [...chartData];
                                let index = newChartData.findIndex(
                                    (item) => item.name === category
                                );
                                if (index !== -1) {
                                    newChartData[index].amount += amountNumber;
                                    setChartData(newChartData);
                                }
                            }

                            setName("");
                            setAmount("");
                            setCategory("Food");
                            setPayee("");
                            setPaymentMethod("Credit Card");
                            setStatus("Cleared");
                            setRefCheque("");
                            setDescription("");
                            navigation.goBack();
                        }}
                        color={isDarkMode ? "#007BFF" : "#0033A0"}
                        title={editMode ? "Save Changes" : "Add Expense"}
                    />
                    <Button
                        onPress={() => navigation.goBack()}
                        color="#FF4D4D"
                        title="Cancel"
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Addform;
