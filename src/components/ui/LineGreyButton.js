'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'

export default class LineGreyButton extends Component<{}> {
	render() {
		let { leftSide, rightSide, style, text, onPress } = this.props
		return (
			<View style={style}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onPress()}
				>
					{leftSide}
					<Text style={styles.buttontext}>{text}</Text>
					{rightSide}
				</TouchableOpacity>
			</View>
		)
	}
}

LineGreyButton.propTypes = {
	leftSide: PropTypes.object,
	rightSide: PropTypes.object,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

LineGreyButton.defaultProps = {
	leftSide: <View style={{ flex: 1 }} />,
	rightSide: <View style={{ flex: 1 }} />,
	text: '',
	onPress: () => { },
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#222222',
		padding: 10,
		alignItems: 'center',
		borderColor: '#777777',
		borderWidth: 1,
		borderRadius: 10,
	},
	buttontext: {
		fontWeight: 'bold',
		color: '#e4ff64'
	},
})