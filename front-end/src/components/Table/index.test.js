import React from 'react';
import Table from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Table ', () => {
    const data = {name:'tiago',debeti:'00'}
    it('renders correctly', () => {
      const tree = renderer
      .create(<Table data/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
      });
  });