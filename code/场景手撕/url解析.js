/**
 *
 * @param {string} url
 */
function getSearchParams(url) {
  const params = url.split('?')[1];
  const pArr = params.split('&');
  return pArr.reduce((pre, cur) => {
    let [key, value] = cur.split('=');
    value = decodeURIComponent(value);
    value = isJson(value) ? JSON.parse(value) : value;
    return {
      ...pre,
      [key]: value,
    };
  }, {});
}

function isJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

const url =
  'https://fliggy.com/demo?name=feizhu&from=home&job=frontend&extraInfo=%7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D';

// 测试代码请勿修改
if (
  JSON.stringify(getSearchParams(url)) ===
  JSON.stringify({
    name: 'feizhu',
    from: 'home',
    job: 'frontend',
    extraInfo: { a: 'b', c: 'd' },
  })
) {
  console.log('恭喜回答正确!');
} else {
  console.log('还差一点');
}
