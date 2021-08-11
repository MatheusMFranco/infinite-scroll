import { Title } from '.';

export default {
  title: 'Title',
  component: Title,
  args: {
    children: 'Legacy',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Title {...args} />
    </div>
  );
};
