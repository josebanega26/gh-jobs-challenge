import React from 'react';
import Landing from '../pages/Landing';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Layout = styled.div`
  background: #f6f7fb;
  padding: 0 7.5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  section {
    flex-grow: 1;
  }
  transition: all 0.4s;
  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
`;

const AppRoutes = () => {
  return (
    <Layout>
      <Header></Header>
      <Banner></Banner>
      <section>
        <Landing></Landing>
      </section>
      <Footer></Footer>
    </Layout>
  );
};

export default AppRoutes;
