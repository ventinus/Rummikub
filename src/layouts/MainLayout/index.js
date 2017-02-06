import React from 'react';
import Nav from '../../components/Nav';
import styles from './MainLayout.scss';

const MainLayout = ({children}) => (
  <div className="layout">
    { children }
  </div>
);

export default MainLayout;
