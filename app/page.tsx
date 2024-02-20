'use client';

import { useEffect, useState } from 'react';
import { testdata } from './api/testdata';
import { Table, Input, Select } from 'antd';
import { selectionStatus, columns, selectionTags } from './utils/enums';
import {
  MagnifyingGlassIcon,
  PhotoIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
export default function Page() {
  const [filteredAudience, setFilteredAudience] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [status, setStatus] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setFilteredAudience(
      testdata.filter(
        (audience) =>
          audience.name.toLowerCase().includes(search.toLowerCase()) &&
          audience.status.toLowerCase().includes(status.toLowerCase()) &&
          audience.tags[0].toLowerCase().includes(tags.toLowerCase()),
      ),
    );
  }, [search, status, tags]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mb-10 flex gap-4">
        <div className="flex w-3/4 flex-col">
          <p className="ml-2  w-3/4 font-extrabold">Welcome Amanda</p>
          <p className="ml-2  w-3/4 text-xs font-extralight text-black/10">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'short',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="flex w-1/4 justify-end gap-2">
          <BellIcon className="h-7 w-7 rounded-lg border border-slate-300 p-1 text-[#bdbcbc]" />
          <PhotoIcon className="h-7 w-7 rounded-lg bg-[#d9d9d9] p-1" />
        </div>
      </div>
      <div className="flex gap-4">
        <p className="mb-5 ml-2  w-3/4 font-extrabold">Audience List</p>
        <Input
          className="mb-5"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          prefix={<MagnifyingGlassIcon className="h-6 w-6 text-[#bdbcbc]" />}
        />
        <Select
          className="mb-5 ml-2 w-1/6"
          placeholder="Select a status"
          value={status}
          onChange={(value: string) => {
            setStatus(value);
          }}
        >
          {selectionStatus.map((status: string) => (
            <Select.Option key={status} value={status}>
              {status}
            </Select.Option>
          ))}
        </Select>
        <Select
          className="mb-5 ml-2 w-1/6"
          placeholder="Select a tags"
          value={tags}
          onChange={(value: string) => {
            setTags(value);
          }}
        >
          {selectionTags.map((status: string) => (
            <Select.Option key={status} value={status}>
              {status}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>
        <Table
          className="rounded-md border-2 border-gray-200"
          dataSource={filteredAudience}
          columns={columns}
        />
      </div>
    </>
  );
}
