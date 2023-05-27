"use client"
import React from "react";
import Grid, { GridDirection, GridSize } from "@mui/material/Grid";
import { HasClassAndChildren } from "./publicInterfaces";


interface IGridContainerProps extends HasClassAndChildren {
  spacing?: Spacing;
  justify?: GridJustification;
  direction?: GridDirection;
  backCol?: string;
}

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
const DEFAULT_SPACING = 1;

type GridJustification =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
const DEFAULT_JUSTIFY = "flex-start";

export const GridContainer: React.FC<IGridContainerProps> = (props: IGridContainerProps) => {
  return (
    <Grid
      style={{ backgroundColor: props.backCol }}
      direction={props.direction}
      container
      justifyContent={props.justify || DEFAULT_JUSTIFY}
      spacing={props.spacing || DEFAULT_SPACING}
      className={props.className}
    >
      {props.children}
    </Grid>
  );
};


interface IGridItemProps extends HasClassAndChildren {
    xl?: GridSize;
    lg?: GridSize;
    md?: GridSize;
    sm?: GridSize;
    xs?: GridSize;
    isContainer?: boolean;
    className?: string;
    onClick?: () => void;
}


export const GridItem: React.FC<IGridItemProps> = (props: IGridItemProps) => 
    <Grid className={props.className} container={props.isContainer ?? false} item={true} xl={props.xl} lg={props.lg} md={props.md} sm={props.sm} xs={props.xs} onClick={props.onClick}>
        {props.children}
    </Grid>
;
