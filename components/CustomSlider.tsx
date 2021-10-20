import React from 'react'
import { View, Text, Dimensions, StyleSheet, FlatListProps } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselItem from './Carousel';

const { width } = Dimensions.get('window');
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CustomSlider = ({ data }) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  // console.log(data);
  //  const settings = {
  //    sliderWidth: width,
  //    sliderHeight: width,
  //    itemWidth: width - 80,
  //    data: data,
  //    renderItem: CarouselItem,
  //    hasParallaxImages: true,
  //  };

   const renderPagination = () => (
     // render carousel pagination
     <Pagination
       dotsLength={data.length}
       activeDotIndex={index}
       dotStyle={styles.dotStyle}
       dotContainerStyle={styles.dotContainer}
       inactiveDotOpacity={0.4}
       inactiveDotScale={0.6}
     />
   );
  return (
    <View style={styles.container}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        
      />
      {/* {renderPagination()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  
  dotContainer: {
    backgroundColor: 'rgb(230,0,0)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: 'rgb(255,230,230)',
  },
});

export default CustomSlider
