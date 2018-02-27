'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native'

export default class LineYellowTextInput extends Component<{}> {
	render() {
		let { leftSide, rightSide, style, ...restProps } = this.props
		let textstyle = styles.inputstyle;
		textstyle = StyleSheet.flatten([textstyle, style]);
		return (
			<View style={textstyle}>
				{leftSide}
				<TextInput
					{...restProps}
					placeholderTextColor={'#777777'}
					underlineColorAndroid={'transparent'}
					style={styles.text}
					selectionColor={'#e4ff64'}
				/>
				{rightSide}
			</View>
		)
	}
}
LineYellowTextInput.propTypes = {
	leftSide: <View style={{ flex: 1 }} />,
	rightSide: <View style={{ flex: 1 }} />,
	text: '',
}

LineYellowTextInput.defaultProps = {
	leftSide: PropTypes.object,
	rightSide: PropTypes.object,
	text: PropTypes.string,
}

const styles = StyleSheet.create({
	inputstyle: {
		marginTop: 25,
		paddingHorizontal: 10,
		backgroundColor: '#222222',
		borderColor: '#e4ff64',
		borderWidth: 1,
		borderRadius: 10,
	},
	text: {
		color: 'white',
	},
})