function isEnoughCapacity(products, containerSize) {
  const enoughCapacity = Object.values(products);
  let total = 0;
  for (const product of enoughCapacity) {
    if (enoughCapacity[product] < containerSize) {
      total += enoughCapacity[product];
      return true;
    } else {
      return false;
    }
  }
}
