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

export default class CircleButton extends Component<{}> {
	render() {
		let { leftSide, rightSide, children, style, onPress } = this.props

		let buttonstyle = styles.button;
		buttonstyle = StyleSheet.flatten([buttonstyle, style]);

		return (
			<WButton props={this.props} style={buttonstyle} onPress={onPress}>
				{leftSide}
				{children}
				{rightSide}
			</WButton>
		)
	}
}

CircleButton.propTypes = {
	leftSide: PropTypes.any,
	rightSide: PropTypes.any,
	style: PropTypes.style,
	onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#e4ff64',
		alignItems: 'center',
		justifyContent: 'center',
		height: 56,
		width: 56,
		borderRadius: 28,
	},
})