function promiseTimeout(promise, time) {
  function timePro(time) {
    return new promise(function (resolve, reject) {
      setTimeout(function () {
        reject('超时');
      }, time);
    });
  }

  return Promise.race([promise, timePro]);
}
 