import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SearchBody from '../components/SearchBody';
import Footer from '../components/Footer';


function Search() {

  return (
    <Container>
      <div className="homeBody">
            <Sidebar />
            <div className="body">
                    <Navbar />
                    <div className="bodyContents">
                        <SearchBody />
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
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    .homeBody {
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0,0,0,1));
        background-color: #590202;
    }
    .body{
        height: 100%;
        width: 100%;
        overflow: auto;
    }

`;

export default Search