'use strict'

import { Navigation } from 'react-native-navigation'

import Front from './Front'
import Edit from './Edit'
import EditGroup from './EditGroup'
import SearchGroup from './SearchGroup'
import InviteGroup from './InviteGroup'
import DetailField from './DetailField'
import SearchField from './SearchField'
import SearchFieldList from './SearchFieldList'
import FullGroup from './FullGroup'
import ClosedGroup from './ClosedGroup'
import MyField from './MyField'
import About from './About'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import Splash from './Splash'
import Contact from './Contact'
//import Home from './Home'
import Chat from './Chat'
import Setting from './Setting'
import GroupChat from './GroupChat'
import FieldList from './FieldList'
import DetailFieldList from './DetailFieldList'
import Drawer from '../ui/Drawer'

export function registerScreens(store, Provider) {
	Navigation.registerComponent('weresport.Drawer', () => Drawer, store, Provider)
	Navigation.registerComponent('weresport.Front', () => Front, store, Provider)
	Navigation.registerComponent('weresport.DetailField', () => DetailField, store, Provider)
	Navigation.registerComponent('weresport.SearchField', () => SearchField, store, Provider)
	Navigation.registerComponent('weresport.MyField', () => MyField, store, Provider)
	Navigation.registerComponent('weresport.Login', () => Login, store, Provider)
	Navigation.registerComponent('weresport.Register', () => Register, store, Provider)
	Navigation.registerComponent('weresport.Splash', () => Splash, store, Provider)
	Navigation.registerComponent('weresport.About', () => About, store, Provider)
	Navigation.registerComponent('weresport.Edit', () => Edit, store, Provider)
	Navigation.registerComponent('weresport.EditGroup', () => EditGroup, store, Provider)
	Navigation.registerComponent('weresport.SearchGroup', () => SearchGroup, store, Provider)
	Navigation.registerComponent('weresport.InviteGroup', () => InviteGroup, store, Provider)
	Navigation.registerComponent('weresport.FullGroup', () => FullGroup, store, Provider)
	Navigation.registerComponent('weresport.ClosedGroup', () => ClosedGroup, store, Provider)
	Navigation.registerComponent('weresport.Profile', () => Profile, store, Provider)
//	Navigation.registerComponent('weresport.Home', () => Home, store, Provider)
	Navigation.registerComponent('weresport.Chat', () => Chat, store, Provider)
	Navigation.registerComponent('weresport.Setting', () => Setting, store, Provider)
	Navigation.registerComponent('weresport.GroupChat', () => GroupChat, store, Provider)
	Navigation.registerComponent('weresport.Contact', () => Contact, store, Provider)
	Navigation.registerComponent('weresport.FieldList', () => FieldList, store, Provider)
	Navigation.registerComponent('weresport.DetailFieldList', () => DetailFieldList, store, Provider)
	Navigation.registerComponent('weresport.SearchFieldList', () => SearchFieldList, store, Provider)
}