import React from 'react';
import Heading from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Heading ', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<Heading>Render Test</Heading>)
    .toJSON();
  expect(tree).toMatchSnapshot();
    });
});