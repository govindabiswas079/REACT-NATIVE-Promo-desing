import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, RefreshControl, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

const DATA = [];

const getItem = () => ({
  id: Math.random().toString(12).substring(0),
  title: `https://reactjs.org/logo-og.png`
});

const getItemCount = () => 50;

const Item = () => {
  const OnPress = () => {
    Linking.openURL('https://google.com')
  };

  return (
    <View style={styles.item}>
      <View>
        <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?coding" }} />
      </View>
      <View>
        <TouchableOpacity onPress={(e) => { OnPress(e) }}>
          <Text style={styles.title}>https://reactjs.org/logo-og.png</Text>
          <Text style={styles.title1}>https://reactjs.org/logo-og.png</Text>
          <Text style={styles.title2}>{new Date().toLocaleString()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const DetailsScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const cdate = new Date();

  function taskDate(dateMilli) {
    var d = (new Date(dateMilli) + '').split(' ');
    d[2] = d[2] + ',';
    return [d[0], d[1], d[2], d[3]].join(' ');
  };

  var datemilli = Date.parse(cdate);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.day}>Today</Text>
        <Text style={styles.dateTimeDay}>{taskDate(datemilli)}</Text>
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Item title={item.title} />}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  day: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 3,
    marginLeft: 5
  },
  dateTimeDay: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 3,
    marginLeft: 5,
    marginBottom: 5,
    fontStyle: 'italic',
    color: "grey"
  },
  item: {
    backgroundColor: '#FFFFFF',
    //height: 70,
    //justifyContent: 'center',
    //margin: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    marginLeft: 20,
  },
  title1: {
    fontSize: 18,
    marginLeft: 20,
    color: '#C0C0C0',
  },
  title2: {
    fontSize: 15,
    marginLeft: 20,
    color: 'blue'
  },
  tinyLogo: {
    width: 70,
    height: 63,
    margin: 3,
    borderRadius: 10,
  },
});

export default DetailsScreen;