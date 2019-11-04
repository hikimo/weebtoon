import React, { Component } from "react"
import { View, TouchableOpacity, TextInput, Image, Text } from "react-native"
import { connect } from "react-redux"
import ImagePicker from 'react-native-image-picker'
import Fa from "react-native-vector-icons/FontAwesome5"
import styles from "../assets/styles/profileScreenStyles"
import colors from "../assets/colors"
import { updateUser } from "../_actions/user"

class EditProfileScreen extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
    }
  }
  
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: colors.prime,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerLeft: null,
    headerRight: (
      <TouchableOpacity onPress={() => this._handleUpdate}>
        <Fa name="check" size={18} color={colors.white} />
      </TouchableOpacity>
    )
  })
  
  render() {
    return (
      <View style={styles.containerEdit}>
        <View style={styles.profileTopEdit}>
          <View>
            <TouchableOpacity style={styles.editBtn} onPress={this._onEditImage}>
              <Fa name="camera" size={22} color={colors.primeDarken} />
            </TouchableOpacity>
            <View style={styles.imgFrame}>
              <Image style={styles.imgProfile} resizeMode="cover" source={this.props.user.data.photo !== '' ? {uri: this.props.user.data.photo} : require('../assets/images/ava.jpeg')} />
            </View>
          </View>
        </View>

        <View style={styles.bottomCountainer}>
          <View style={styles.bulletPattern} />
          <View style={styles.bottomBulletPattern} />
          <View style={styles.formGroup}>
            <Text style={styles.formLable}>Name</Text>
            <View style={styles.fieldBox}>
              <TextInput
                placeholder="Your Name"
                style={styles.fieldInput}
                onChange={val => this.setState({name: val})}
                value={this.state.name}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.btnSave} onPress={this._handleUpdate}>
            <Text style={styles.btnSaveText}>Save Change</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDelete}>
            <Text style={styles.btnDeleteText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _handleUpdate = async () => {
    try{
      await axios.post(config.host.concat(`user/${this.props.user.id}`), {name: this.props.user.name, photo: this.props.user.photo}, {
        headers: { Authorization: "Bearer " + this.props.user.token }
      })
      .then((response) => {
        if (typeof response.data.token !== 'undefined'){
          if(response.data.error) {
            alert('Failed when update')
          } else {
            let name = ""
            if(this.state.name == "") {
              name = this.props.user.name
            } else {
              name = this.state.name
            }

            const responed = {
              token: this.props.user.token,
              data: {
                id: this.props.user.id,
                name: name,
                photo: this.props.user.photo,
              },
              isLogin: this.props.user.isLogin
            }
            this.props.dispatch(updateUser(responed))
            this.props.navigation.goBack()
          }
        }else{
          alert('Failed when update')
        }
      })
      .catch((error)=>{
        alert(error)
      })
    }
    catch (e){
      console.log(e)
    } finally {
      this.setState({isLoading: false})
    }
  }

  _onEditImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true
      },
    }

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = response.uri
    
        this.props.dispatch(updateUser(source))
      }
    })
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(EditProfileScreen)