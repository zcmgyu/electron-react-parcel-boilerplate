/* eslint-env jest */

import React from 'react';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Root from '../../pages/root';

test('root page', () => {
  const component = Renderer.create(
    <MemoryRouter><Root /></MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});