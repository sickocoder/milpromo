import styled from "styled-components";

export const Container = styled.div`
  width: 68%;
  min-width: 920px;
  margin: auto;
`;

export const PageBanner = styled.div`
  background-image: linear-gradient(to right, #212121 , #43a047);
  width: 100%;
  height: 500px;

  text-align: center;
  line-height: 400px;

  ::after {
    content: '${props => props.title}';
    font-size: 90px;
  }

`;