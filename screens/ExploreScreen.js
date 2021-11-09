import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, RefreshControl, ScrollView, Linking } from "react-native";
import { Button } from 'react-native-paper';

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }) => {
  const OnPress = () => {
    Linking.openURL('https://google.com')
  }

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexGrow: 1 }} />
      <View>
        <Button style={styles.Button} mode="text" onPress={(e) => { OnPress(e) }}>
          View
        </Button>
      </View>
    </View>
  );
};
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const ExploreScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#C0C0C0",
    padding: 20,
    //marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    fontSize: 32,
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 24
  },
  Button: {

  },
});

export default ExploreScreen;