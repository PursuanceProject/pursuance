if (Object && !Object.values) {
  Object.values = function(obj) {
    var arr = [];
    for (var key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  };
}
