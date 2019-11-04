import React, { Component } from "react"
import { ActivityIndicator, View, TextInput, TouchableWithoutFeedback, Image, Text, FlatList, TouchableOpacity } from "react-native"
import Fa from "react-native-vector-icons/FontAwesome5"
import { connect } from "react-redux"
import { getFavorite } from "../_actions/favorite";

import colors from "../assets/colors"
import styles from "../assets/styles/favouriteScreenStyle"

class FavouriteScreen extends Component {
  componentDidMount() {
    this.getFavorites()
  }

  renderFav = ({itm}) => (
    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Detail", {title: itm.item.name, img: itm.item.banner, mangaId: itm.item.id})}>
      <View key={itm.id} style={styles.listChapter}>
        <View style={styles.coverFrame}>
          <Image 
            source={{uri: itm.item.cover}} 
            style={styles.listCover}
            resizeMode="cover"
          />
        </View>
        <View style={styles.descBox}>
          <Text style={styles.favTitle}>
          {(itm.item.name).length > 25 ? (((itm.item.name).substring(0,25-3)) + '...') : itm.item.name}
          </Text>
          <Text style={styles.favCount}>{itm.item.favorites} Favourite(s)</Text>
          <TouchableOpacity style={styles.btnUnfav}>
            <Fa name="heart-broken" size={18} color={colors.white} />
            <Text style={styles.btnUnfavText}>Unfavorite</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBox}>
            <TextInput style={styles.searchInput} placeholder="Search" />  
            <TouchableOpacity>
              <Fa name="search" size={22} color={colors.gray}  />
            </TouchableOpacity>
          </View>
        </View>

        {this.props.user.isLogin === false ? (
            <View style={styles.noLogin}>
              <Image source={require('../assets/images/sad_satania.png')} resizeMode="contain" style={styles.noLoginImg} />
              <Text style={styles.noLoginText}>Login to see your list(s) of favorite manga</Text>
            </View>
          ) : (this.props.favorite.isLoading === true ? 
          (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <ActivityIndicator size="large" color={colors.prime} />
            </View>
          ) : 
          (this.props.favorite.data.length > 0) ? 
          (
            <FlatList 
              data={this.props.favorite.data}
              contentContainerStyle={styles.listContainer}
              renderItem={itm => this.renderFav({itm})}
              keyExtractor={itm => itm.id}
            />
          ) : (
            <View style={styles.noLogin}>
              <Image source={require('../assets/images/box_satania.jpg')} resizeMode="contain" style={styles.noLoginImg} />
              <Text style={styles.noLoginText}>Oh wee, there's no favorited manga</Text>
            </View>
          )
        )}
      </View>
    )
  }

  getFavorites = async () => {
    if(this.props.user.isLogin) {
      try {
        await this.props.dispatch(getFavorite())      
      } catch (error) {
        console.log(error)
      }
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
  favorite: state.favorite
})

export default connect(mapStateToProps)(FavouriteScreen)