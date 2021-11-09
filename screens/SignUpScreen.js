import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ScrollView, StatusBar, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,

        isValidUser: true,
        isValidPassword: true,
        isValidconfirm_password: true
    });

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({ ...data, username: val, check_textInputChange: true, isValidUser: true });
        } else {
            setData({ ...data, username: val, check_textInputChange: false, isValidUser: false });
        };
    };

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({ ...data, password: val, isValidPassword: true });
        } else {
            setData({ ...data, password: val, isValidPassword: false });
        };
    };

    const handleConfirmPasswordChange = (val) => {
        // setData({ ...data, confirm_password: val });
        if (data.password !== data.confirm_password) {
            setData({ ...data, confirm_password: val, isValidconfirm_password: true });
        } else {
            setData({ ...data, confirm_password: val, isValidconfirm_password: false });
        };
    };

    const updateSecureTextEntry = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry });
    };

    const updateConfirmSecureTextEntry = () => {
        setData({ ...data, confirm_secureTextEntry: !data.confirm_secureTextEntry });
    };


    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({ ...data, isValidUser: true });
        } else {
            setData({ ...data, isValidUser: false });
        };
    };

    var userdata = JSON.stringify({
        user: {
            Username: data.username,
            Password: data.password,
            confirm_password: data.confirm_password
        }
    });



    var config = {
        method: 'post',
        url: 'https://webhook.site/0082f95d-8451-493c-8142-f58bfbb9691a',
        headers: {
            'Content-Type': 'application/json'
        },
        data: userdata
    };

    const signUpHandle = async () => {
        if (data.username !== "" || data.password !== "" || data.confirm_password !== "") {
            if (data.password == data.confirm_password) {
                await axios(config)
                    .then(function (response) {
                        console.log(response.config.data);
                        navigation.navigate('SignInScreen')
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                Alert.alert('Confirm Password and Password not same. Pleaswe same password')
            };
        } else {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
        };
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <ScrollView>
                    <Text style={styles.text_footer}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput placeholder="Your Username" style={styles.textInput} autoCapitalize="none" onChangeText={(val) => textInputChange(val)} onEndEditing={(e) => handleValidUser(e.nativeEvent.text)} />
                        {data.check_textInputChange ?
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            : null
                        }
                    </View>
                    {data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                        </Animatable.View>
                    }

                    <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather name="lock" color="#05375a" size={20} />
                        <TextInput placeholder="Your Password" secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handlePasswordChange(val)} />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ? <Feather name="eye-off" color="grey" size={20} /> : <Feather name="eye" color="grey" size={20} />}
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                        </Animatable.View>
                    }

                    <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather name="lock" color="#05375a" size={20} />
                        <TextInput placeholder="Confirm Your Password" secureTextEntry={data.confirm_secureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handleConfirmPasswordChange(val)} />
                        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Feather name="eye-off" color="grey" size={20} />
                                :
                                <Feather name="eye" color="grey" size={20} />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isValidconfirm_password ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Confirm Password and Password not same.</Text>
                        </Animatable.View>
                    }

                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn} onPress={() => { signUpHandle(data.username, data.password, data.confirm_password) }}>
                            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                                <Text style={[styles.textSign, { color: '#FFFFFF' }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 15 }]}>
                            <Text style={[styles.textSign, { color: '#009387' }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});
