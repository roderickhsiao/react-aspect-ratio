import * as React from 'react';

interface IProps {
    ratio: number | string;
    children: React.ReactElement;
    style?: {};
}

declare class AspectRatio extends React.Component<IProps>{}
export default AspectRatio;
