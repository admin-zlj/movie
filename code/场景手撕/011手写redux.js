class MyCreatStore {
	
  constructor(reducer) {
    this.reducer = reducer;
    this.state = reducer();
    this.cbList = [];
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.cbList.forEach((cb) => cb && cb());
  }

  subscibe(cb) {
    this.cbList.push(cb);
    let index = this.cbList.length - 1;
    return () => {
      this.cbList[index] = null;
    };
  }

  getState() {
    return this.state;
  }
}
const reducer = (pre, action) => pre;
let s = new MyCreatStore(reducer);
let dis=s.subscibe(() => {
  console.log('111', 111);
});
s.dispatch({ type: '' });
dis()
