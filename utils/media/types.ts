import {
  FlattenInterpolation,
  Interpolation,
  SimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

export type Breakpoints = { [key in Media]: number };
export type PartialBreakpoints = Partial<Breakpoints>;

export enum MediaLabels {
  xs = "smaller",
  sm = "phone",
  md = "tablet",
  lg = "desktop",
  xl = "giant",
  xxl = "veryGiant",
}

export enum MediaAliases {
  smaller = "xs",
  phone = "sm",
  tablet = "md",
  desktop = "lg",
  giant = "xl",
  veryGiant = "xxl",
}

export type Media = MediaLabels | MediaAliases;

export type MediaTagFunction<P extends {} = {}, T = {}> = (
  strings: TemplateStringsArray | NonNullable<SimpleInterpolation>,
  ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]
) => FlattenInterpolation<ThemedStyledProps<P, T>>;

export type MapMediaToQuery = { [Key in Media]: MediaTagFunction };

export type MediaObject = MapMediaToQuery & {
  min: MapMediaToQuery;
  max: MapMediaToQuery;
};

export type GetBreakpointsFn = <P extends {} = {}>(
  props: ThemedStyledProps<P, {}>
) => { [key in Media]: number };
