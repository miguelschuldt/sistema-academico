import React from "react";

import Layout from '../../Layout';

import './Styles.css';

import Loginform from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Home: React.FC = () => {

  return (
    <Layout>
      <>
        <Loginform />
        <RegisterForm/>
      </>
    </Layout>
  );
};

export default Home;