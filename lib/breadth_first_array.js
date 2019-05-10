function breadthFirstArray(root) {
  let queue = [root];
  let result = [];
  while (queue.length !== 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let v = queue.shift();
      result.push(v.val);
      if (v.left) queue.push(v.left);
      if (v.right) queue.push(v.right);
    }
  }
  return result
}

module.exports = {
    breadthFirstArray
};
