import React, { useRef, useEffect } from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, ScrollView, RefreshControl, Image, Linking, Animated } from 'react-native';
import NavigationBar from 'react-native-navbar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const BookmarkScreen = ({ navigation }) => {
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
    title: 'Bookmarks',
  };

  const image = { uri: 'https://reactnative.dev/img/tiny_logo.png' };

  return (
    <>
      <View style={styles.container}>
        <NavigationBar style={styles.navigation} leftButton={leftButtonConfig} title={titleConfig} />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* <FadeInView > */}
          <View style={styles.iconSection}>
            <MaterialCommunityIcons name="bookmark" color="blue" size={50} />
            <Text style={styles.bookmarkText}>Book Marks</Text>
          </View>
        {/* </FadeInView> */}

        <View style={{}}>
          <View style={styles.section}>
            <View>
              <Image style={styles.image} source={image} alt="" />
            </View>
            <View style={styles.bookmarkSection2}>
              <Text style={styles.bookmarkMainText1}>@expo/snack-static/react-native-logo.png</Text>
              <View style={styles.bookmarkbutton}>
                <Button style={styles.bookmarkbuttonWidth} icon="link" mode="contained" onPress={() => Linking.openURL('https://reactnative.dev/img/tiny_logo.png')}>
                  Go To Link
                </Button>
              </View>
              <Text style={styles.bookmarkMainText2}>https://reactnative.dev/img/tiny_logo.png</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Image style={styles.image} source={image} alt="" />
            </View>
            <View style={styles.bookmarkSection2}>
              <Text style={styles.bookmarkMainText1}>@expo/snack-static/react-native-logo.png</Text>
              <View style={styles.bookmarkbutton}>
                <Button style={styles.bookmarkbuttonWidth} icon="link" mode="contained" onPress={() => Linking.openURL('https://reactnative.dev/img/tiny_logo.png')}>
                  Go To Link
                </Button>
              </View>
              <Text style={styles.bookmarkMainText2}>https://reactnative.dev/img/tiny_logo.png</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Image style={styles.image} source={image} alt="" />
            </View>
            <View style={styles.bookmarkSection2}>
              <Text style={styles.bookmarkMainText1}>@expo/snack-static/react-native-logo.png</Text>
              <View style={styles.bookmarkbutton}>
                <Button style={styles.bookmarkbuttonWidth} icon="link" mode="contained" onPress={() => Linking.openURL('https://reactnative.dev/img/tiny_logo.png')}>
                  Go To Link
                </Button>
              </View>
              <Text style={styles.bookmarkMainText2}>https://reactnative.dev/img/tiny_logo.png</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Image style={styles.image} source={image} alt="" />
            </View>
            <View style={styles.bookmarkSection2}>
              <Text style={styles.bookmarkMainText1}>@expo/snack-static/react-native-logo.png</Text>
              <View style={styles.bookmarkbutton}>
                <Button style={styles.bookmarkbuttonWidth} icon="link" mode="contained" onPress={() => Linking.openURL('https://reactnative.dev/img/tiny_logo.png')}>
                  Go To Link
                </Button>
              </View>
              <Text style={styles.bookmarkMainText2}>https://reactnative.dev/img/tiny_logo.png</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Image style={styles.image} source={image} alt="" />
            </View>
            <View style={styles.bookmarkSection2}>
              <Text style={styles.bookmarkMainText1}>@expo/snack-static/react-native-logo.png</Text>
              <View style={styles.bookmarkbutton}>
                <Button style={styles.bookmarkbuttonWidth} icon="link" mode="contained" onPress={() => Linking.openURL('https://reactnative.dev/img/tiny_logo.png')}>
                  Go To Link
                </Button>
              </View>
              <Text style={styles.bookmarkMainText2}>https://reactnative.dev/img/tiny_logo.png</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1
  },
  navigation: {
    backgroundColor: "#ADD8E6",
    height: 60,
  },
  iconSection: {
    alignItems: 'center',
    marginTop: 15
  },
  bookmarkText: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold'
  },
  bookmarkSection2: {
    flexDirection: 'column',
  },
  bookmarkMainText1: {
    flex: 1,
    margin: 5,
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  },
  bookmarkbutton: {
    flex: 1,
    marginLeft: 200,
  },
  bookmarkbuttonWidth: {
    width: 150,
  },
  bookmarkMainText2: {
    margin: 5,
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  },
  section: {
    width: 372,
    height: 175,
    backgroundColor: '#FFFFFF',
    margin: 10,
    //borderWidth: 0.1,
    borderRadius: 3,
    elevation: 6,
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 35,
    marginLeft: 10,
    position: 'absolute'
  },
});



const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}