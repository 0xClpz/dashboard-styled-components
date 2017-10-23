import styled from 'styled-components';
import {colorPalette} from "../../../constants/color";

export const TextPill = styled.span`
  background-color: rgba(1, 1, 1, 0.5);
  border-radius: 10px;
  padding: 5px;
  color: ${colorPalette.textPrimary};
`;
