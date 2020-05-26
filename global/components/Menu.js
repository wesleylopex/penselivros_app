import * as React from "react";
import { Alert, Image, View, StyleSheet, AsyncStorage } from "react-native";

import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../pages/home/Home";
import BookHistory from "../../pages/books/components/BookHistory";

import appColor from "../appColors"

const Menu = () => {
  const Tab = createBottomTabNavigator();

  const getIconColor = (isActive) => {
    return isActive ? appColor.lightColor : appColor.lightGrayColor;
  };

  const icons = {
    Home(isActive) {
      return <Feather name="book" color={getIconColor(isActive)} size={20} />;
    },
    BookHistory(isActive) {
      return <Feather name="clock" color={getIconColor(isActive)} size={20} />;
    },
    Bookmarks(isActive) {
      return (
        <Feather name="bookmark" color={getIconColor(isActive)} size={20} />
      );
    },
    Profile(isActive) {
      return <Feather name="user" color={getIconColor(isActive)} size={20} />;
    },
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const getIcon = icons[route.name];
          return getIcon(focused);
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: "#454545",
          borderTopColor: "transparent",
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="BookHistory" component={BookHistory} />
      <Tab.Screen name="Bookmarks" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Menu;
