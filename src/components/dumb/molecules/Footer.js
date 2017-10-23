import React from 'react';
import {DivOverflow} from "../atomes/DivOverflow";
import {FooterBlurry} from "../atomes/FooterBlurry";
import {FooterContainer} from "../atomes/FooterContainer";

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Footer = ({children}) =>
  <DivOverflow value="hidden">
    <Container>
      <FooterBlurry />
      <FooterContainer>
        {children}
      </FooterContainer>
    </Container>
  </DivOverflow>;
