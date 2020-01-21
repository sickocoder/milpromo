import React from "react";

import { Container, MusicInfo, MusicInfoItem, DownloadButton } from "./style";

import davidoImage from "./../../assets/davido.jpg";

export default function DownloadMusic() {
  return (
    <Container>
      <div className="sectionTitle" style={{marginBottom: 32, textAlign: 'center'}}>
        Baixar Rikinho Gang - Americano
      </div>
      <MusicInfo>
        <img src={davidoImage} alt="" />
        <div>
          <MusicInfoItem>Titulo: Americano</MusicInfoItem>
          <MusicInfoItem>Album: Nao definido</MusicInfoItem>
          <MusicInfoItem>Ano: 2k19</MusicInfoItem>
          <MusicInfoItem className="musicDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </MusicInfoItem>

          <DownloadButton>
            BAIXAR
          </DownloadButton>

        </div>
      </MusicInfo>
    </Container>
  );
}