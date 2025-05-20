import React from 'react';
import styled from 'styled-components';

const LoginAdmin = () => {
  return (
    <BgWrapper>
      <CenteredContainer>
        <StyledWrapper>
          <form className="form">
            <div className="form-title"><span>Inicia Sesión</span></div>
            <div className="title-2"><span>Admin</span></div>
            <div className="input-container">
              <input placeholder="Email" type="email" className="input-mail" />
              <span> </span>
            </div>
            <section className="bg-stars">
              <span className="star" />
              <span className="star" />
              <span className="star" />
              <span className="star" />
            </section>
            <div className="input-container">
              <input placeholder="Password" type="password" className="input-pwd" />
            </div>
            <button className="submit" type="submit">
              <span className="sign-text">Sign in</span>
            </button>
            <p className="signup-link">
              
              <a className="up" href></a>
            </p>
          </form>
        </StyledWrapper>
      </CenteredContainer>
    </BgWrapper>
  );
}

const BgWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #23233a 0%, #181818 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  .form {
    position: relative;
    display: block;
    padding: 3.5rem 2.8rem;
    max-width: 480px;
    background: linear-gradient(
        14deg,
        rgba(35, 35, 58, 0.95) 0%,
        rgba(24, 24, 65, 0.85) 66%,
        rgb(20, 76, 99, 0.85) 100%
      ),
      radial-gradient(
        circle,
        rgba(35, 35, 58, 0.7) 0%,
        rgba(32, 15, 53, 0.3) 65%,
        rgba(14, 29, 28, 0.95) 100%
      );
    border: 3px solid #ffdf2c;
    box-shadow: 0 0 32px 0 #ffdf2c44, 0 8px 32px 0 #0008;
    overflow: hidden;
    z-index: 1;
    border-radius: 18px;
    font-family: 'Nunito', Arial, sans-serif;
  }

  .input-container {
    position: relative;
  }

  .input-container input,
  .form button {
    outline: none;
    border: 2px solid #ffdf2c;
    margin: 12px 0;
    font-family: 'Nunito', Arial, sans-serif;
    border-radius: 6px;
  }

  .input-container input {
    background-color: #fff;
    padding: 12px;
    font-size: 1.1rem;
    line-height: 1.5rem;
    width: 340px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  }

  .input-mail:focus::placeholder,
  .input-pwd:focus::placeholder {
    opacity: 0;
    transition: opacity 0.9s;
  }

  .submit {
    position: relative;
    display: block;
    padding: 12px;
    background: linear-gradient(90deg, #bf9929 0%, #c6af6a 100%);
    color: #23233a;
    text-shadow: 1px 1px 1px rgba(255,255,255,0.2);
    font-size: 1.1rem;
    font-weight: 700;
    width: 100%;
    text-transform: uppercase;
    overflow: hidden;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(255,215,0,0.10);
    transition: background 0.18s, color 0.18s, transform 0.18s;
    cursor: pointer;
  }

  .submit:hover {
    background: linear-gradient(90deg, #c6af6a 0%, #bf9929 100%);
    color: #181818;
    box-shadow: 0 4px 18px rgba(255,215,0,0.18);
    transform: translateY(-2px) scale(1.04);
  }

  .signup-link {
    color: #ffdf2c;
    font-size: 1.05rem;
    line-height: 1.5rem;
    text-align: center;
    font-family: 'Nunito', Arial, sans-serif;
    margin-top: 1.2rem;
  }

  .signup-link a {
    color: #fff;
    text-decoration: underline;
    margin-left: 0.3em;
  }

  .up:hover {
    color: #ffdf2c;
  }

  .form-title {
    font-size: 1.7rem;
    font-family: 'Nunito', Arial, sans-serif;
    font-weight: 700;
    text-align: center;
    color: #ffdf2c;
    text-shadow: 1px 1px 1px #181818;
    margin-bottom: 0.2em;
    animation-duration: 1.5s;
    overflow: hidden;
    transition: 0.12s;
  }

  .form-title span {
    animation: flickering 2s linear infinite both;
  }

  .title-2 {
    display: block;
    margin-top: -0.5rem;
    font-size: 2.6rem;
    font-weight: 900;
    font-family: 'Nunito', Arial, sans-serif;
    text-align: center;
    -webkit-text-stroke: #ffdf2c 0.08rem;
    letter-spacing: 0.2rem;
    color: transparent;
    position: relative;
    text-shadow: 0px 0px 16px #ffdf2c88;
    margin-bottom: 1.2em;
  }

  .title-2 span::before,
  .title-2 span::after {
    content: "—";
  }

  @keyframes flickering {
    0%, 100% { opacity: 1; }
    41.99% { opacity: 1; }
    42%, 43% { opacity: 0; }
    43.01%, 47.99% { opacity: 1; }
    48%, 49% { opacity: 0; }
    49.01% { opacity: 1; }
  }

  /* Shooting stars (mantén igual si quieres el efecto) */
  .bg-stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-size: cover;
    animation: animateBg 50s linear infinite;
  }

  @keyframes animateBg {
    0%, 100% { transform: scale(1);}
    50% { transform: scale(1.2);}
  }

  .star {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
      0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1);
    animation: animate 3s linear infinite;
  }

  .star::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  @keyframes animate {
    0% { transform: rotate(315deg) translateX(0); opacity: 1;}
    70% { opacity: 1;}
    100% { transform: rotate(315deg) translateX(-1000px); opacity: 0;}
  }

  .star:nth-child(1) {
    top: 0; right: 0; left: initial;
    animation-delay: 0s;
    animation-duration: 1s;
  }
  .star:nth-child(2) {
    top: 0; right: 100px; left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }
  .star:nth-child(3) {
    top: 0; right: 220px; left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.75s;
  }
  .star:nth-child(4) {
    top: 0; right: -220px; left: initial;
    animation-delay: 1.6s;
    animation-duration: 1.6s;
  }
`;

export default LoginAdmin;
