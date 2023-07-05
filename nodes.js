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

const weatherDetails = {
  still: 'The desert landscape is still, untroubled by the susurration of the heavens. Visibility is good.',
  hazy: 'The air is still, but mists of a lurid hue hang over the desert. Visibility is impaired and landmarks cannot be seen from a distance. Vigilance checks are made with disadvantage.',
  dust_storm: 'The wind blows sheets of blue dust across the desert. Visibility is badly impaired. Traveling under such conditions is possible, but the pace is slowed to half normal speed. A three day journey will take six days, and so on. Vigilance checks are made with disadvantage.',
  sand_storm: 'A howling wind blows a ferocious cloud of azure sand across the desert. Nobody travels in Vaarn’s sandstorms; the PCs must hunker down and wait out the storm. Tents or other makeshift shelters will provide adequate protection. Any encounters rolled during these days are assumed to be seeking shelter from the storm in the same place as the party.',
  heatwave: 'Urth’s dying sun musters all the warmth it can. PCs must consume twice their normal ration of water per day if they wish to travel during a heatwave.',
  worm_pollen: 'The sandworms of the Interior reproduce through a baroque, decade-long process of parthenogenesis, culminating in the explosive release of thousands of melon-sized spores into the atmosphere. This worm-pollen drifts back to Urth in ponderous sticky deluges that can last for weeks. Progress through shifting mounds of the stuff is slowed to half normal speed; the upside is that worm-pollen is edible, and many a starving man has been saved by the timely arrival of spores from the heavens. Treat worm-pollen days as providing d4 rations per player.',
  rain: 'A rare bounty. The parched blue earth is blessed with water. The party may collect 2d6 days of rations per member. In the aftermath of a rainshower, the desert is conquered by a short-lived imperium of majestic flora.',
  prismatic_tempest: 'The sky bruises with clouds of midnight blue. Howling winds carry scouring sheets of sand across the landscape. Thunder rends the air and polychromatic lightning caresses the desert like the tendrils of a jellyfish deity. No travel of any kind is possible, and the PCs will take 3d6 electrical damage every hour they spend above-ground.'
};

function stringToKey(str) {
  str = str.toLowerCase();
  str = str.replace(/[\s-]/g, '_');
  return str;
}

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
  // TODO make first tag have a specific color and move along siblings onClick
  let fragment = document.createDocumentFragment();
  for (let i of weather) {
    let section = fragment.appendChild(document.createElement('details'));
    let detailsKey = stringToKey(i);
    console.log(detailsKey);
    // TODO fix weatherDetails returning undefined
    console.log(weatherDetails.detailsKey);
    section.textContent = detailsKey;
    section.classList.add('weather');
  }
  targetElement.appendChild(fragment);
}
