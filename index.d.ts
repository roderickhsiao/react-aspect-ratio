import * as React from 'react';

interface IProps {
  className?: string;
  children: React.ReactElement;
  ratio: number | string;
  style?: {};
}

declare class AspectRatioClassComponent extends React.Component<IProps> {}
export default AspectRatioClassComponent;
export const AspectRatio: React.FC<Props> = () => React.ReactElement;
