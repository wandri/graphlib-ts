var Graph = require("../..").Graph;
var bellmanFord = require("../..").alg.bellmanFord;
var dijkstra = require("../..").alg.dijkstra;
var shortestPathsTests = require("./utils/shortest-paths-tests");

describe("alg.dijkstra", function() {
  shortestPathsTests(bellmanFord);


  it("throws an Error if it encounters a negative edge weight", function() {
    var g = new Graph();
    g.setEdge("a", "b",  1);
    g.setEdge("a", "c", -2);
    g.setEdge("b", "d",  3);
    g.setEdge("c", "d",  3);

    expect(function() { dijkstra(g, "a", weightFn(g)); }).toThrow();
  });
});

function weightFn(g) {
  return function(e) {
    return g.edge(e);
  };
}
