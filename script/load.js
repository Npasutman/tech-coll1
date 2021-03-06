var moreButton = document.querySelector('.goods button');
var elementsNode = document.querySelector('.goods .elements');

function createItemNode (item){
  var itemNode = document.createElement('div');
  itemNode.classList.add('item');

  var previewNode = document.createElement('span') ;
  previewNode.classList.add('preview');

  var imgNode = document.createElement('img') ;
  imgNode.src = 'goods/' + item.preview;

  var titleNode = document.createElement('span') ;
  titleNode.classList.add('title');
  titleNode.appendChild(document.createTextNode(item.title));

  var priceNode = document.createElement('span');
  priceNode.classList.add('price');
  priceNode.appendChild(document.createTextNode(item.price + 'Р'));

  previewNode.appendChild(imgNode);
  itemNode.appendChild(previewNode);
  itemNode.appendChild(titleNode);
  return itemNode;

}

moreButton.addEventListener('click', function (){
loadJSON('data.json',function(data){
  var nodes = data.goods.map(createItemNode);
  nodes.forEach(function (item){
    elementsNode.appendChild(item);
  });

});
});




document.addEventListener('scroll', function (){
  var scrollTop = document.body.scrollTop;
            console.log(scrollTop);
            console.log(window.innerHeight);
            console.log( document.body.scrollHeight-window.innerHeight);
	  if (scrollTop%(document.body.scrollHeight-window.innerHeight)==0  && scrollTop!==0) {
          loadJSON('data.json',function(data){
              var nodes = data.goods.map(createItemNode);
              nodes.forEach(function (item){
              elementsNode.appendChild(item);
              });
          });
    }
}

);
