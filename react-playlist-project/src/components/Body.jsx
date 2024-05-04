import React from 'react'
import styled from 'styled-components';
import {AiFillClockCircle} from 'react-icons/ai';
import PlaylistIcon from '../assets/studyplaylist.jpg'
import CosmicWanderers from "../assets/cosmicwanderers.jpg"
import MoonlitSerenade from "../assets/moonlitserenade.jpg"
import BlueNoise from "../assets/bluenoise.jpg"
import ShootingStar from "../assets/shootingstar.jpg"
import SleepDeep from "../assets/sleep.jpg"

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
                        <div className="info">
                            <span className="name">Neon Dreams</span>
                            <span>The Cosmic Wanderers</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Drifting</span>
                    </div>
                    <div className="col">
                        <span>2:34</span>
                    </div>
                </div>
            </div>
            <div className="tracks">
                <div className="row">
                    <div className="col">
                        <span>2</span>
                    </div>
                    <div className="col detail">
                        <div className="image">
                            <img src={MoonlitSerenade} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Moonlit Serenade</span>
                            <span>Electric Echoes</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Echoing</span>
                    </div>
                    <div className="col">
                        <span>3:21</span>
                    </div>
                </div>
            </div>
            <div className="tracks">
                <div className="row">
                    <div className="col">
                        <span>3</span>
                    </div>
                    <div className="col detail">
                        <div className="image">
                            <img src={BlueNoise} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Whispers in the Wind</span>
                            <span>Sapphire Symphony</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Blue Noise</span>
                    </div>
                    <div className="col">
                        <span>4:14</span>
                    </div>
                </div>
            </div>
            <div className="tracks">
                <div className="row">
                    <div className="col">
                        <span>4</span>
                    </div>
                    <div className="col detail">
                        <div className="image">
                            <img src={ShootingStar} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Midnight Mirage</span>
                            <span>Starlight Strangers</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Stargazing</span>
                    </div>
                    <div className="col">
                        <span>3:52</span>
                    </div>
                </div>
            </div>
            <div className="tracks">
                <div className="row">
                    <div className="col">
                        <span>5</span>
                    </div>
                    <div className="col detail">
                        <div className="image">
                            <img src={SleepDeep} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Siren's Songe</span>
                            <span>Celestial Sirens</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Sleep Deep</span>
                    </div>
                    <div className="col">
                        <span>2:44</span>
                    </div>
                </div>
            </div>
            <div className="tracks">
                <div className="row">
                    <div className="col">
                        <span>6</span>
                    </div>
                    <div className="col detail">
                        <div className="image">
                            <img src={CosmicWanderers} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Galactic Groove</span>
                            <span>The Cosmic Wanderers</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Drifting</span>
                    </div>
                    <div className="col">
                        <span>3:24</span>
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
    }
    .tracks {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.1rem;
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