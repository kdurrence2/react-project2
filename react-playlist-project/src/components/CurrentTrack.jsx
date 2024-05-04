import React from 'react'
import styled from 'styled-components';
import CosmicWanderer from "../assets/cosmicwanderers.jpg"

function CurrentTrack() {

  return (
    <Container>
        <div className="track">
           <div className="track__image">
             <img src={CosmicWanderer} alt="currentPlaying" />
           </div>
            <div className="track__info">
                <h4 className="track__info__track__name">Neon Dreams</h4>
                <h6 className="track__info__track__artists">
                    The Cosmic Wanderers
                </h6>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .track {
        display: flex;
        align-items: center;
        gap: 1rem;
        &__image{
            height: 4,5rem;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
            img {
                height: 4.5rem;
                align-item: center;
            }
        }
        &__info {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            &__track__name {
                color: white;
            }
            &__track__artists {
                color: #b3b3b3;
            }
        }
    }
`;

export default CurrentTrack