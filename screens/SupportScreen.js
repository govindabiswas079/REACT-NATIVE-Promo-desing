import React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import NavigationBar from 'react-native-navbar';

const SupportScreen = ({ navigation }) => {
  const leftButtonConfig = {
    title: '< Back',
    handler: () => navigation.navigate("Home"),
  };

  const titleConfig = {
    title: 'Support',
  };
  return (
    <View style={styles.container}>
      <NavigationBar style={{ backgroundColor: "#ADD8E6", height: 60, }} leftButton={leftButtonConfig} title={titleConfig} />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
