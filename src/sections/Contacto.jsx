import React, { useState } from 'react';
import styled from 'styled-components';
import BankInfo from '../components/BankInfo';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Card = () => {
  const [showBankInfo, setShowBankInfo] = useState(false);

  return (
    <>
      <NavBar />
      <StyledWrapper>
        <div className="cards">
          <div className="card correo">
            <p className="tip">Correo</p>
            <p className="second-text">edison.proaño@itq.edu.ec</p>
          </div>
          <div
            className="card transferencias"
            onClick={() => setShowBankInfo(true)}
          >
            <p className="tip">Transferencias</p>
            <p className="second-text">Haz click para darte información</p>
          </div>
          <div className="card green">
            <p className="tip">Whatsapp</p>
            <p className="second-text">
              <a
                href="https://wa.me/593961620349"
                className="whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                0961620349
              </a>
            </p>
          </div>
        </div>
        {showBankInfo && <BankInfo onClose={() => setShowBankInfo(false)} />}
      </StyledWrapper>
      <Footer />
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;

  .cards {
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
    justify-content: center;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 170px;
    width: 370px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 0 6px 32px rgba(0,0,0,0.13);
    font-size: 1.22em;
    font-family: inherit;
    letter-spacing: 0.01em;
    background-clip: padding-box;
    border: none;
    position: relative;
    overflow: hidden;
  }

  .cards .correo {
    background: linear-gradient(90deg, #23233a 60%, #181818 100%);
  }

  .cards .transferencias {
    background: linear-gradient(90deg, #ffdf2c 0%, #c6af6a 100%);
    color:rgb(255, 255, 255);
    font-weight: 700;
    box-shadow: 0 4px 24px rgba(255,223,44,0.13);
  }

  .cards .green {
    background: linear-gradient(90deg, #22c55e 70%, #16a34a 100%);
  }

  .cards .card p.tip {
    font-size: 1.18em;
    font-weight: 800;
    margin-bottom: 0.5em;
    letter-spacing: 0.03em;
    text-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  .cards .card p.second-text {
    font-size: 1.07em;
    font-weight: 500;
    margin: 0;
    word-break: break-all;
    color: inherit;
    text-shadow: 0 1px 6px rgba(0,0,0,0.07);
  }

  .whatsapp-link {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
    letter-spacing: 0.02em;
  }
  .green .whatsapp-link:hover {
    color:rgb(255, 255, 255);
    text-decoration: underline;
  }

  .cards .card:hover {
    transform: scale(1.045);
    box-shadow: 0 8px 36px 0 rgba(255, 255, 255, 0.18);
    z-index: 2;
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(7px) grayscale(0.08);
    transform: scale(0.97, 0.97);
    z-index: 1;
  }

  @media (max-width: 500px) {
    .cards .card {
      width: 95vw;
      min-width: 0;
      font-size: 1em;
      height: 120px;
    }
  }
`;

export default Card;