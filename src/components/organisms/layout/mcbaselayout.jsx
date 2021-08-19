import React from 'react';
import LoadingSpinerComponent from '../../molecules/spinner.component';
import Header from '../header/header';
import './mcbaselayout.css';

function MCBaseLayout(props) {
  return (
    <div>
      <Header />
      <LoadingSpinerComponent />
      <div className="paddingTop64px">{props.children}</div>
    </div>
  );
}
export default MCBaseLayout;
