import * as React from 'react';

interface IProps {
  className?: string;
  children: React.ReactElement;
  ratio: number | string;
  style?: {};
}

declare class AspectRatio extends React.Component<IProps> {}
export default AspectRatio;
