import React from 'react';
import ListItem from '../components/ListItem';
import Screen from './Screen';

function AccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title="Mosh Hamedani"
        subTitle="programming@gmail.com"
        image={require('../assets/mosh.jpg')}
      />
    </Screen>
  );
}

export default AccountScreen;
