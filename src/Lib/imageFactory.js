var images = require('./images.json');

function getImages(index) {
  index = index || 'all';
  if (index === 'all') {
    return images;
  }

  var select = [];
  for(var i = 0; i < images.length; i++) {
    if (images[i].category.indexOf(index) < 0) {continue;}
    select.push(images[i]);
  }
  return select;
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