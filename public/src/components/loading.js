import React from 'react';
import { css } from 'react-emotion';
import { BarLoader } from 'react-spinners';

import "../styles/main.scss";

const override = css`
  position: absolute !important;
  top: 50%;
  left: 50%;
  margin: -1px 0 0 -1px;
  background-color: black !important;
`;

const Loading = () => (
    <div className="loading">
        <small>Loading</small>
        <BarLoader
            className={override}
            width={100}
            height={2}
            color={'#3d8f8f'}
            loading={true}
        />
    </div> 
);

export default Loading;