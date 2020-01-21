import styled from 'styled-components';

export const Container = styled.div`
  width: 68%;
  min-width: 920px;
  margin: 32px auto;
`;

export const MusicInfo = styled.div`

  text-align: center;

  img {
    width: 500px;
    height: 500px;
    border-radius: 8px;
    margin-bottom: 32px;
  }

`;

export const MusicInfoItem = styled.div`
  font-weight: normal;
  font-size: 20px;
`;

export const DownloadButton = styled.button`
  margin-top: 32px;
  width: 200px;
  height: 48px;
  line-height: 48px;
  border: none;
  border-radius: 8px;
  background-color: #000;
  cursor: pointer;

  color: #ffffff;
  font-size: 18px;
  font-weight: bold;

  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #43a047;
    transform: translateY(-2px);
  }

`;