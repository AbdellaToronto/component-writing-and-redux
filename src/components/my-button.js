import React from 'react';

export const FancyButton = ({children, ...restProps}) =>
  <button style={{minWidth: '2em', fontSize: '2em', borderRadius: '15px'}} {...restProps}>{children}</button>;