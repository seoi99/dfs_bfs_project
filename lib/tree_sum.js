const { breadthFirstArray } = require('./breadth_first_array');


function treeSum(root) {
  if (!root) return 0
  let result = breadthFirstArray(root).reduce((acc, el) => acc + el);
  return result;
}


module.exports = {
    treeSum
};
