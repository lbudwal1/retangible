"use client"
import React from "react";
import { Button } from "@mui/material";

interface ILAButtonProps {
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    name?: string
  ) => void;
}

export const LAButton: React.FC<ILAButtonProps> = React.memo((props: ILAButtonProps) => (
  <Button
    variant="contained"
    color="primary"
    disabled={props.disabled}
    fullWidth={props.fullWidth}
    className={props.className}
    startIcon={props.startIcon}
    endIcon={props.endIcon}
    onClick={props.onClick}
  >
    {props.label}
  </Button>
));

LAButton.displayName = "LARedButton";
