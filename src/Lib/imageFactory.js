function getImages(index) {
  return [{
  category: ['stage'],
  thumb: 's1.jpg',
  src: '1.jpg',
  w: 900,
  h: 600
}, {
  category: ['portrait'],
  thumb: 's7.jpg',
  src: '7.jpg',
  w: 900,
  h: 600
}, {
  category: ['portrait'],
  thumb: 's11.jpg',
  src: '11.jpg',
  w: 600,
  h: 900
}, {
  category: ['portrait'],
  thumb: 's13.jpg',
  src: '13.jpg',
  w: 1067,
  h: 600
}, {
  category: ['stage'],
  thumb: 's2.jpg',
  src: '2.jpg',
  w: 900,
  h: 600
}, {
  category: ['stage'],
  thumb: 's17.jpg',
  src: '17.jpg',
  w: 1067,
  h: 600
}, {
  category: ['stage'],
  thumb: 's21.jpg',
  src: '21.jpg',
  w: 600,
  h: 900
}, {
  category: ['stage'],
  thumb: 's12.jpg',
  src: '12.jpg',
  w: 1067,
  h: 600
}, {
  category: ['stage'],
  thumb: 's19.jpg',
  src: '19.jpg',
  w: 1067,
  h: 600
}, {
  category: ['documentary'],
  thumb: 's3.jpg',
  src: '3.jpg',
  w: 900,
  h: 600
}, {
  category: ['documentary'],
  thumb: 's4.jpg',
  src: '4.jpg',
  w: 1280,
  h: 600
}, {
  category: ['documentary'],
  thumb: 's5.jpg',
  src: '5.jpg',
  w: 600,
  h: 900
}, {
  category: ['documentary'],
  thumb: 's8.jpg',
  src: '8.jpg',
  w: 900,
  h: 600
}, {
  category: ['documentary'],
  thumb: 's20.jpg',
  src: '20.jpg',
  w: 600,
  h: 900
}, {
  category: ['documentary'],
  thumb: 's10.jpg',
  src: '10.jpg',
  w: 1067,
  h: 600
}];
}

var tags = [{
  key: 'all',
  name: '全部'
}, {
  key: 'protrait',
  name: '人像'
}];

var DEFAULT_INDEX = 'all';

export default {
  DEFAULT_INDEX,
  getImages,
  tags,
};