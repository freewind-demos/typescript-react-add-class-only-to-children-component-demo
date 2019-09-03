import './Container.css';

import React from 'react';
import classnames from 'classnames';

export default function Container({children}: any) {
  return <>{
    React.Children.map(children, child =>
      React.cloneElement(child, {className: classnames(child.props.className, 'container')})
    )
  }</>;
};
