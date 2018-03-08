'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, 
	FlatList, 
	TextInput, 
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class GroupChat extends Component<{}> {
	state = {
		messages: [
			{
				sender: 'juki',
				message: 'halo juki halo di sini halo juki halo di sini halo juki halo di sini halo juki halo di sini',
				date: '12.00',
			},
			{
				sender: 'kiko',
				message: 'halo kiko halo di sini',
				date: '12.00',
			},
			{
				sender: 'you',
				message: 'halo kiko halo di sini',
				date: '12.00',
			},
		],
	}

	renderItem = ({item}) => {
		if(item.sender === 'you') {
			return (
				<View style={styles.backrow}>
					<View style={styles.yellowbox}>
						<Text style={styles.respond}>{item.message}</Text>
						<View style={styles.datecontainer}>
							<Text style={styles.date}>{item.date}</Text>
						</View>
					</View>
				</View>
			)
		} else {
			return (
				<View style={styles.row}>
					<View style={styles.blackbox}>
						<Text style={styles.sender}>{item.sender}</Text>
						<Text style={styles.message}>{item.message}</Text>
						<View style={styles.datecontainer}>
							<Text style={styles.date}>{item.date}</Text>
						</View>
					</View>
				</View>
			)
		}
	}

	componentWillMount = () => {
		this.props.navigator.setTitle({ title: 'JAKARTA RUNNER' })
	}

	render = () => {
		return (
			<View style={styles.container}>
				<FlatList data={this.state.messages} renderItem={this.renderItem} inverted />
					<View style={styles.footer}>
						<Icon name="ios-happy-outline" size={32} color="white" style={styles.icon} />
						<TextInput
							value={this.state.typing}
							onChangeText={text => this.setState({typing: text})}
							style={styles.input}
							underlineColorAndroid="white"
							placeholder="Tulis Pesan"
						/>
						<Icon name="ios-map-outline" size={32} color="white" style={styles.icon} />
						<Icon name="ios-send-outline" size={32} color="white" style={styles.icon} />
					</View>
			</View>
		);
	}
}

GroupChat.navigatorStyle = {
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
	row: {
		padding: 10,
		alignItems: 'flex-start',
	},
	backrow: {
		padding: 10,
		alignItems: 'flex-end',
	},
	blackbox: {
		backgroundColor: 'black',
		padding: 10,
		borderRadius: 10,
	},
	yellowbox: {
		backgroundColor: '#e4ff64',
		padding: 10,
		borderRadius: 10,
	},
	message: {
		fontSize: 14,
		color: 'white',
	},
	respond: {
		fontSize: 14,
		color: 'black',
	},
	sender: {
		fontSize: 10,
		fontWeight: 'bold',
		paddingRight: 10,
		color: '#e4ff64',
	},
	date: {
		fontSize: 9,
		color: '#777777',
	},
	datecontainer: {
		alignItems: 'flex-end',
	},
	footer: {
		flexDirection: 'row',
		backgroundColor: '#777777',
		borderTopWidth: 1,
		borderTopColor: '#999999',
	},
	input: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		flex: 1,
		color: 'white',
	},
	icon: {
		margin: 10,
	},
});
