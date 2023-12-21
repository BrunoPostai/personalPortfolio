"use client"
import React, { ReactNode } from 'react';
import "../i18nify";

export default function Provider({children}:{children:ReactNode}){
  return <>
    {children}
  </>;
}

