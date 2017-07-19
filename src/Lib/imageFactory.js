function getImages(index) {
  return [];
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