function sockMerchant(n: number, ar: number[]): number {
  const socksMap = ar.reduce((entryMap, e) => {
    const socks = entryMap.get(e) || [];
    return entryMap.set(e, [...socks, e]);
  }, new Map());

  let pairs = 0;

  socksMap.forEach((value) => {
    if (value.length > 1) {
      if (value.length % 2 === 0) {
        pairs += value.length / 2;
      } else {
        pairs += (value.length - 1) / 2;
      }
    }
  });
  return pairs;
}

export default sockMerchant;
