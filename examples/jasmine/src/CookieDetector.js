function detectCookie(items) {
  var i, item;
  for (i = 0; i < items.length; i++) {
    item = items[i];
    if (item.toLowerCase().indexOf("cookie") !== -1) {
      return true;
    }
  }

  return false;
}
