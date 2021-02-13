import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import CollectionsIcon from "@material-ui/icons/Collections";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import SettingsIcon from "@material-ui/icons/Settings";
import StorageIcon from "@material-ui/icons/Storage";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";



export const SidebarData = [
  {
    title: 'Home',
    path: '/search',
    icon: <HomeIcon />,
    cName: 'nav-text'
  }, {
    title: 'Search history',
    path: '/search-history',
    icon: <SearchIcon />,
    cName: 'nav-text'
  }, {
    title: 'Collections',
    path: '/collections',
    icon: <CollectionsIcon />,
    cName: 'nav-text'
  }, {
    title: 'Offline searches',
    path: '/offline-searches',
    icon: <ImageSearchIcon />,
    cName: 'nav-text'
  }, {
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />,
    cName: 'nav-text'
  }, {
    title: 'Your data in Search',
    path: '/your-search-data',
    icon: <StorageIcon />,
    cName: 'nav-text'
  }, {
    title: 'Hide explicit results',
    path: '/hide-results',
    icon: <PowerSettingsNewIcon />,
    cName: 'nav-text'
  }, {
    title: 'How Search works',
    path: '/how-search-works',
    icon: <FindInPageIcon />,
    cName: 'nav-text'
  }, {
    title: 'Help',
    path: '/help',
    icon: <HelpIcon />,
    cName: 'nav-text'
  }, {
    title: 'Send Feedback',
    path: '/feedback',
    icon: <FeedbackIcon />,
    cName: 'nav-text'
  }
]