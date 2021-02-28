const newsFeeds = [
  {
    label: 'LSM',
    code: 'lsm',
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
      {
        label: 'Ekonomika',
        url: 'https://www.lsm.lv/rss/?lang=lv&catid=22',
        current: false,
      },
      {
        label: 'Pasaulē',
        url: 'https://www.lsm.lv/rss/?lang=lv&catid=21',
        current: false,
      },
      {
        label: 'Ziņu analīze',
        url: 'https://www.lsm.lv/rss/?lang=lv&catid=65',
        current: false,
      },
      {
        label: 'Ziņas vieglajā valodā',
        url: 'https://www.lsm.lv/rss/?lang=lv&catid=21710',
        current: false,
      },
    ],
  },
  {
    label: 'Delfi',
    code: 'delfi',
    current: false,
    feeds: [
      {
        label: 'Visas ziņas',
        url: 'https://www.delfi.lv/rss/?channel=delfi',
        current: true,
      },
      {
        label: 'Sabiedrība',
        url: 'https://www.delfi.lv/rss/?channel=sabiedriba',
        current: false,
      },
      {
        label: 'Izklaide',
        url: 'https://www.delfi.lv/rss/?channel=izklaide',
        current: false,
      },
      {
        label: 'Kultūra',
        url: 'https://www.delfi.lv/rss/?channel=kultura',
        current: false,
      },
      {
        label: 'Laika ziņas',
        url: 'https://www.delfi.lv/rss/?channel=laikazinas',
        current: false,
      },
    ],
  },
];

export default newsFeeds;
