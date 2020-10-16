import React, {useState, useEffect} from 'react';
import {Text, Tab, Tabs, Container, TabHeading, Icon} from 'native-base';

import Chat from '../chat/chat';
import Kontak from '../kontak/kontak';

const mainChat = ({navigation}) => {
  return (
    <Container>
      <Tabs>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#327BF6'}}>
              <Icon
                style={{fontSize: 25}}
                type="FontAwesome"
                name="comments-o"
              />
              <Text style={{fontSize: 14}}>Chat</Text>
            </TabHeading>
          }>
          <Chat navigation={navigation} />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#327BF6'}}>
              <Icon
                style={{fontSize: 20}}
                type="FontAwesome"
                name="address-book"
              />
              <Text style={{fontSize: 14}}>Kontak</Text>
            </TabHeading>
          }>
          <Kontak navigation={navigation} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default mainChat;
