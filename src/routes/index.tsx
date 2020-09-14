import React from 'react';
import Landing from '../pages/Landing';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = styled.div`
  padding: 0 7.5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  section {
    flex-grow: 1;
  }
`;

const AppRoutes = () => {
  return (
    <Layout>
      <Header></Header>
      <section>
        <Landing></Landing>
      </section>
      <Footer></Footer>
    </Layout>
  );
};

export default AppRoutes;
