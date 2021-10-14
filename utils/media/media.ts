import { css, CSSObject } from "styled-components";

import {
  Media,
  MediaTagFunction,
  MediaObject,
  GetBreakpointsFn,
  Breakpoints,
  PartialBreakpoints,
  MediaLabels,
  MediaAliases,
} from "./types";

type MakeAliases = (
  breakpoints: PartialBreakpoints | undefined
) => PartialBreakpoints;

const makeAliases: MakeAliases = (breakpoints = {}) => {
  const data = Object.assign({}, breakpoints);
  const breakpointsKeys = Object.keys(breakpoints) as Media[];

  breakpointsKeys.forEach((key: Media) => {
    const key1 = key as keyof typeof MediaLabels;
    const key2 = key as keyof typeof MediaAliases;

    if (MediaLabels[key1]) {
      data[MediaLabels[key1]] = breakpoints[key];
    }

    if (MediaAliases[key2] && !data[MediaAliases[key2]]) {
      data[MediaAliases[key2]] = breakpoints[key];
    }
  });

  return data;
};

const defaultBreakpoints = makeAliases({
  xxl: 1440,
  xl: 1240,
  lg: 1024,
  md: 768,
  sm: 300,
  xs: 575,
}) as Breakpoints;

const getBreakpoints: GetBreakpointsFn = (props) => ({
  ...defaultBreakpoints,
});

const media: MediaObject = (Object.keys(defaultBreakpoints) as Media[]).reduce(
  (accumulator, label) => {
    const minMedia: MediaTagFunction = (strings, ...interpolations) => css`
      @media (min-width: ${(props) => getBreakpoints(props)[label]}px) {
        ${css(strings as CSSObject | TemplateStringsArray, ...interpolations)}
      }
    `;

    const maxMedia: MediaTagFunction = (strings, ...interpolations) => css`
      @media (max-width: ${(props) => getBreakpoints(props)[label] - 1}px) {
        ${css(strings as CSSObject | TemplateStringsArray, ...interpolations)}
      }
    `;

    accumulator[label] =
      label === "xs" || label === "smaller" ? maxMedia : minMedia;
    accumulator.max[label] = maxMedia;
    accumulator.min[label] = minMedia;

    return accumulator;
  },
  { min: {}, max: {} } as MediaObject
);

export default media;
