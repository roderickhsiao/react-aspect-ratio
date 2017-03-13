import React from 'react';
import { shallow } from 'enzyme';
import AspectRatio from '../index';

describe('Aspect Ratio', () => {
  it('should render wrapper for children', () => {
    const innerImage = (<img src="https://foo.bar" role="presentation" />);
    const component = shallow(<AspectRatio ratio="4/3">{innerImage}</AspectRatio>);

    const elm = component.find('.react-aspect-ratio-placeholder');
    expect(elm.length).toBe(1);
  });
});
