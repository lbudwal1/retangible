/* eslint-disable react/display-name */
"use client"
import React from "react";
import { Paper } from "@mui/material";
import { HasClassAndChildren } from "./publicInterfaces";

interface ILAPaperProps extends HasClassAndChildren {

}

export const LAPaper: React.FC<ILAPaperProps> = React.memo((props: ILAPaperProps) => (
    <Paper variant="outlined" square style={{ padding: "10px" }}>
        {props.children}
    </Paper>
));
