'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, Button,
} from 'react-native'

import SearchFieldListItem from '../ui/list/SearchFieldListItem'

export default class SearchFieldList extends Component<{}> {

	componentWillMount() {
		this.props.navigator.setTitle({ title: 'WERESPORT' })
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchFieldListItem text={{ name: 'Lapangan Futsal Voli', address: 'Pulo Harapan indah, RT 23 Cengkareng Bar, Cengkareng' }} />
				<SearchFieldListItem text={{ name: 'Lapangan Futsal Cakra 12', address: 'Jl. Cakrawala No 18, RT 13/RW 1 Kb. Pala Makasar Kota' }} />
			</View>
		)
	}
}
/**
  				<SearchFieldListItem text={{name:'Lapangan Futsal Voli', address:'Pulo Harapan indah, RT 23 Cengkareng Bar, Cengkareng'}} />
				<SearchFieldListItem text={{name:'Lapangan Futsal Cakra 12', address:'Jl. Cakrawala No 18, RT 13/RW 1 Kb. Pala Makasar Kota'}} />

 */
SearchFieldList.navigatorStyle = {
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
		backgroundColor: '#222222',
	},
	aboutcontainer: {
		margin: 20,
	},
	about: {
		color: 'white'
	},
});
