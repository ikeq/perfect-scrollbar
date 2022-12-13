export function div(className) {
  const div = document.createElement('div');
  div.className = className;
  return div;
}

const elMatches = Element.prototype.matches;

export function matches(element, query) {
  return elMatches.call(element, query);
}

export function remove(element) {
  element.remove();
}

export function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, (child) => matches(child, selector));
}
