import { Liquid } from 'liquidjs';

const engine = new Liquid({
  root: './snippets',
  extname: '.liquid',
});

const f = await engine.parseFile('share-button');
const template = (args) => engine.renderSync(f, args);

export default {
  title: 'Share button',
  render: (args) => template(args),
};

export const Default = {
  args: {
    section: {
      id: 'Default',
    },
    block: {
      id: 'label',
      shopify_attributes: {},
      settings: {
        share_label: 'Share me',
      },
    },
    share_link: 'dassaas',
  },
};
