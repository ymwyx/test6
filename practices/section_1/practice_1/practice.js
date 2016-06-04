function collect_same_elements(collection_a, collection_b) {
  var arr_C = [];
  var i, j;

  for (i = 0; i < collection_a.length; i++)
    for (j = 0; j < collection_b.length; j++) {
      if (collection_a[i] == collection_b[j]) {
        arr_C.push(collection_a[i]);
      }
    }

  return (arr_C);
}

module.exports = collect_same_elements;
