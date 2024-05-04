import React from 'react'
import styled from 'styled-components';
import {AiFillClockCircle} from 'react-icons/ai';
import PlaylistIcon from '../assets/studyplaylist.jpg'
import CosmicWanderers from "../assets/cosmicwanderers.jpg"

function Body() {

  return (
    <Container>
        <div>
            <div className="playlist">
                <div className="image">
                    <img src={PlaylistIcon} alt="A playlist icon depicting a laptop and desk"></img>
                </div>
                <div className="details">
                    <span className="type">PLAYLIST</span>
                    <h1 className="title">Study Jams</h1>
                    <p className="description">For when you need to focus</p>
                </div>
            </div>
            <div className="list">
                <div className="headerRow">
                <div className="col">
                        <span>#</span>
                    </div>
                    <div className="col">
                        <span>TITLE</span>
                    </div>
                    <div className="col">
                        <span>ALBUM</span>
                    </div>
                    <div className="col">
                        <span> <AiFillClockCircle /> </span>
                    </div>
                </div>
            </div>
            <div className="tracks">
                <div className="row">
                    <div className="col">
                        <span>1</span>
                    </div>
                    <div className="col detail">
                        <div className="image">
                            <img src={CosmicWanderers} alt="song image"></img>
                        </div>
                    </div>
                    <div className="info">
                        <span className="name">Neon Dreams</span>
                        <span>The Cosmic Wanderers</span>
                    </div>
                    <div className="col">
                        <span>Album</span>
                    </div>
                    <div className="col">
                        <span>2:34</span>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .playlist {
        margin: 0 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        .image {
            img {
                height: 15rem;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
            }
        }
    }
    .details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #e0dede;
        .title {
          color: white;
          font-size: 4rem;
        }
      }
    .list {
        .headerRow {
            display: grid;
            grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
            margin: 1rem 0 0 0;
            color: #dddcdc;
            position: sticky;
            top: 15vh;
            padding: 1rem 3rem;
            transition: 0.3s ease-in-out;
    }
    .tracks {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 5rem;
        .row {
            padding: 0.5rem 1rem;
            display: grid;
            grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
            &:hover {
                background-color: rgba(0, 0, 0, 0.7);
            }
        }
        .col {
            display: flex;
            align-items: center;
            color: #dddcdc;
            img {
                height: 40px;
                width: 40px;
            }
        }
        .detail {
            display: flex;
            gap: 1rem;
            .info {
                display: flex;
                flex-direction: column;
            }
        }
    }
`;


export default Body