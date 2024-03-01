import * as React from 'react';

export function HelloWorld({ children, className, verbose }) {
  return (
    <div className={className} style={{ padding: '20px' }}>
      <p>Hello there! {verbose && 'Really nice to meet you!'}</p>
      <div>{children}</div>
    </div>
  );
}