'use client';

import { useEffect, useState } from 'react';
import { Table, Input, Select } from 'antd';
import { selectionStatus, columns, selectionTags } from './utils/enums';
import {
  MagnifyingGlassIcon,
  PhotoIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
  interface audience {
    id: number;
    name: string;
    tags: string[];
    status: string;
  }

  const [audience, setAudience] = useState<audience[]>([]);
  const [filteredAudience, setFilteredAudience] = useState<audience[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    const audience = fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT || 'DEFAULT_API_ENDPOINT',
    ).then((res) => res.json());
    audience.then((data) => {
      setAudience(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setFilteredAudience(
      audience.filter(
        (audienceFilterItem) =>
          audienceFilterItem.name
            .toLowerCase()
            .includes(search.toLowerCase()) &&
          audienceFilterItem.status
            .toLowerCase()
            .includes(status.toLowerCase()) &&
          audienceFilterItem.tags[0].toLowerCase().includes(tags.toLowerCase()),
      ),
    );
  }, [audience, search, status, tags]);

  return (
    <>
      <div className="mb-10 flex gap-4">
        <div className="flex w-3/4 flex-col">
          <p className="mb-4 ml-2  w-3/4 font-extrabold">Welcome Amanda</p>
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
          placeholder="Select Tags"
          value={tags || undefined}
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
        <Select
          className="mb-5 ml-2 w-1/6"
          placeholder="All Status"
          value={status || undefined}
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
      </div>
      <div>
        <Table
          className="rounded-md border-2 border-gray-200"
          dataSource={filteredAudience}
          columns={columns}
          loading={loading}
        />
      </div>
    </>
  );
}
