function depthFirstSearch(root, targetVal) {
  let stack = [root];

  while (stack.length !== 0) {
    let v = stack.pop();
    if (v.val === targetVal) {
      return v;
    }
    if (v.right) stack.push(v.right)
    if (v.left) stack.push(v.left)
  }
  return null
}


module.exports = {
    depthFirstSearch
};
