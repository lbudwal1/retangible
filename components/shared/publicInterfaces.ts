"use client"
import { ReactNode } from "react";


export interface HasClass {
    className?: string;
};

export interface HasChildren {
    children: ReactNode;
};

export type HasClassAndChildren = HasClass & HasChildren;

export interface ById<T> {
    [id: string]: T;
};

export interface ByIdNumber<T> {
    [id: number]: T;
};

export interface ByIdWithUndefined<T> {
    [id: string]: T | undefined;
};

export interface ByIdAndIdsStringArray<T> {
    idsArray: string[];
    ResponseObject: ById<T>;
};

export interface SurewayAPIResponse<T> {
    response: T,
    message: string;
    totalRecords: number;
    webserver: string;
};

export interface ToolRentalsResponse<T> extends SurewayAPIResponse<T> {
};

export interface ISurewayTokenRequestBody {
    token: string;
}

export interface ITextAreaWrapperProps {
    onClick?: () => unknown;
};

export interface IPaginationRequest {
    Keywords: string;
    KeywordSearchField: string;
    PageNumber?: number;
    PageSize?: number;
    isActive?: boolean;
};

export interface IIdName {
    id: number;
    name: string;
};

export interface IName {
    name: string;
};