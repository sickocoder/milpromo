import React from "react";

import { Container, Logo, AboutSection } from "./styles";

import logo from "./../../assets/logo_milpromo.png";

export default function Footer() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="df" />
        <div>Mil Promo</div>
      </Logo>
      <AboutSection>
        É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página 
        quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição 
        mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", 
        tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de 
        páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e 
        uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. 
        Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes 
        propositadamente (como no caso do humor).
      </AboutSection>
      <div className="contact">
        <div>Email: milpromo@gmail.com<br/>Tel: 997 555 636</div>
        <div>Portal 1000Promo© 2019</div>
      </div>
    </Container>
  );
}