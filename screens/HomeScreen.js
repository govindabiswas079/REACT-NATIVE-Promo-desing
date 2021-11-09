import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, ImageBackground, RefreshControl, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CarouselScreen from './CarouselScreen';
import Slideshow from 'react-native-image-slider-show';
import { Avatar } from 'react-native-paper';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeScreen = ({ navigation }) => {
  const [number, setNumber] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const cardnum = number.replace(/-/g, "");
  console.log("card", cardnum);

  const handleChange = async (e) => {
    const re = /^[0-9\b]/;

    if (e.length === 4) {
      e += '-'
    } else if (e.length === 9) {
      e += '-'
    } else if (e.length === 14) {
      e += '-'
    } else if (e.length === 20) {
      return false;
    }
    if (e === '' || re.test(e)) {
      setNumber(e);
    }
  }

  const image = { uri: "https://d33wubrfki0l68.cloudfront.net/8d79b89491cf9ef958be1386776dc937d39266be/1a630/img/particle_background.jpg" };
  const theme = useTheme();
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
        <View style={styles.mainContainer}>
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.container}>
              <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
              <View style={styles.action}>
                <TextInput placeholder="Search..." style={styles.textInput} value={number} onChangeText={(val) => handleChange(val)} />
              </View>
            </View>
            <View>
              <CarouselScreen />
            </View>

            <View style={styles.avatarimgmainSection}>
              <View style={styles.productAlign}>
                <View style={styles.section1}>
                  <View style={styles.productAlign}>
                    <View style={styles.avatarImg}>
                      <Avatar.Image size={75} source={{ uri: "https://source.unsplash.com/1600x900/?mobile" }} />
                    </View>
                    <Text style={styles.avatarimgContent}>Mobile Phones</Text>
                  </View>
                  <View style={styles.productAlign}>
                    <View style={styles.avatarImg}>
                      <Avatar.Image size={75} source={{ uri: "https://source.unsplash.com/1600x900/?laptop" }} />
                    </View>
                    <Text style={styles.avatarimgContent}>LapTop's</Text>
                  </View>
                  <View style={styles.productAlign}>
                    <View style={styles.avatarImg}>
                      <Avatar.Image size={75} source={{ uri: "https://source.unsplash.com/1600x900/?harddrive" }} />
                    </View>
                    <Text style={styles.avatarimgContent}>Hard Drive</Text>
                  </View>
                </View>
                {/*  */}
                <View style={styles.productAlign}>
                  <View style={{ width: 375, backgroundColor: '#000000', height: 1, }} />
                  <Text></Text>
                </View>
                <View style={styles.section2}>
                  <View style={styles.productAlign}>
                    <View style={styles.avatarImg}>
                      <Avatar.Image size={75} source={{ uri: "https://source.unsplash.com/1600x900/?pendrive" }} />
                    </View>
                    <Text style={styles.avatarimgContent}>Pendrive</Text>
                  </View>
                  <View style={styles.productAlign}>
                    <View style={styles.avatarImg}>
                      <Avatar.Image size={75} source={{ uri: "https://www.pngfind.com/pngs/m/209-2092068_xiaomi-mi-led-tv-4a-32-inch-hd.png" }} />
                    </View>
                    <Text style={styles.avatarimgContent}>LED TV</Text>
                  </View>
                  <View style={styles.productAlign}>
                    <View style={styles.avatarImg}>
                      <Avatar.Image size={75} source={{ uri: "https://source.unsplash.com/1600x900/?computer" }} />
                    </View>
                    <Text style={styles.avatarimgContent}>Personal Computer</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.secondProduct}>
              <View style={styles.mainSection}>
                <View style={styles.section}>
                  <View style={styles.productAlign}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?menswear" }} />
                    <Text style={styles.avatarimgtext}>Mens</Text>
                  </View>
                </View>
                <View style={styles.section}>
                  <View style={styles.productAlign}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?womens" }} />
                    <Text style={styles.avatarimgtext}>Womens</Text>
                  </View>
                </View>
                <View style={styles.section}>
                  <View style={styles.productAlign}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?fashion" }} />
                    <Text style={styles.avatarimgtext}>Fashion</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.diwaliOferSection}>
              <Image style={styles.tinyLogo2} source={{ uri: 'https://thumbs.dreamstime.com/z/diwali-dhamaka-festival-sale-offer-logo-unit-handing-lamp-shine-celebration-231686361.jpg' }} />
            </View>

            <View style={styles.imgslider}>
              <Slideshow
                dataSource={[
                  { url: "https://bestdiwalioffer.in/wp-content/uploads/2020/04/Samsung-Mobile-Diwali-Offers-678x381.jpg" },
                  { url: "https://www.gizbot.com/img/600x90/img/2020/06/flipkart-big-saving-days-sale-on-apple-iphones-1592987591.jpg" },
                  { url: "https://www.tubekinews.com/wp-content/uploads/2020/11/Diwali-Offer-Led-TV.jpg" },
                  { url: "https://www.pikpng.com/pngl/b/89-891629_electronic-png-transparent-images-electrical-home-appliances-png.png" },
                  { url: "https://www.pinkblueindia.com/blog/wp-content/uploads/2020/09/diwali-kids-dress.jpg" },
                  { url: "https://getfreedeals.co.in/wp-content/uploads/2018/10/amazon-home-kitchen.jpg" },
                  { url: "https://www.gizbot.com/img/600x90/img/2020/06/flipkart-big-saving-days-sale-on-apple-iphones-1592987591.jpg" },
                  { url: "https://www.pinkblueindia.com/blog/wp-content/uploads/2020/09/diwali-kids-dress.jpg" },
                ]}
              />
            </View>

            <View style={styles.llxslider}>
              <View style={styles.mainSection}>
                <View style={styles.sectionmain}>
                  <View style={styles.imgdiv}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://5.imimg.com/data5/HV/DY/FS/ANDROID-91469642/product-jpeg-500x500.jpeg" }} />
                    <Text style={styles.avatarimgtext}>VIVO Mobiles</Text>
                  </View>
                </View>
                <View style={styles.sectionmain}>
                  <View style={styles.imgdiv}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://images-eu.ssl-images-amazon.com/images/I/41BnHjRP0ZS._SX300_SY300_QL70_FMwebp_.jpg" }} />
                    <Text style={styles.avatarimgtext}>OPPO Mobiles</Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainSection}>
                <View style={styles.sectionmain}>
                  <View style={styles.imgdiv}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?menswear" }} />
                    <Text style={styles.avatarimgtext}>Mens</Text>
                  </View>
                </View>
                <View style={styles.sectionmain}>
                  <View style={styles.imgdiv}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?womens" }} />
                    <Text style={styles.avatarimgtext}>Womens</Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainSection}>
                <View style={styles.sectionmain}>
                  <View style={styles.imgdiv}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?menswear" }} />
                    <Text style={styles.avatarimgtext}>Mens</Text>
                  </View>
                </View>
                <View style={styles.sectionmain}>
                  <View style={styles.imgdiv}>
                    <Image style={styles.tinyLogo} source={{ uri: "https://source.unsplash.com/1600x900/?womens" }} />
                    <Text style={styles.avatarimgtext}>Womens</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* <View style={{ alignItems: 'center' }}>
            <View style={{ height: 300, backgroundColor: '#000000', width: 1, }} />
            <View style={{ width: 375, backgroundColor: '#000000', height: 1, position: 'absolute', marginTop: 150 }} />
            <Text></Text>
          </View> */}
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 7,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#f2f2f2',
    paddingBottom: 5,
    borderRadius: 20
  },
  textInput: {
    paddingLeft: 15,
    fontSize: 15,
  },
  section1: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 25,
  },
  section2: {
    display: 'flex',
    flexDirection: 'row',
    //marginVertical: 1,
  },
  tinyLogo1: {
    width: 76,
    height: 76,
    borderRadius: 50,
  },
  section: {
    height: 140,
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 7,
    marginVertical: 12,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFF00'
  },
  tinyLogo: {
    width: 110,
    height: 110,
  },
  tinyLogo2: {
    width: 395,
    height: 140,
  },
  sectionmain: {
    width: 170,
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 7,
    marginVertical: 12,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFF00',
  },
  avatarImg: {
    flexDirection: 'column',
    elevation: 24,
    borderRadius: 50,
    marginHorizontal: 23,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    alignSelf: 'center',
  },
  avatarimgtext: {
    marginTop: 5,
    fontWeight: 'bold',
    color: 'blue',
  },
  imgdiv: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 15,
  },
  mainSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatarimgmainSection: {
    elevation: 8,
    marginVertical: 20,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    height: 300
  },
  avatarimgContent: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  imgslider: {
    marginVertical: 10
  },
  llxslider: {
    borderWidth: 3,
    marginVertical: 10,
    elevation: 12,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    alignItems: 'center'
  },
  diwaliOferSection: {
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    elevation: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  secondProduct: {
    borderWidth: 3,
    marginVertical: 10,
    elevation: 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    height: 170,
    alignItems: 'center'
  },
  productAlign: {
    alignItems: 'center',
  },
});
