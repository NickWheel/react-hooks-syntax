import React from 'react';
import SomeComponent from '../../components/SomeComponent';
import Articles from '../../components/Articles/index';
import UserList from '../../components/UserList';
import Nav from '../../components/DonutGay/Nav';
import TitleScreen from '../../components/DonutGay/TitleScreen';
import Accordion from '../../components/DonutGay/Accordion';
import Purposes from '../../components/DonutGay/Purposes';
import ToWork from '../../components/DonutGay/ToWork';
import Footer from '../../components/DonutGay/Footer';
import PropTypesComponent from '../../components/PropTypesComponent';

export default function(props){
  return(
    <>
      <Nav />
      <TitleScreen />
      <Accordion title={'Задачи модуля'} component={Purposes} />
      <Accordion title={'Проработать'} component={ToWork} style={{backgroundColor: "#FAFAFA"}} />
      <Footer />
      {/* <PropTypesComponent /> */}


      {/* <UserList /> */}
      {/* <Articles />
      <SomeComponent /> */}
    </>
  )
}