'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native'

export default class LineWhiteTextInput extends Component<{}> {
	render() {
		let { leftSide, rightSide, style, ...restProps } = this.props
		let textstyle = styles.text;
		textstyle = StyleSheet.flatten([textstyle, style]);
		return (
			<View style={styles.container}>
				{leftSide}
				<TextInput
					{...restProps}
					style={textstyle}
					placeholderTextColor={'#777777'}
					underlineColorAndroid={'white'}
					selectionColor={'#777777'}
				/>
				{rightSide}
			</View>
		)
	}
}
LineWhiteTextInput.propTypes = {
	leftSide: PropTypes.object,
	rightSide: PropTypes.object,
}

LineWhiteTextInput.defaultProps = {
	leftSide: <View style={{ flex: 1 }} />,
	rightSide: <View style={{ flex: 1 }} />,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	text: {
		color: 'white',
	},
})