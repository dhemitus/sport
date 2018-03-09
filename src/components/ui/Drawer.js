'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	ToastAndroid
} from 'react-native'
import PropTypes from 'prop-types'

export default class Drawer extends Component {

	constructor(props) {
		super(props)
		this.myField = this.myField.bind(this)
		this.myDetField = this.myDetField.bind(this)
		this.myOthField = this.myOthField.bind(this)
		this.mySectField = this.mySecField.bind(this)
		this.fieldList = this.fieldList.bind(this)
		this.detFieldList = this.detFieldList.bind(this)
		this.secFieldList = this.secFieldList.bind(this)
		this.splash = this.splash.bind(this)
		this.login = this.login.bind(this)
		this.register = this.register.bind(this)
		this.about = this.about.bind(this)
//		this.home = this.home.bind(this)
		this.edit = this.edit.bind(this)
		this.editGrp = this.editGrp.bind(this)
		this.searchGrp = this.searchGrp.bind(this)
		this.inviteGrp = this.inviteGrp.bind(this)
		this.fullGrp = this.fullGrp.bind(this)
		this.closedGrp = this.closedGrp.bind(this)
		this.profile = this.profile.bind(this)
		this.contact = this.contact.bind(this)
		this.chat = this.chat.bind(this)
		this.grpChat = this.grpChat.bind(this)
		this.setting = this.setting.bind(this)
	}

	toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		})
	}

	myField = () => {
		this.toggleDrawer()
		this.props.navigator.popToRoot({
			screen: 'weresport.Front'
		})
	}

	myOthField = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.MyField'
		})
	}

	myDetField = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.DetailField'
		})
	}

	mySecField = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.SearchField'
		})
	}

	fieldList = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.FieldList'
		})
	}

	detFieldList = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.DetailFieldList'
		})
	}

	secFieldList = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.SearchFieldList'
		})
	}

	login = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Login'
		})
	}
	profile = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Profile'
		})
	}

	splash = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Splash'
		})
	}

	register = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Register'
		})
	}

	about = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.About'
		})
	}
/*
	home = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Home'
		})
	}
*/
	edit = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Edit'
		})
	}

	editGrp = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.EditGroup'
		})
	}

	searchGrp = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.SearchGroup'
		})
	}

	inviteGrp = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.InviteGroup'
		})
	}

	fullGrp = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.FullGroup'
		})
	}

	closedGrp = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.ClosedGroup'
		})
	}

	contact = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Contact'
		})
	}

	chat = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Chat'
		})
	}

	grpChat = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.GroupChat'
		})
	}

	setting = () => {
		this.toggleDrawer()
		this.props.navigator.push({
			screen: 'weresport.Setting'
		})
	}
 
	render = () => {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.drawerListItem}>
						<Text style={styles.head}>
							Screen List
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.myField()}>
							Lapanganku
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.myDetField()}>
							Detail Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.myOthField()}>
							Detail Lapanganku
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.mySecField()}>
							Mencari Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.fieldList()}>
							Daftar Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.detFieldList()}>
							Detail Daftar Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.secFieldList()}>
							Cari Daftar Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.splash()}>
							Splash
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.login()}>
							Login
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.register()}>
							Register
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.about()}>
							About
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.profile()}>
							Profile
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.edit()}>
							Edit Profile
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.editGrp()}>
							Edit Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.searchGrp()}>
							Search Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.inviteGrp()}>
							Invite Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.fullGrp()}>
							Full Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.closedGrp()}>
							Closed Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.contact()}>
							Contact
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.chat()}>
							Private Chat
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.grpChat()}>
							Group Chat
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.setting()}>
							Setting
						</Text>
					</View>
				</ScrollView>
			</View>
		)
	}
}
/**
 					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.myDetField()}>
							Detail Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.myOthField()}>
							Detail Lapanganku
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.mySecField()}>
							Mencari Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.fieldList()}>
							Daftar Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.detFieldList()}>
							Detail Daftar Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.secFieldList()}>
							Cari Daftar Lapangan
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.splash()}>
							Splash
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.login()}>
							Login
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.register()}>
							Register
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.home()}>
							Home
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.about()}>
							About
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.profile()}>
							Profile
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.edit()}>
							Edit Profile
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.editGrp()}>
							Edit Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.searchGrp()}>
							Search Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.inviteGrp()}>
							Invite Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.fullGrp()}>
							Full Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.closedGrp()}>
							Closed Group
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.contact()}>
							Contact
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.chat()}>
							Private Chat
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.grpChat()}>
							Group Chat
						</Text>
					</View>
					<View style={styles.drawerListItem}>
						<Text style={styles.drawerListItemText} onPress={() => this.setting()}>
							Setting
						</Text>
					</View>
 */
Drawer.propTypes = {
	navigator: PropTypes.object
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 25,
		paddingRight: 50,
		backgroundColor: '#222222',
	},
	drawerListItem: {
		flexDirection: 'row',
		marginBottom: 10
	},
	head: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 50,
		marginBottom: 10,
	},
	drawerListItemText: {
		color: 'white',
		fontSize: 14,
		paddingLeft: 15,
		marginBottom: 5,
		flex: 1
	},
})