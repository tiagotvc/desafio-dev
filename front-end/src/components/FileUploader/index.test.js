import React from 'react';
import FileUploader from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('FileUploader ', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<FileUploader/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
    });
});