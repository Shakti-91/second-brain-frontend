import type { ReactElement } from "react";

export interface ButtonInterface{
    text:string,
    icon?:ReactElement,
    onClick?:()=>void,
    variant:'primary'|'secondry'|'signUp',
    size:'sm'|'md'|'lg',

}

export interface CardInterface{
    type:string,
    title:string,
    link:string,
    _id:string,
    onClick?:()=>void,
     handleYes?:()=>void,
    handleRender?:()=>void
}

export interface ModalInterface{
    open:boolean,
    onClose:()=>void,
    onDelete?:()=>void
    text?:string
}

export interface SharedInterface{
    title:string,
    type:string,
    link:string
}