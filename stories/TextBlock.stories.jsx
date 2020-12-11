import TextBlock from '../components/blocks/TextBlock';

export default {
  title: 'Blocks/Text Block',
  component: TextBlock
};

const Template = (args) => <TextBlock {...args} />;

export const OneLine = Template.bind({});
OneLine.args = {
  text: 'Paragraph #1'
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  text: [
    'Paragraph #1',
    'Paragraph #2',
    'Paragraph #3'
  ]
};
