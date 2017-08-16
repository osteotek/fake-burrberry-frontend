import React from 'react';
import Responsive from 'react-responsive';

export const Lg = ({ children }) =>
  <Responsive minWidth={992}>
    {children}
  </Responsive>;

export const Md = ({ children }) =>
  <Responsive minWidth={768} maxWidth={991}>
    {children}
  </Responsive>;

export const Xs = ({ children }) =>
  <Responsive minWidth={0} maxWidth={768}>
    {children}
  </Responsive>;

export const XsMd = ({ children }) =>
  <Responsive minWidth={0} maxWidth={991}>
    {children}
  </Responsive>;

export const MdLg = ({ children }) =>
  <Responsive minWidth={768}>
    {children}
  </Responsive>;
