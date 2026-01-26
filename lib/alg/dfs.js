var reduce = require("./reduce");

module.exports = dfs;

/*
 * Pre- or post-order traversal on the input graph.
 * Returns an array of the nodes in the order they were visited.
 *
 * If the order is not "post", it will be treated as "pre".
 */
function dfs(g, vs, order) {
  return reduce(g, vs, order, function (acc, v) {
    acc.push(v);
    return acc;
  }, []);
}
