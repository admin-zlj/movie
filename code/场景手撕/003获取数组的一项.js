const data = [
  {
    id: 1100,
    name: '河南',
    children: [
      {
        id: 11021,
        name: '郑州',
        children: [
          {
            id: 1102211,
            name: '中原区',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 1102,
    name: '浙江',
    children: [
      {
        id: 111201,
        name: '杭州',
        children: [],
      },
    ],
  },
  {
    id: 1230,
    name: '上海',
    children: [
      {
        id: 1103231,
        name: '某区',
        children: [],
      },
    ],
  },
];
/**
 *
 * @param {[]} data
 * @param {Number} id
 */
function getNameById(data, id) {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item.id === id) {
      return item.name;
    }
    if (item.children && item.children.length > 0) {
      return getNameById(item.children, id);
    }
  }
}
console.log(getNameById(data, 1102211));
