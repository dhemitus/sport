'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, 
	Dimensions,
	ScrollView,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons'
//import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view'
//import TabNavigator from 'react-native-tab-navigator'
import About from './About'
import MyProfile from './MyProfile'
import Setting from './Setting'

const deviceW = Dimensions.get('window').width

const basePx = 375

const px2dp = (px) => {
	return px * deviceW / basePx
}


class Begin extends Component {

	componentDidMount = () => {
		console.log(this.props)
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
				selectedTitleStyle={{color: "#222222"}}
				renderIcon={() => <Icon name="ios-lock" size={px2dp(22)} color="#777777"/>}
				renderSelectedIcon={() => <Icon name="ios-lock" size={px2dp(22)} color="#222222"/>}
				onPress={() => this.setState({selectedTab: 'home'})}>
				<About />
			</TabNavigator.Item>
			<TabNavigator.Item
				selected={this.state.selectedTab === 'profile'}
				title="Teman"
				selectedTitleStyle={{color: "#222222"}}
				renderIcon={() => <Icon name="ios-pin" size={px2dp(22)} color="#777777"/>}
				renderSelectedIcon={() => <Icon name="ios-pin" size={px2dp(22)} color="#222222"/>}
				onPress={() => this.setState({selectedTab: 'profile'})}>
				<MyProfile />
			</TabNavigator.Item>
			<TabNavigator.Item
				selected={this.state.selectedTab === 'schedule'}
				title="Jadwal"
				selectedTitleStyle={{color: "#222222"}}
				renderIcon={() => <Icon name="ios-pin" size={px2dp(22)} color="#777777"/>}
				renderSelectedIcon={() => <Icon name="ios-pin" size={px2dp(22)} color="#222222"/>}
				onPress={() => this.setState({selectedTab: 'schedule'})}>
				<MyProfile />
			</TabNavigator.Item>
			<TabNavigator.Item
				selected={this.state.selectedTab === 'groups'}
				title="Grupku"
				selectedTitleStyle={{color: "#222222"}}
				renderIcon={() => <Icon name="ios-pin" size={px2dp(22)} color="#777777"/>}
				renderSelectedIcon={() => <Icon name="ios-pin" size={px2dp(22)} color="#222222"/>}
				onPress={() => this.setState({selectedTab: 'groups'})}>
				<MyProfile />
			</TabNavigator.Item>
			<TabNavigator.Item
				selected={this.state.selectedTab === 'setting'}
				title="Lainnya"
				selectedTitleStyle={{color: "#222222"}}
				renderIcon={() => <Icon name="ios-pin" size={px2dp(22)} color="#777777"/>}
				renderSelectedIcon={() => <Icon name="ios-pin" size={px2dp(22)} color="#222222"/>}
				onPress={() => this.setState({selectedTab: 'setting'})}>
				<Setting />
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
	    backgroundColor: 'black',
	},
})