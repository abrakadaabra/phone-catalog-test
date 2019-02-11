import React, { Children } from 'react';

export default ({children}) => <div>{ Children.toArray(children) }</div>