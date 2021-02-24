const newsFeeds = [
  {
    label: 'LSM',
    current: true,
    feeds: [
      {
        label: 'Visas ziņas',
        url: 'https://www.lsm.lv/rss/?lang=lv&catid=14',
        current: true,
      },
      {
        label: 'Populārākās ziņas',
        url: 'https://www.lsm.lv/rss/?lang=lv&catid=14&popular',
        current: false,
      },
      {
        label: 'Latvijā',
        url: 'https://www.lsm.lv/rss/?lang=lv&catid=20',
        current: false,
      },
    ],
  },
  {
    label: 'Delfi',
    current: false,
    feeds: [
      {
        label: 'Visas ziņas',
        url: 'https://www.lsm.lv/rss/?lang=lv&catid=14',
        current: true,
      },
    ],
  },
];

export default newsFeeds;
