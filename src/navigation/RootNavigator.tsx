import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen, ForgotPasswordScreen} from '@screens/index';
import View_PDF from '@src/screens/Pdf/View_PDF';
// import {Counter} from '@src/redux/counter/Counter';
import CRUD from '@src/screens/CRUD/CRUD';
import Calculator from '@src/screens/Interface/Calculator';

import Interface_Screen from '@src/screens/Interface/Interface_Screen';
import FormInterface from '@src/screens/Interface/FormInterface';
import Facebook from '@src/screens/Interface/CloneUI/Facebook';
import Facebook_create from '@src/screens/Interface/CloneUI/Facebook_create';
import Facebook_profile from '@src/screens/Interface/CloneUI/Facebook_profile';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Interface_facebook"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="View_PDF" component={View_PDF} />
      <Stack.Screen name="View_CRUD" component={CRUD} />
      {/* My adding */}
      <Stack.Screen name="Interface_cal" component={Calculator} />
      <Stack.Screen name="Interface" component={Interface_Screen} />
      <Stack.Screen name="Interface_form" component={FormInterface} />
      <Stack.Screen name="Interface_facebook" component={Facebook} />
      <Stack.Screen
        name="Interface_facebook_create"
        component={Facebook_create}
      />
      <Stack.Screen
        name="Interface_facebook_profile"
        component={Facebook_profile}
      />
    </Stack.Navigator>
  );
}
