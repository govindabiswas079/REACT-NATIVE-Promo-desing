import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, RefreshControl } from 'react-native';
import NavigationBar from 'react-native-navbar';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const SettingsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const leftButtonConfig = {
    title: '< Back',
    handler: () => navigation.navigate("Home"),
  };

  const titleConfig = {
    title: 'Settings',
  };
  const settingOption = [
    {
      option: 'WiFi'
    },
    {
      option: 'Bluetooth'
    },
    {
      option: 'security'
    },
    {
      option: 'personalized'
    },
    {
      option: 'User Account'
    },
    {
      option: 'Additional Setting'
    },
    {
      option: 'Google'
    },
    {
      option: 'About'
    },
    {
      option: 'System'
    },
    {
      option: 'WiFi'
    },
    {
      option: 'Bluetooth'
    },
    {
      option: 'security'
    },
    {
      option: 'personalized'
    },
    {
      option: 'User Account'
    },
    {
      option: 'Additional Setting'
    },
    {
      option: 'Google'
    },
    {
      option: 'About'
    },
    {
      option: 'System'
    },
  ]

  return (
    <>
      <View style={styles.container}>
        <NavigationBar
          style={styles.navigation}
          leftButton={leftButtonConfig}
          title={titleConfig}
        />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {settingOption.map((opp, index) => (
          <View key={index} style={styles.item}>
            <View>
              <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?coding" }} />
            </View>
            <View>
              <Text style={styles.title}>{opp.option}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#FFFFFF"
  },
  navigation: {
    backgroundColor: "#ADD8E6", 
    height: 60,
  },
  item: {
    backgroundColor: '#FFFFFF',
    //height: 70,
    //justifyContent: 'center',
    //margin: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    elevation: 4
  },
  title: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10
  },
  tinyLogo: {
    width: 50,
    height: 43,
    margin: 3,
    borderRadius: 10,
  },
});