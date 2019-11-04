import React, { Component } from "react"
import { ActivityIndicator, View, Image, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Share } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Fa from "react-native-vector-icons/FontAwesome5"
import moment from "moment"
import { connect } from "react-redux"

import styles from "../assets/styles/detailScreenStyle"
import colors from "../assets/colors"
import { getChapter, resetChapter } from "../_actions/chapter"

const width = Dimensions.get("window").width

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title", "No title"),
    headerRight: (
      <TouchableOpacity onPress={() => Share.share({message: "Let's checkout this cool manga on WeebToon!", title: "https://hikimo.github.io"})}>
        <Fa name="share-alt" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })

  renderChapter = ({itm}) => (
    <TouchableWithoutFeedback onPress={() => this.props.navigation.push("Chapter", {chapter: itm.item.title, chapterId: itm.item.chapter, mangaId: this.props.navigation.getParam('mangaId', '1')})}>
      <View key={itm.id} style={styles.listChapter}>
        <View style={styles.coverFrame}>
          <Image 
            source={{uri: itm.item.img}} 
            style={styles.listCover}
          />
        </View>
        <View style={styles.descBox}>
          <Text style={styles.chapText}>{itm.item.title}</Text>
          <Text style={styles.chapDate}>{moment(itm.item.createdAt).startOf('day').fromNow()}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bannerBox}>
          <Image 
            style={{width: width, height: 200}}
            source={{uri: this.props.navigation.getParam("img", "no-img")}}
          />
        </View>

        {this.props.chapter.isLoading === true ? (
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size="large" color={colors.prime} />
          </View>
        ) : (
          <FlatList 
            data={this.props.chapter.data}
            contentContainerStyle={styles.listContainer}
            renderItem={itm => this.renderChapter({itm})}
            keyExtractor={itm => itm.id}
          />
        )}
      </View>
    )
  }

  async componentDidMount() {
    await this.getChapter()
  }

  async componentWillUnmount() {
    await this.props.dispatch(resetChapter())
  }

  handleBackButton = () => {
    this.props.dispatch(resetChapter())
    this.props.navigation.popToTop()
  }

  async getChapter() {
    this.props.dispatch(getChapter(this.props.navigation.getParam('mangaId', '1')))
  }
}

const mapStateToProps = state => ({
  chapter: state.chapter
})
export default connect(mapStateToProps)(DetailScreen)