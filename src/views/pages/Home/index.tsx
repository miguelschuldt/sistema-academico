import React from "react";

import Layout from '../../Layout';

import './Styles.css';

import Loginform from './components/LoginForm';

const Home: React.FC = () => {

  return (
    <Layout>
      <>
        <Loginform />
      </>
    </Layout>
  );
};

export default Home;