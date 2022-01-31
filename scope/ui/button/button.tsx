import React, { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <div>
      {children}
      <hr/>
      <button>My super cool button!</button>
      <hr/>
      <button>Now two of them!</button>
    </div>
  );
}
