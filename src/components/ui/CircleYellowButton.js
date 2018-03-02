'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'

export default class CircleYellowButton extends Component<{}> {
	render() {
		let { style, text, children, onPress } = this.props
		return (
			<View style={style}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onPress()}
				>
					{children}
				</TouchableOpacity>
			</View>
		)
	}
}
CircleYellowButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#e4ff64',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#e4ff64',
		height: 56,
		width: 56,
		borderRadius: 28,
	},
})