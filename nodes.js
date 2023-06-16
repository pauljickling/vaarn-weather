class Node {
  constructor(weather, index) {
    this.weather = weather;
    this.index = index;
    this.adj = null;
  }

  addAdj(nodes) {
    this.adj = nodes;
  }
}

const node0 = new Node('Still', 0);
const node1 = new Node('Worm-Pollen', 1);
const node2 = new Node('Hazy', 2);
const node3 = new Node('Still', 3);
const node4 = new Node('Hazy', 4);
const node5 = new Node('Still', 5);
const node6 = new Node('Dust Storm', 6);
const node7 = new Node('Still', 7);
const node8 = new Node('Worm-Pollen', 8);
const node9 = new Node('Hazy', 9);
const node10 = new Node('Hazy', 10);
const node11 = new Node('Still', 11);
const node12 = new Node('Dust Storm', 12);
const node13 = new Node('Sand Storm', 13);
const node14 = new Node('Hazy', 14);
const node15 = new Node('Clear', 15);
const node16 = new Node('Sand Storm', 16);
const node17 = new Node('Clear', 17);
const node18 = new Node('Dust Storm', 18);
const node19 = new Node('Clear', 19);
const node20 = new Node('Worm-Pollen', 20);
const node21 = new Node('Dust Storm', 21);
const node22 = new Node('Dust Storm', 22);
const node23 = new Node('Sand Storm', 23);
const node24 = new Node('Prismatic Tempest', 24);
const node25 = new Node('Dust Storm', 25);
const node26 = new Node('Dust Storm', 26);
const node27 = new Node('Heat Wave', 27);
const node28 = new Node('Heat Wave', 28);
const node29 = new Node('Heat Wave', 29);
const node30 = new Node('Heat Wave', 30);
const node31 = new Node('Still', 31);
const node32 = new Node('Sand Storm', 32);
const node33 = new Node('Rain', 33);
const node34 = new Node('Sand Storm', 34);
const node35 = new Node('Sand Storm', 35);
const node36 = new Node('Still', 36);

node0.addAdj([1, 2, 3, 4, 5, 6]);
node1.addAdj([8, 9, 2, 0, 6, 7]);
node2.addAdj([9, 10, 11, 3, 0, 1]);
node3.addAdj([2, 11, 12, 13, 4, 0]);
node4.addAdj([0, 3, 13, 14, 15, 5]);
node5.addAdj([6, 0, 4, 15, 16, 17]);
node6.addAdj([7, 1, 0, 5, 17, 18]);
node7.addAdj([20, 8, 1, 6, 18, 19]);
node8.addAdj([21, 22, 9, 1, 7, 20]);
node9.addAdj([22, 23, 10, 2, 1, 8]);
node10.addAdj([23, 24, 25, 11, 2, 9]);
node11.addAdj([10, 25, 26, 12, 3, 2]);
node12.addAdj([11, 26, 27, 28, 13, 3]);
node13.addAdj([3, 12, 28, 29, 14, 4]);
node14.addAdj([4, 13, 29, 30, 31, 15]);
node15.addAdj([5, 4, 14, 31, 32, 16]);
node16.addAdj([17, 5, 15, 32, 33, 34]);
node17.addAdj([18, 6, 5, 16, 34, 35]);
node18.addAdj([19, 7, 6, 17, 35, 36]);
node19.addAdj([32, 20, 7, 18, 36, 26]);
node20.addAdj([31, 21, 8, 7, 19, 25]);
node21.addAdj([30, 21, 22, 8, 20, 24]);
node22.addAdj([22, 25, 23, 9, 8, 21]);
node23.addAdj([28, 23, 24, 10, 9, 22]);
node24.addAdj([24, 24, 24, 25, 10, 23]);
node25.addAdj([24, 25, 20, 26, 11, 10]);
node26.addAdj([25, 21, 26, 27, 12, 11]);
node27.addAdj([26, 27, 36, 24, 28, 12]);
node28.addAdj([12, 27, 35, 23, 29, 13]);
node29.addAdj([13, 28, 34, 22, 30, 14]);
node30.addAdj([14, 29, 33, 21, 30, 31]);
node31.addAdj([15, 14, 30, 31, 26, 32]);
node32.addAdj([16, 15, 31, 19, 32, 33]);
node33.addAdj([34, 16, 32, 33, 33, 33]);
node34.addAdj([35, 17, 16, 33, 34, 29]);
node35.addAdj([36, 18, 17, 34, 22, 35]);
node36.addAdj([33, 19, 18, 35, 36, 27]);

const graph = [node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];

function traverseGraph(currentNode) {
  let die = Math.floor(Math.random() * 6);
  let nextNode = currentNode.adj[die];
  currentNode = graph[nextNode];
  return currentNode;
}

function getWeather(n) {
  let weather = [];
  let currentNode = node0;
  while (n > 0) {
    currentNode = traverseGraph(currentNode);
    weather.push(currentNode.weather);

    n--;
  }
  return weather;
}

function addWeather() {
  event.preventDefault();
  let targetElement = document.getElementById('weatherOutput');
  let n = document.getElementById('days').value;
  let weather = getWeather(n);
  // TODO stylize tags
  let fragment = document.createDocumentFragment();
  for (let i of weather) {
    let section = fragment.appendChild(document.createElement('section'));
    section.textContent = i;
  }
  document.body.appendChild(fragment);
}
