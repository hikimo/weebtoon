import React, { Component } from "react"
import { ActivityIndicator, View, Image, Text, TouchableOpacity, Dimensions, Share } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Fa from "react-native-vector-icons/FontAwesome5"
import { connect } from "react-redux"

import styles from "../assets/styles/chapterScreenStyle"
import colors from "../assets/colors"
import { getDetail, resetDetailChapter } from "../_actions/detail"

const width = Dimensions.get("window").width

class ChapterScreen extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("chapter", "0"),
    
    headerRight: (
      <TouchableOpacity onPress={() => Share.share({message: "Let's checkout this cool manga on WeebToon!", title: "https://hikimo.github.io"})}>
        <Fa name="share-alt" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })

  renderChapter = ({itm}) => {
    return(
        <Image 
          key={itm.item.id}
          source={{uri: itm.item.img}} 
          style={{ width: width, height: Dimensions.get("window").height - 70 }}
          resizeMode="cover"
        />      
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.props.detail.isLoading === true ? (
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size="large" color={colors.prime} />
          </View>
        ) : (
          <FlatList 
            data={this.props.detail.data}
            contentContainerStyle={styles.listContainer}
            renderItem={itm => this.renderChapter({itm})}
            keyExtractor={itm => itm.id}
          />
        )}
      </View>
    )
  }

  async componentDidMount() {
    await this.getChapterDetail()
  }

  async componentWillUnmount() {
    await this.props.dispatch(resetDetailChapter())
  }

  async getChapterDetail() {
    try{
      this.props.dispatch(getDetail(this.props.navigation.getParam('mangaId', '1'), this.props.navigation.getParam('chapterId', '1')))
    }catch(err) {
      console.log(err)
    }
  }
}

const mapStateToProps = state => ({
  detail: state.detail
})
export default connect(mapStateToProps)(ChapterScreen)