/**
 * 
 * @param {Element} el 
 */
export function removeElement(el) {
  // el.remove(); // Pas compatible IE
  el.parentElement.removeChild(el); // existe depuis toujours
}