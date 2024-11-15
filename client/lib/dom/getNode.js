function getNode(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);
  return context.querySelector(node);
}

getNode('.about');

function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);
  return context.querySelectorAll(node);
}
