'use strict'

import { Navigation } from 'react-native-navigation'

import Front from './Front'
import About from './About'
import Login from './Login'
import Register from './Register'
import Splash from './Splash'
import Contact from './Contact'
import Drawer from '../ui/Drawer'

export function registerScreens(store, Provider) {
	Navigation.registerComponent('weresport.Drawer', () => Drawer, store, Provider)
	Navigation.registerComponent('weresport.Front', () => Front, store, Provider)
	Navigation.registerComponent('weresport.Login', () => Login, store, Provider)
	Navigation.registerComponent('weresport.Register', () => Register, store, Provider)
	Navigation.registerComponent('weresport.Splash', () => Splash, store, Provider)
	Navigation.registerComponent('weresport.About', () => About, store, Provider)
	Navigation.registerComponent('weresport.Contact', () => Contact, store, Provider)
}