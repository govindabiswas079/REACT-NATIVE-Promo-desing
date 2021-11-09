import React, { Component } from 'react'
import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export class CarouselScreen extends Component {
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

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width
    });
  };

  render() {
    return (
      <View onLayout={this.onLayout}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={230}
        />
      </View>
    )
  }
}

export default CarouselScreen;
