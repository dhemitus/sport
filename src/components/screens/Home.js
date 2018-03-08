'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, 
	Dimensions,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons'

import About from './About'
import Front from './Front'

const deviceW = Dimensions.get('window').width

const basePx = 375

const px2dp = (px) => {
	return px * deviceW / basePx
}


class Begin extends Component {

	componentDidMount = () => {
		console.log('run')
//		this.props.navigator.setTitle({ title: 'BEGIN' })
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Home Front
        </Text>
			</View>
		)
	}
}

class Profile extends Component {

	componentDidMount = () => {
		console.log('run')
//		this.props.navigator.setTitle({ title: 'PROFILE' })
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Profile
		        </Text>
			</View>
		)
	}
}

export default class Home extends Component {
	state = {
		selectedTab: 'home'
	}

	render = () => {
		return (
			<TabNavigator style={styles.container}>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'home'}
					title="Home"
					selectedTitleStyle={{ color: "#3496f0" }}
					renderIcon={() => <Icon name="ios-home" size={px2dp(22)} color="#666" />}
					renderSelectedIcon={() => <Icon name="ios-home" size={px2dp(22)} color="#3496f0" />}
					badgeText="1"
					onPress={() => this.setState({ selectedTab: 'home' })}>
					<Front />
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'profile'}
					title="Profile"
					selectedTitleStyle={{ color: "#3496f0" }}
					renderIcon={() => <Icon name="ios-person" size={px2dp(22)} color="#666" />}
					renderSelectedIcon={() => <Icon name="ios-person" size={px2dp(22)} color="#3496f0" />}
					onPress={() => this.setState({ selectedTab: 'profile' })}>
					<Profile />
				</TabNavigator.Item>
			</TabNavigator>
		)
	}
}

Home.navigatorStyle = {
	statusBarColor: '#222222',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: '#777777',
	navBarButtonColor: '#777777',
	navBarTitleTextCentered: true,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
})