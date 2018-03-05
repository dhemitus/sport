'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'

import WButton from './WButton'

export default class OutlineButton extends Component<{}> {
	render() {
		let { leftSide, rightSide, children, text, style, textStyle, onPress } = this.props

		let buttonstyle = styles.button;
		buttonstyle = StyleSheet.flatten([buttonstyle, style]);
		textStyle = StyleSheet.flatten([styles.buttontext, textStyle])
		return (
			<WButton props={this.props} style={buttonstyle} onPress={onPress}>
				{leftSide}
				{text !== null ? <Text style={textStyle}>{text}</Text> : children }
				{rightSide}
			</WButton>
		)
	}
}
OutlineButton.propTypes = {
	leftSide: PropTypes.any,
	rightSide: PropTypes.any,
	textStyle: PropTypes.style,
	style: PropTypes.style,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

OutlineButton.defaultProps = {
	leftSide: <View style={{ flex: 1 }} />,
	rightSide: <View style={{ flex: 1 }} />,
	text: '',
	onPress: () => { },
	textStyle: StyleSheet.create({}),
	style: StyleSheet.create({}),
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#222222',
		padding: 10,
		alignItems: 'center',
		borderColor: '#e4ff64',
		borderWidth: 1,
		borderRadius: 10,
	},
	buttontext: {
		fontWeight: 'bold',
		color: '#e4ff64',
	},
})