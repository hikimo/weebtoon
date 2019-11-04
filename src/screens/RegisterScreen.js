import React, { Component } from "react"
import { ActivityIndicator, View, Text, Image, TextInput, TouchableOpacity, StatusBar } from "react-native"
import Fa from "react-native-vector-icons/FontAwesome5"
import colors from "../assets/colors"
import styles from "../assets/styles/loginScreenStyle"
import { connect } from "react-redux"
import axios from "axios"
import AsyncStorage from "@react-native-community/async-storage"
import config from "../configs/config"

import { getUser } from "../_actions/user"

class RegisterScreen extends Component {
  constructor() {
    super()
    this.state = {
      iMail: "",
      iPass: "",
      iName: "",
      isEmail: {
        status: false,
        err: ""
      },
      isPass: {
        status: false,
        err: ""
      },
      showPassword: false,
      btnDisabled: true,
      isLoading: false
    }
  }
  
  render() {
    const { isEmail, isPass, showPassword, isLoading } = this.state
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.prime} barStyle="light-content" />

        <View style={styles.title}>
          <Image 
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          />
          <Text style={styles.titleSub}>Be weebtoon family by registering</Text>
        </View>

        <View style={styles.loginCard}>

          <View style={styles.form}>
          <View style={styles.formGroup}>
              <View style={styles.inputBox}>
                <Fa name="user" style={styles.icon} size={22} color={isEmail.status ? colors.white : colors.black} /> 
                <TextInput 
                  style={styles.input} 
                  onChangeText={val => this.setState({iName: val})}
                  editable={!this.state.isLoading}
                  placeholder="Your name.."
                  placeholderTextColor={colors.gray} 
                  autoCapitalize="none"
                />
              </View>
              { 
                isEmail.status && (
                  <Text style={styles.errText}>{isEmail.err}</Text>
                ) 
              }
            </View>

            <View style={styles.formGroup}>
              <View style={[styles.inputBox, isEmail.status && styles.inputBoxErr]}>
                <Fa name="envelope" style={styles.icon} size={22} color={isEmail.status ? colors.white : colors.black} /> 
                <TextInput 
                  style={[styles.input, isEmail.status && styles.inputErr]} 
                  onChangeText={val => this._validateEmail(val)}
                  editable={!this.state.isLoading}
                  placeholder="Your mail.."
                  placeholderTextColor={isEmail.status ? colors.white : colors.gray} 
                  autoCapitalize="none"
                  value={this.state.iMail}
                />
              </View>
              { 
                isEmail.status && (
                  <Text style={styles.errText}>{isEmail.err}</Text>
                ) 
              }
            </View>

            <View style={styles.formGroup}>
              <View style={[styles.inputBox, isPass.status && styles.inputBoxErr]}>
                <Fa name="lock" style={styles.icon} size={22} color={isPass.status ? colors.white : colors.black} /> 
                <TextInput 
                  style={[styles.input, isPass.status && styles.inputErr]} 
                  placeholder="Your Password.."
                  editable={!this.state.isLoading}
                  placeholderTextColor={isPass.status ? colors.white : colors.gray} 
                  autoCapitalize="none"
                  onChangeText={val => this._validatePass(val)}
                  secureTextEntry={!showPassword}
                  value={this.state.iPass}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={this._showPassword} disabled={this.state.isLoading}>
                  <Fa name={ showPassword ? "eye-slash" : "eye"} size={22} style={styles.eyeBtn} color={isPass.status ? colors.white : colors.black} />
                </TouchableOpacity>
              </View>
              { 
                isPass.status && (
                  <Text style={styles.errText}>{isPass.err}</Text>
                  ) 
                }
            </View>
          </View>

          {isLoading ? (
            <ActivityIndicator
              size={32}
              color={colors.prime}
            />
          ) : (
            <TouchableOpacity 
              style={[styles.loginBtn, this.state.btnDisabled  && (styles.loginBtnDisabled)]} 
              onPress={this._handleRegister} 
              disabled={this.state.btnDisabled}
            >
              <Text style={styles.loginBtnText}>Register</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
    
  }

  _handleRegister = async () => {
    const { iName, iMail, iPass } = this.state

    this.setState({isLoading: true})

    try{
      await axios.post(config.host.concat('register'), {name: iName, email: iMail, password: iPass})
      .then((response) => {
        if (typeof response.data.token !== 'undefined'){
          if(response.data.error) {
            alert('Email already taken')
          } else {
            this.props.dispatch(getUser(response.data))
            this.props.navigation.navigate('ForYou')
          }
        }else{
          alert('Email already taken')
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

  _showPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  setItem = async () => {
    await AsyncStorage.setItem('userToken', this.state.token)
    await AsyncStorage.setItem('userID',JSON.stringify(this.state.userID))
  }

  _validateEmail = val => {
    let validateMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.setState({iMail: val})
    
    if(!validateMail.test(String(val).toLowerCase())) {
      this.setState({
        btnDisabled: true
      })
    } else {
      this.setState({
        isEmail: {
          status: false,
          err: ""
        },
        btnDisabled: false
      })
    }
  }

  _validatePass = val => {
    this.setState({iPass: val})

    if(val == "") {
      this.setState({
        isPass: {
          status: true,
          err: "Password is required"
        }
      })
    } else {
      this.setState({
        isPass: {
          status: false,
          err: ""
        }
      })
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(RegisterScreen)