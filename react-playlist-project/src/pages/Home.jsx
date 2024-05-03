import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';


function Home() {

  return (
    <Container>
      <div className="homeBody">
            <Sidebar />
        <div className="body">
                <Navbar />
            <div className="bodyContents">
                <Body />
            </div>
        </div>
      </div>

      <div className="homeFooter">
            <Footer />

      </div>
    </Container>
  )
}

const Container = styled.div`
`;

export default Home