/* eslint-disable react/display-name */
"use client"
import React from "react";
import { HasClass } from "./publicInterfaces";

const DEFAULT_SIZE = 24;


export interface IIconProps extends HasClass {
    width?: number;
    height?: number;
    color?: string;
    fillOpacity?: number;
    onClick?: () => void;
};


export const SettingsIcon = React.memo((props: IIconProps): JSX.Element =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || DEFAULT_SIZE}
        height={props.height || DEFAULT_SIZE}
        viewBox="0 0 24 24"
        fill={props.color}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
);

export const HomeIcon = React.memo((props: IIconProps): JSX.Element =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || DEFAULT_SIZE}
        height={props.height || DEFAULT_SIZE}
        viewBox="0 0 24 24"
        fill={props.color}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </svg>
);

export const EventIcon = React.memo((props: IIconProps): JSX.Element =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || DEFAULT_SIZE}
        height={props.height || DEFAULT_SIZE}
        viewBox="0 0 24 24"
        fill={props.color}
    >
        <path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18 h-2v-2h2V18z" />
    </svg>
);

export const DataSourceIcon = React.memo((props: IIconProps): JSX.Element =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || DEFAULT_SIZE}
        height={props.height || DEFAULT_SIZE}
        viewBox="0 0 24 24"
        fill={props.color}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
    </svg>
);

export const StatsIcon = React.memo((props: IIconProps): JSX.Element =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || DEFAULT_SIZE}
        height={props.height || DEFAULT_SIZE}
        viewBox="0 0 24 24"
        fill={props.color}
    >
        <path d="M19.88,18.47c0.44-0.7,0.7-1.51,0.7-2.39c0-2.49-2.01-4.5-4.5-4.5s-4.5,2.01-4.5,4.5s2.01,4.5,4.49,4.5 c0.88,0,1.7-0.26,2.39-0.7L21.58,23L23,21.58L19.88,18.47z M16.08,18.58c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 s2.5,1.12,2.5,2.5C18.58,17.46,17.46,18.58,16.08,18.58z M15.72,10.08c-0.74,0.02-1.45,0.18-2.1,0.45l-0.55-0.83l-3.8,6.18 l-3.01-3.52l-3.63,5.81L1,17l5-8l3,3.5L13,6C13,6,15.72,10.08,15.72,10.08z M18.31,10.58c-0.64-0.28-1.33-0.45-2.05-0.49 c0,0,5.12-8.09,5.12-8.09L23,3.18L18.31,10.58z" />
    </svg>
);

export const ConceptIcon = React.memo((props: IIconProps): JSX.Element =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || DEFAULT_SIZE}
        height={props.height || DEFAULT_SIZE}
        viewBox="0 0 24 24"
        fill={props.color}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
    </svg>
);

export const VideoIcon = React.memo((props: IIconProps): JSX.Element =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || DEFAULT_SIZE}
        height={props.height || DEFAULT_SIZE}
        viewBox="0 0 24 24"
        fill={props.color}
    >
        <polygon points="9.5,7.5 9.5,16.5 16.5,12" />
        <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18.01H4V5.99h16V18.01z" />
    </svg>
);

export const FilterIcon = React.memo((props: IIconProps): JSX.Element =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || DEFAULT_SIZE}
        height={props.height || DEFAULT_SIZE}
        viewBox="0 0 24 24"
        fill={props.color}
    >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </svg>
);

