import React, { Component } from "react"
import Carousel from "react-native-banner-carousel"
import { ScrollView, Image, View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput, Dimensions, StatusBar, ActivityIndicator } from "react-native"
import axios from "axios"
import { connect } from "react-redux"
import An from "react-native-vector-icons/AntDesign"
import Fa from "react-native-vector-icons/FontAwesome"
import colors from "../assets/colors"
import styles from "../assets/styles/forYouScreeStyle"

import { getManga } from "../_actions/manga"

import config from "../configs/config" 

const bannerWidth = Dimensions.get("window").width
const bannerHeight = 250

class ForYouScreen extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getManga()
  }
  
  renderBanner = (item) => {
    if(item.is_hot) {
      return (
        <TouchableWithoutFeedback key={item.id} onPress={() => this.props.navigation.push("Detail", {title: item.name, img: item.banner, mangaId: item.id})}>
          <View style={styles.caroselItem}>
            <Image style={{ height: bannerHeight }} resizeMode="cover" source={{uri: item.banner}} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }
    
  render() {
    if(this.props.manga.isLoading) {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <StatusBar backgroundColor={colors.prime} barStyle="light-content" />
          <ActivityIndicator size={30} color={colors.prime} />
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <StatusBar backgroundColor={colors.prime} barStyle="light-content" />
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <TouchableOpacity style={{ zIndex: 999, position: 'absolute', top: 20, right: 15}}>
              <An name="search1" size={25} color={colors.white} style={{textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: 0, height: 1},
  textShadowRadius: 4}} />
            </TouchableOpacity>
            <Carousel
              autoplay
              autoplayTimeout={3500}
              loop
              index={0}
              pageSize={bannerWidth}
            >
              {this.props.manga.data.map((item, index) => this.renderBanner(item, index))}
            </Carousel>
  
            <View style={styles.favBox}>
              <Text style={[styles.boxTitle, {marginLeft: 10}]}>Most Popular</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.favContent}
              >
                {this.props.manga.data.map((item, index) => item.is_favorite && (
                  <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate("Detail", {img: item.banner, title: item.name, mangaId: item.id})} >
                    <View style={[styles.favList, (index == 0 && {marginLeft: 10}), (index == 4 && {marginRight: 10})]}>
                      <Image style={styles.favImg} resizeMode="cover" source={{uri: item.cover}} />
                      <View style={styles.favDesc}>
                        <Text style={styles.favTitle}>
                          {(item.name).length > 13 ? (((item.name).substring(0,13-3)) + '...') : item.name}
                        </Text>
                        <View style={styles.favLoved}>
                          <Fa name="heart" size={14} color={colors.prime} />
                          <Text style={styles.favCount}>{item.favorites}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
  
            <View style={styles.allContentBox}>
              <Text style={styles.boxTitle}>All</Text>
              {this.props.manga.data.map((item, index) => (
                <View key={index} style={styles.contentList}>
                  <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Detail", {img: item.banner, title: item.name, mangaId: item.id})}>
                    <Image style={styles.contentImg} source={{uri: item.cover}} />
                  </TouchableWithoutFeedback>
                  <View style={styles.contentDesc}>
                    <Text style={[styles.contentTitle, ]}>{(item.name).length > 18 ? (((item.name).substring(0,18-3)) + '...') : item.name}</Text>
                    <Text style={[styles.contentSub]}>
                      {(item.desc).length > 88 ? (((item.desc).substring(0,88-3)) + '...') : item.desc}
                    </Text>
                    <TouchableOpacity style={styles.contentBtn}>
                      <Fa name="heart-o" size={16} color={colors.white} />
                      <Text style={styles.contentBtnText}>Favorite</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
  
          </ScrollView>
        </View>
      )
    }
  }

  async getManga() {
    try{
      await this.props.dispatch(getManga())
    }catch(err) {
      console.log(err)
    }
  }
}

const mapStateToProps = (state) => ({
  manga: state.manga
})

export default connect(mapStateToProps)(ForYouScreen)