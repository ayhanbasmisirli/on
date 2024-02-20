import { PhotoIcon } from '@heroicons/react/24/outline';
import { Checkbox } from 'antd';
const columns = [
  {
    title: () => <p className="ml-8">Audience Name</p>,
    dataIndex: 'name',
    key: 'name',
    render: (name: string) => {
      return (
        <p className="flex items-center">
          <Checkbox className="h-6 w-6" />
          <PhotoIcon className="h-6 w-6 bg-slate-400 p-1" />
          <span className="ml-2">{name}</span>
        </p>
      );
    },
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: string[]) => tags[0],
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => '...',
  },
];

const selectionStatus = ['', 'active', 'passive'];
const selectionTags = ['', 'Development', 'Marketing', 'Design'];

export { columns, selectionStatus, selectionTags };
