import React, { Component } from 'react'
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export class ImgSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://bestdiwalioffer.in/wp-content/uploads/2020/04/Samsung-Mobile-Diwali-Offers-678x381.jpg",
        "https://www.gizbot.com/img/600x90/img/2020/06/flipkart-big-saving-days-sale-on-apple-iphones-1592987591.jpg",
        "https://www.tubekinews.com/wp-content/uploads/2020/11/Diwali-Offer-Led-TV.jpg",
        "https://www.pikpng.com/pngl/b/89-891629_electronic-png-transparent-images-electrical-home-appliances-png.png",
        "https://www.pinkblueindia.com/blog/wp-content/uploads/2020/09/diwali-kids-dress.jpg",
        "https://getfreedeals.co.in/wp-content/uploads/2018/10/amazon-home-kitchen.jpg",
        "https://www.gizbot.com/img/600x90/img/2020/06/flipkart-big-saving-days-sale-on-apple-iphones-1592987591.jpg",
        "https://www.pinkblueindia.com/blog/wp-content/uploads/2020/09/diwali-kids-dress.jpg",
      ]
    };
  };
  render() {
    return (
      <View>
        <Carousel
          data={[
            "https://bestdiwalioffer.in/wp-content/uploads/2020/04/Samsung-Mobile-Diwali-Offers-678x381.jpg",
            "https://www.gizbot.com/img/600x90/img/2020/06/flipkart-big-saving-days-sale-on-apple-iphones-1592987591.jpg",
            "https://www.tubekinews.com/wp-content/uploads/2020/11/Diwali-Offer-Led-TV.jpg",
            "https://www.pikpng.com/pngl/b/89-891629_electronic-png-transparent-images-electrical-home-appliances-png.png",
          ]}
          sliderWidth={100}
          itemWidth={100}
        />
      </View>
    )
  }
}

export default ImgSlider;
