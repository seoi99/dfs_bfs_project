function treeHeight(root) {
  if (!root) return -1;
  let height = 0;
  let queue = [root];
  while (queue.length !== 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let v = queue.shift();
      if (v.left) queue.push(v.left)
      if (v.right) queue.push(v.right)
    }
    height++;
  }
  return height - 1
}


module.exports = {
    treeHeight
};
