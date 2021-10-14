import { css } from "styled-components";
import media from "./media";

export const maxWidthSm = "85%";
export const maxWidthMd = 692;
export const maxWidthLg = 768;
export const maxWidthXl = 1200;

export const gridSkeleton = css`
  width: 100%;
  max-width: ${maxWidthSm};

  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  ${media.md`
    max-width: ${maxWidthMd}px;
  `}

  ${media.lg`
    max-width: ${maxWidthLg}px;
  `}

  ${media.xl`
    max-width: ${maxWidthXl}px;
  `}
`;
