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

export default class SettingListItem extends Component<{}> {
	render() {
		let { rightSide, children, text, style, textStyle, onPress } = this.props

		let buttonstyle = styles.button;
		buttonstyle = StyleSheet.flatten([buttonstyle, style]);
		textStyle = StyleSheet.flatten([styles.buttontext, textStyle])
		return (
			<WButton props={this.props} style={buttonstyle} onPress={onPress}>
				{text !== null ? <Text style={styles.buttontext}>{text}</Text> : children}
				<View style={styles.pin}>
					<Icon name="ios-arrow-forward-outline" size={20} color="#777777" />
				</View>
			</WButton>
		)
	}
}

SettingListItem.propTypes = {
	rightSide: PropTypes.any,
	textStyle: PropTypes.style,
	style: PropTypes.style,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

SettingListItem.defaultProps = {
	rightSide: <View style={{ flex: 1 }} />,
	text: '',
	onPress: () => { },
	textStyle: StyleSheet.create({}),
	style: StyleSheet.create({}),
}

const styles = StyleSheet.create({
	button: {
		padding: 15,
		flexDirection:'row',
		borderBottomColor: '#777777',
		borderBottomWidth: 1,
	},
	buttontext: {
		fontSize: 16,
		color: 'white',
		paddingHorizontal: 20,
	},
	pin: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'flex-end',
	},
})