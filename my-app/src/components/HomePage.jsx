import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Projet from './Projet';
import Contact from './Contact';
import './HomePage.css';
import Text from './Text';
import logoPrincipal from '../images/logoPrincipal.jpg';
import MapTest from './Map';
import WhatIsIt from './WhatIsIt';

const HomePage = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const [activeFr, setLanguage] = useState(true);

  return (
    <div>
      <div className="header-container">
        <img src={logoPrincipal} className="logoPrincipal" />
        <Nav tabs>
          <NavItem className="item-nav">
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              {(activeFr) ? 'Présentation' : 'Presentación'}
            </NavLink>
          </NavItem>
          <NavItem className="item-nav">
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              {(activeFr) ? "Ce qu'il est" : 'Que es'}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              {(activeFr) ? "Aujourd'hui" : 'Hoy'}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              {(activeFr) ? "Et demain?" : 'Mañana'}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { toggle('5'); }}
            >
              {(activeFr) ? "Contact" : 'Cuntact'}
        </NavLink>
          </NavItem>
        </Nav>
        <div className="buttonLanguage">
          <Button color="primary" size="sm" onClick={() => setLanguage(true)} >Français</Button>{' '}
          <Button color="primary" size="sm" onClick={() => setLanguage(false)}>Espagnol</Button>
        </div>
      </div>
      <TabContent className="fond" activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Text activeFr={activeFr}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <WhatIsIt activeFr={activeFr}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <MapTest activeFr={activeFr}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <Projet activeFr={activeFr}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col sm="12">
              <Contact />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
            <Col sm="12">
              <Contact activeFr={activeFr}/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default HomePage;


