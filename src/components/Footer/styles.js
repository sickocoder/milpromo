import styled from "styled-components";

export const Container = styled.div`
  margin-top: 64px;
  padding: 16px 16%;

  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.2);
  background-color: #1F2024;

  .contact {
    display: flex;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 16px;
    margin-top: 32px;


    font-size: 16px;

    flex-direction: row;
    align-self: center;
    text-align: left;
    justify-content: space-between;

  }

`;

export const Logo = styled.span`
  font-size: 40px;

  img {
    margin-top: 32px;
    max-width: 120px;
  }

  color: #fff !important;

`;

export const AboutSection = styled.form`
  margin: 16px auto;

  font-size: 18px;
  text-align: justify;
  font-style: italic;

  width: 70%;
  min-width: 800px;

  ::before {
    content: "Sobre nos...";
    width: 100%;
    float: left;
    font-size: 24px;
    margin-bottom: 8px;
  }

`