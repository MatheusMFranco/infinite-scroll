import { Table } from '.';
import mock from './mock.js';

export default {
  title: 'Table',
  component: Table,
  args: {
    data: mock.data,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Table {...args} />
    </div>
  );
};
