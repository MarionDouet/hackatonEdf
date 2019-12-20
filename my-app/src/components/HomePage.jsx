import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Environnement from './Environnement';
import Projet from './Projet';
import Contact from './Contact';
import './HomePage.css';
import Text from './Text';
import logoPrincipal from '../images/logoPrincipal.jpg';
import MapTest from './Map';
import WhatIsIt from './WhatIsIt';
import Demain from './Demain'




const HomePage = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <div className="header-container">
        <img src={logoPrincipal} className="logoPrincipal" />
        </div>
          <Nav tabs>
          <NavItem className="item-nav">
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Présentation
        </NavLink>
          </NavItem>
          <NavItem className="item-nav">
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Ce qu'il est
        </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Aujourd'hui
        </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              Et demain?
        </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { toggle('5'); }}
            >
              Contact
        </NavLink>
          </NavItem>
        </Nav>
      <TabContent className="fond" activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Environnement />
              <Text />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Environnement />
              <WhatIsIt />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
            <MapTest />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <Projet />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <Demain />
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
      </TabContent>
    </div>
  );
}

export default HomePage;


