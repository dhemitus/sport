'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	FlatList,
	ToastAndroid
} from 'react-native'
import PropTypes from 'prop-types'

const link = [
	{
		desc: 'Splash',
		path: 'weresport.Splash',
	},
	{
		desc: 'Login',
		path: 'weresport.Login',
	},
	{
		desc: 'Register',
		path: 'weresport.Register',
	},
	{
		desc: 'Profile',
		path: 'weresport.Profile',
	},
	{
		desc: 'Pilih Olahraga',
		path: 'weresport.ChooseSport',
	},
	{
		desc: 'Profile Ku',
		path: 'weresport.MyProfile',
	},
	{
		desc: 'Edit Profile',
		path: 'weresport.Edit',
	},
	{
		desc: 'About',
		path: 'weresport.About',
	},
/*	{
		desc: 'Home',
		path: 'weresport.Home',
	},*/
	{
		desc: 'Contact',
		path: 'weresport.Contact',
	},
	{
		desc: 'Setting',
		path: 'weresport.Setting',
	},
	{
		desc: 'System Setting',
		path: 'weresport.OtherSetting',
	},
	{
		desc: 'Language Setting',
		path: 'weresport.LangSetting',
	},
	{
		desc: 'Teman',
		path: 'weresport.Friend',
	},
	{
		desc: 'Undangan Teman',
		path: 'weresport.InviteFriend',
	},
	{
		desc: 'Private Chat',
		path: 'weresport.Chat',
	},
	{
		desc: 'Group Chat',
		path: 'weresport.GroupChat',
	},
	{
		desc: 'Lapanganku',
		path: 'weresport.Front',
	},
	{
		desc: 'Detail Lapangan',
		path: 'weresport.DetailField',
	},
	{
		desc: 'Detail Lapanganku',
		path: 'weresport.MyField',
	},
	{
		desc: 'Mencari Lapangan',
		path: 'weresport.SearchField',
	},
	{
		desc: 'Daftar Lapangan',
		path: 'weresport.FieldList',
	},
	{
		desc: 'Detail Daftar Lapangan',
		path: 'weresport.DetailFieldList',
	},
	{
		desc: 'Cari Daftar Lapangan',
		path: 'weresport.SearchFieldList',
	},
	{
		desc: 'Group Saya',
		path: 'weresport.MyGroup',
	},
	{
		desc: 'Buat Group',
		path: 'weresport.CreateGroup',
	},
	{
		desc: 'Edit Group',
		path: 'weresport.EditGroup',
	},
	{
		desc: 'Search Group',
		path: 'weresport.SearchGroup',
	},
	{
		desc: 'Invite Group',
		path: 'weresport.InviteGroup',
	},
	{
		desc: 'Full Group',
		path: 'weresport.FullGroup',
	},
	{
		desc: 'Closed Group',
		path: 'weresport.ClosedGroup',
	}
]

export default class Drawer extends Component {

	constructor(props) {
		super(props)

		this.onClick = this.onClick.bind(this)
	}

	toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		})
	}
 
	listItem = (data) => {
		let { path, desc } = data.item

		return (
			<View style={styles.drawerListItem}>
				<Text style={styles.drawerListItemText} onPress={() => this.onClick(path)}>
					{desc}
				</Text>
			</View>
		)
	}

	onClick = (data) => {
		this.toggleDrawer()

		if( data === 'weresport.Splash' ) {
			this.props.navigator.popToRoot({
				screen: data
			})
		} else {
			this.props.navigator.push({
				screen: data
			})
		}
	}

	render = () => {
		return (
			<View style={styles.container}>
				<View style={styles.drawerListItem}>
					<Text style={styles.head}>
						Screen List
					</Text>
				</View>
				<FlatList data={link} renderItem={this.listItem} />
			</View>
		)
	}
}

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