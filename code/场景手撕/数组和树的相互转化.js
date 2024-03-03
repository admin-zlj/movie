let arr = [
  { id: 0, name: '1', parent: -1, childNode: [] },
  { id: 1, name: '1', parent: 0, childNode: [] },
  { id: 99, name: '1-1', parent: 1, childNode: [] },
  { id: 111, name: '1-1-1', parent: 99, childNode: [] },
  { id: 66, name: '1-1-2', parent: 99, childNode: [] },
  { id: 1121, name: '1-1-2-1', parent: 112, childNode: [] },
  { id: 12, name: '1-2', parent: 1, childNode: [] },
  { id: 2, name: '2', parent: 0, childNode: [] },
  { id: 21, name: '2-1', parent: 2, childNode: [] },
  { id: 22, name: '2-2', parent: 2, childNode: [] },
  { id: 221, name: '2-2-1', parent: 22, childNode: [] },
  { id: 3, name: '3', parent: 0, childNode: [] },
  { id: 31, name: '3-1', parent: 3, childNode: [] },
  { id: 32, name: '3-2', parent: 3, childNode: [] },
];
/**
 *
 * @param {[]} arr
 */
function arrayToTree(arr) {
  const getNodeById = (arr, pid) => {
    const farr = arr.filter((i) => i.parent === pid);
    if (farr.length > 0) {
      for (let i = 0; i < farr.length; i++) {
        const element = farr[i];
        element.childNode = getNodeById(arr, element.id);
      }
    }
    return farr;
  };
  return getNodeById(arr, -1);
}

// console.log(JSON.stringify(arrayToTree(arr)));

let tree = [
  {
    id: 0,
    name: '1',
    parent: -1,
    childNode: [
      {
        id: 1,
        name: '1',
        parent: 0,
        childNode: [
          {
            id: 99,
            name: '1-1',
            parent: 1,
            childNode: [
              { id: 111, name: '1-1-1', parent: 99, childNode: [] },
              { id: 66, name: '1-1-2', parent: 99, childNode: [] },
            ],
          },
          { id: 12, name: '1-2', parent: 1, childNode: [] },
        ],
      },
      {
        id: 2,
        name: '2',
        parent: 0,
        childNode: [
          { id: 21, name: '2-1', parent: 2, childNode: [] },
          {
            id: 22,
            name: '2-2',
            parent: 2,
            childNode: [{ id: 221, name: '2-2-1', parent: 22, childNode: [] }],
          },
        ],
      },
      {
        id: 3,
        name: '3',
        parent: 0,
        childNode: [
          { id: 31, name: '3-1', parent: 3, childNode: [] },
          { id: 32, name: '3-2', parent: 3, childNode: [] },
        ],
      },
    ],
  },
];
function treeToArray(tree) {
  let resArr = [];
  const getArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      resArr.push({ ...element, childNode: [] });
      if (element.childNode.length > 0) {
        getArr(element.childNode);
      }
    }
  };
  getArr(tree);
  return resArr;
}
console.log(treeToArray(tree));
