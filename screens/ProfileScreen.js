import React from "react";
import { ScrollView, StyleSheet, RefreshControl, SafeAreaView, View, Image, Text, } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const ProfileScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.ImageView}>
            <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?coding" }} />
            <Text style={styles.profileName}>
              Prem Biswas
            </Text>
            <Text style={styles.profileId}>
              PB9511@079
            </Text>
          </View>
          <Divider />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={styles.section}>
              <Text style={styles.Text}>Text component which follows styles from the theme.</Text>
              <Button style={styles.Button} mode="outlined" onPress={() => console.log('Pressed')}>
                Button
              </Button>
            </View>
            <View style={styles.section}>
              <Text style={styles.Text}>Text component which follows styles from the theme.</Text>
              <Button style={styles.Button} mode="outlined" onPress={() => console.log('Pressed')}>
                Button
              </Button>
            </View>
          </View>

          <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://source.unsplash.com/1600x900/?mobile' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={styles.section}>

            </View>
            <View style={styles.section}>

            </View>
          </View>

          <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://source.unsplash.com/1600x900/?coding' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={styles.section1}>

            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  profileName: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "Cochin"
  },
  profileId: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginTop: 3,
    marginBottom: 5,
    fontFamily: 'roboto'
  },
  ImageView: {
    alignItems: "center",
  },
  tinyLogo: {
    width: 110,
    height: 110,
    borderRadius: 50,
    marginTop: 30,
  },
  line: {
    backgroundColor: '#ADD8E6',
    width: 10
  },
  section: {
    width: 175,
    height: 175,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderWidth: 0.1,
    borderRadius: 3,
    elevation: 24,
  },
  Text: {
    color: 'red',
    margin: 10
  },
  Button: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50
  },
  section1: {
    width: 372,
    height: 100,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderWidth: 0.1,
    borderRadius: 5,
    elevation: 24,
  },
});

export default ProfileScreen;