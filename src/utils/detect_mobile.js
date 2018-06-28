if (typeof window.hasVirtualKeyboard === 'undefined') {
  window.hasVirtualKeyboard = 'ontouchstart' in document.documentElement;
}
