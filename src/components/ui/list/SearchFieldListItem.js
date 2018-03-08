'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'

import WButton from '../button/WButton'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SearchFieldListItem extends Component<{}> {
	render() {
		let { rightSide, children, text:{name, address}, style, textStyle, onPress } = this.props

		let buttonstyle = styles.button;
		buttonstyle = StyleSheet.flatten([buttonstyle, style]);
		textStyle = StyleSheet.flatten([styles.buttontext, textStyle])
		return (
			<WButton props={this.props} style={buttonstyle} onPress={onPress}>
				<View style={styles.pin}>
					<Icon name="ios-map-outline" size={32} color="#777777" />
				</View>
				<View style={styles.text}>
					<Text style={styles.buttontext}>{name}</Text>
					<Text style={styles.subtitletext}>{address}</Text>
				</View>
			</WButton>
		)
	}
}

SearchFieldListItem.propTypes = {
	rightSide: PropTypes.any,
	textStyle: PropTypes.style,
	style: PropTypes.style,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

SearchFieldListItem.defaultProps = {
	rightSide: <View style={{ flex: 1 }} />,
	text: '',
	onPress: () => { },
	textStyle: StyleSheet.create({}),
	style: StyleSheet.create({}),
}

const styles = StyleSheet.create({
	button: {
		padding: 10,
		flexDirection: 'row',
	},
	text: {
		flexDirection: 'column',
		width: '90%',

	},
	buttontext: {
		fontSize: 16,
		color: '#e4ff64',
		paddingLeft: 10,
	},
	subtitletext: {
		color: 'white',
		paddingLeft: 10,
	},
	pin: {
		marginLeft: 10,
		backgroundColor: '#e4ff64',
		alignItems: 'center',
		justifyContent: 'center',
		height: 56,
		width: 56,
		borderRadius: 28,
	},
})