 const occurrenceMap = array.reduce((map, item) => {
    map.set(item, (map.get(item) || 0) + 1);
    return map;
  }, new Map());
  return occurrenceMap;
}
