'use client';

import News from '@/app/components/News/newsPage';

export default function NewsClient({
  item,
  tag,
  date
}: {
  item: any;
  tag: string;
  date: string;
}) {

  return (
    <News
      item={item}
      tag={tag}
      date={date}
    />
  );
}