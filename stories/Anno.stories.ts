import { Liquid } from 'liquidjs';
import { withActions } from '@storybook/addon-actions/decorator';

import { fireEvent, userEvent, within } from '@storybook/testing-library';

const engine = new Liquid({
  root: './snippets',
  extname: '.liquid',
});

const f = engine.parseFileSync('anno-bar');
const template: (args: Record<string, unknown>) => string = (args) =>
  engine.renderSync(f, args);

const defaultArgs = {
  section: {
    settings: {
      nav_offset: 10,
    },
  },
  blocks: [
    {
      settings: {
        text: 'Ho!',
        link: '',
        fontcolor: '#012FF00',
        bgcolor: '#FF334B',
      },
    },
    {
      settings: {
        text: 'Hi!',
        link: '',
        fontcolor: '#081FF00',
        bgcolor: '#08FF00',
      },
    },
  ],
};

export default {
  title: 'Announcement bar',
  render: (args) => template(args),
  parameters: {
    actions: {
      handles: ['click .slider-nav'],
    },
  },
  decorators: [withActions],
};

export const Single = {
  args: defaultArgs,
};

export const SingleWithAction = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const c = within(canvasElement);

    await userEvent.click(c.getByRole('button'));
  },
};

export const SingleWithLink = {
  args: {
    ...defaultArgs,
    blocks: [
      {
        ...defaultArgs.blocks[0],
        settings: {
          ...defaultArgs.blocks[0].settings,
          link: 'https://www.google.com',
        },
      },
    ],
  },
};

export const Two = {
  args: {
    ...defaultArgs,
    blocks: [
      {
        settings: {
          text: 'Hi!',
          link: '',
          fontcolor: '#081FF00',
          bgcolor: '#08FF00',
        },
      },
      ...defaultArgs.blocks,
    ],
  },
};
