import React from 'react'
import styled from 'styled-components';
import {AiFillClockCircle} from 'react-icons/ai';
import PlaylistIcon from '../assets/studyplaylist.jpg'
import CosmicWanderers from "../assets/cosmicwanderers.jpg"
import MoonlitSerenade from "../assets/moonlitserenade.jpg"
import BlueNoise from "../assets/bluenoise.jpg"
import ShootingStar from "../assets/shootingstar.jpg"
import SleepDeep from "../assets/sleep.jpg"
import Sunset from "../assets/sunset.jpg"
import Lonely from "../assets/lonely.jpg"
import Cloud from "../assets/cloud.jpg"
import Galaxy from "../assets/galaxy.jpg"
import Sparkle from "../assets/sparkle.jpg"

function SearchBody() {

  return (
    <Container>
        <div>
            <div className="playlist">
                <div className="details">
                    <span className="type">EXPLORE</span>
                    <h1 className="title">Looking for Something New?</h1>
                    <p className="description">Recommended Songs</p>
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
                            <img src={Sparkle} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Spectral Symphony</span>
                            <span>Mirage Melodies</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>mUsic</span>
                    </div>
                    <div className="col">
                        <span>3:35</span>
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
                            <img src={Galaxy} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Stardust Sonata</span>
                            <span>Galaxy Cadence</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Starburst</span>
                    </div>
                    <div className="col">
                        <span>4:17</span>
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
                            <img src={Lonely} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Echoes of Eternity</span>
                            <span>Celestial Harmony</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Celestial Harmony</span>
                    </div>
                    <div className="col">
                        <span>3:14</span>
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
                            <span className="name">Whirlwind Waltz</span>
                            <span>Nebula Notes</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>The Galaxy Awaits</span>
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
                            <img src={Cloud} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Frostbite Fugue</span>
                            <span>Arctic Allegro</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>C-Old Soul</span>
                    </div>
                    <div className="col">
                        <span>4:44</span>
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
                            <img src={BlueNoise} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Aurora Dreamscape</span>
                            <span>Echoing Cosmos</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Dream Pilot</span>
                    </div>
                    <div className="col">
                        <span>3:24</span>
                    </div>
                </div>
            </div>
            <div className="tracks">
                <div className="row">
                    <div className="col">
                        <span>7</span>
                    </div>
                    <div className="col detail">
                        <div className="image">
                            <img src={Sunset} alt="song image"></img>
                        </div>
                        <div className="info">
                            <span className="name">Solar Serenade</span>
                            <span>Nova Melodies</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Debut</span>
                    </div>
                    <div className="col">
                        <span>2:43</span>
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


export default SearchBody