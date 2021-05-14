import { render, screen } from '@testing-library/react';
import React from 'react';
import { Post, PostProps } from './Post';

const setup = (props?: PostProps) => render(<Post {...props} />);

const id = 'an id';
const title = 'a title';
const date = 'a date';
const contentHtml = 'a content';

describe('<Post />', () => {
  describe('rendering', () => {
    beforeEach(() => {
      setup({ post: { id, title, date, contentHtml } });
    });
    it('should render component elements', () => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
