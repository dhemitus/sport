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

export default class FieldListItem extends Component<{}> {
	render() {
		let { rightSide, children, text:{name, address}, style, textStyle, onPress } = this.props

		let buttonstyle = styles.button;
		buttonstyle = StyleSheet.flatten([buttonstyle, style]);
		textStyle = StyleSheet.flatten([styles.buttontext, textStyle])
		return (
			<WButton props={this.props} style={buttonstyle} onPress={onPress}>
				<View style={styles.text}>
					<Text style={styles.buttontext}>{name}</Text>
					<Text style={styles.subtitletext}>{address}</Text>
				</View>
				<View style={styles.pin}>
					<Icon name="ios-close-outline" size={32} color="#777777" />
				</View>
			</WButton>
		)
	}
}

FieldListItem.propTypes = {
	rightSide: PropTypes.any,
	textStyle: PropTypes.style,
	style: PropTypes.style,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

FieldListItem.defaultProps = {
	rightSide: <View style={{ flex: 1 }} />,
	text: '',
	onPress: () => { },
	textStyle: StyleSheet.create({}),
	style: StyleSheet.create({}),
}

const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderLeftColor: '#e4ff64',
		flexDirection: 'row',
		borderLeftWidth: 4,
		marginBottom: 1,
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
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginLeft: 10,
	},
})