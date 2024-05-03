import React from 'react'
import styled from 'styled-components';
import RhythmicSmall from '../assets/Rhythmic-small.png';
import {IoLibrary} from "react-icons/io5";
import {MdHomeFilled, MdSearch} from 'react-icons/md';
import Playlists from "./Playlists";

function Sidebar() {

  return (
    <Container>
      <div className="topLinks">
        <div className="logo">
            <img src={RhythmicSmall} alt="Rhythmic Logo Small"/>
        </div>
        <ul>
            <li>
                <MdHomeFilled />
                <span>Home</span>
            </li>

            <li>
                <MdSearch />
                <span>Search</span>
            </li>

            <li>
                < IoLibrary />
                <span>Your Library</span>
            </li>
        </ul>
      </div>

      <Playlists />
    </Container>
  )
}

const Container = styled.div`
    background-color: #000000;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .topLinks {
        display: flex;
        flex-direction: column;
    }
    .logo {
        text-align: center;
        margin: 1rem 0;
    }
    img{
        max-inline-size: 80%;
        block-size: auto;
    }
    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    li{
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
            color: #F2EFBD;
        }
    }
`;

export default Sidebar