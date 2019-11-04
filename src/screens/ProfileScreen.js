import React, { Component } from "react"
import { View, TouchableOpacity, TouchableWithoutFeedback, Image, Text } from "react-native"
import Fa5 from "react-native-vector-icons/FontAwesome5"
import Fa from "react-native-vector-icons/FontAwesome"
import styles from "../assets/styles/profileScreenStyles"
import colors from "../assets/colors"
import { connect } from "react-redux"

import { logout } from "../_actions/user"

class ProfileScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: colors.prime,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
        <Fa5 name="pencil-alt" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileTop}>
          <View style={styles.imgFrame}>
            {((this.props.user.isLogin === true) && (this.props.user.data.photo != '')) ? (
              <Image style={styles.imgProfile} resizeMode="cover" source={{uri: this.props.user.data.photo}} />
            ) : (
              <Image style={styles.imgProfile} resizeMode="cover" source={require('../assets/images/ava.jpeg')} />
            )}
          </View>
          <View>
            <Text style={styles.nameTitle}>
              {((this.props.user.isLogin === true) && (this.props.user.data.name != '')) ? 
              this.props.user.data.name : 'Your Name'}
            </Text>
            <View>
              {this.props.user.isLogin === false ? (
                <TouchableOpacity style={styles.actionBtn} onPress={() => this.props.navigation.navigate('Auth')}>
                  <Text style={styles.actionBtnText}>Login</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.actionBtn} onPress={this._handleLogout}>
                  <Text style={styles.actionBtnText}>Logout</Text>
                </TouchableOpacity>
              )} 
            </View>
          </View>
        </View>

        <View style={styles.actionBars}>
          <Text style={styles.actionTitle}>Settings</Text>
          <View style={styles.actionList}>
            <View style={styles.row}>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EditProfile')}>
                <View style={[styles.list, {marginLeft: 0}]}>
                  <Fa name="cogs" size={35} color={colors.prime} />
                  <Text style={styles.listText}>Profile</Text>
                </View>
              </TouchableWithoutFeedback>
              
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Favorite')}>
                <View style={styles.list}>
                  <Fa name="heart" size={35} color={colors.prime} />
                  <Text style={styles.listText}>My Favorites</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                <View style={[styles.list, {marginRight: 0}]}>
                  <Fa name="bell-o" size={35} color={colors.prime} />
                  <Text style={styles.listText}>Notification</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.row}>
              {this.props.user.isLogin === true && (
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("MyWeebtoon")}>
                  <View style={[styles.list, {marginLeft: 0, marginRight: 10}]}>
                    <Fa name="folder" size={35} color={colors.prime} />
                    <Text style={styles.listText}>My Weebtoon</Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
              <TouchableWithoutFeedback>
                <View style={[styles.list, {marginLeft: 0}]}>
                  <Fa name="info-circle" size={35} color={colors.prime} />
                  <Text style={styles.listText}>About</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }

  _handleLogout = () => {
    this.props.dispatch(logout())
    this.props.navigation.navigate('ForYou')
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(ProfileScreen)