/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Swiper from 'react-native-swiper';

const App: () => React$Node = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        {/* <View style={styles.HeaderIconsContainer}>
          <TouchableOpacity style={styles.Circle}>
            <AntDesign name="arrowleft" size={20} color="#000" />
          </TouchableOpacity >
          <TouchableOpacity style={styles.Circle}>
            <MaterialCommunityIcons name="dots-horizontal" size={20} color="#000" />
          </TouchableOpacity>
        </View> */}

        <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>


          <TouchableOpacity style={
            {
              position: 'absolute',
              bottom: 40,
              left: 20,
            }
          }>
            <AntDesign name="arrowleft" size={20} color="#fff" />
          </TouchableOpacity >

          <Swiper dotColor='#f9dac6' activeDotColor='#fff' style={styles.wrapper} height={550}>
            <ImageBackground imageStyle={{ flex: 1, width: undefined, height: undefined }} source={{ uri: 'https://placeimg.com/640/640/nature' }} style={styles.slide}>

              <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 30 }}>
                <TouchableOpacity style={[styles.Circle, { alignSelf: 'flex-end' }]}>
                  <AntDesign name="hearto" size={20} color="#000" />
                </TouchableOpacity>
                <View style={styles.HeaderBottom}>
                  <TouchableOpacity style={styles.Circle}>
                    <Image
                      style={{ width: 38, height: 38, borderRadius: 50 }}
                      source={require('./profile.jpg')}
                    />
                  </TouchableOpacity >
                  <TouchableOpacity style={[styles.Circle, { backgroundColor: '#fcdb4e' }]}>
                    <AntDesign name="like2" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>


            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>

          <View style={styles.body}>
            <View style={styles.Line} />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Eye Shadow Mabelline color peach and pink and green</Text>
              <View style={styles.sectionDescription}>
                <Text style={styles.PriceText}>$66/ each</Text>
                <Text style={styles.DiscountText}>50%</Text>
              </View>
              <Text style={styles.FullPrices}>Full price : $1227/ each</Text>
              <Text style={styles.YellowText}>This product</Text>
              <View style={styles.LocationContainer}>
                <Text style={styles.City}><Icon name="location-pin" size={28} color="#fcdb4e" />Alberta</Text>
                <Text style={styles.MileText}>2.5 Miles</Text>
              </View>
            </View>

            <View style={styles.FotterContainer}>
              <Text style={styles.FotterText}>Still available?</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                  <AntDesign name="checkcircle" size={30} color="#83dca1" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign style={{ marginLeft: 12 }} name="closecircle" size={30} color="#f83354" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.HeaderIconsContainer}> */}
        <TouchableOpacity style={styles.BackButton}>
          <View style={styles.Circle}>
            <AntDesign name="arrowleft" size={20} color="#000" />
          </View>
        </TouchableOpacity >
        <TouchableOpacity style={styles.Menu}>
          <View style={styles.Circle}>
            <MaterialCommunityIcons name="dots-horizontal" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        {/* </View> */}

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -23
  },
  sectionContainer: {
    marginVertical: 15,
    paddingHorizontal: 24,
  },
  Line: {
    borderTopWidth: 3,
    marginTop: 10,
    width: 60,
    alignSelf: 'center',
    borderColor: '#e8e8e8'
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4e5766',
  },
  City: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4e5766',
    marginLeft: -6
  },
  PriceText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#a1e4b9'
  },
  DiscountText: {
    fontWeight: '700',
    fontSize: 26,
    color: '#795eff'
  },
  FullPrices: {
    fontWeight: '700',
    fontSize: 15,
    color: '#e8e8e8'
  },
  YellowText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fcdb4e',
    marginVertical: 10
  },
  sectionDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  HeaderBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 30,
    marginTop: 15,
    // marginBottom:30
  },
  LocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  MileText: {
    color: '#4e5766',
    fontWeight: '700',
  },
  highlight: {
    fontWeight: '700',
  },
  FotterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 10
    paddingVertical: 25,
    backgroundColor: '#fff3cd',
    paddingHorizontal: 24
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  FotterText: {
    color: '#4e5766',
    fontSize: 30,
    fontWeight: '600'
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    padding: 24,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  Circle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  BackButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    left: 20,
  },
  Menu: {
    position: 'absolute',
    right:20,
    top:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
