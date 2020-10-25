import React from 'react';
import Landing from 'pages/Landing';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Router } from '@reach/router';
import JobsPage from 'pages/JobPage';

const Layout = styled.div`
  background: #f6f7fb;
  padding: 0 7.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 350px;
  #sections_container {
    flex-grow: 1;
  }
  transition: all 0.4s;
  @media (max-width: 1023px) {
    padding: 0 0.75rem;
  }
`;

const AppRoutes = () => {
  return (
    <Layout>
      <Header></Header>
      <Router id='sections_container'> 
        <Landing path='/'></Landing>
        <JobsPage path='details/:jobId'></JobsPage>
      </Router>
      <Footer></Footer>
    </Layout>
  );
};

export default AppRoutes;
