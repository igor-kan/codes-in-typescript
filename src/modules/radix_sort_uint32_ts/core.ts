export function radixSortU32(arr: Uint32Array): Uint32Array {
  let src = new Uint32Array(arr);
  let dst = new Uint32Array(src.length);
  const count = new Int32Array(256);
  for (let shift = 0; shift < 32; shift += 8) {
    count.fill(0);
    for (let i = 0; i < src.length; i++) count[(src[i] >>> shift) & 0xff]++;
    let acc = 0;
    for (let b = 0; b < 256; b++) { const c = count[b]; count[b] = acc; acc += c; }
    for (let i = 0; i < src.length; i++) {
      const b = (src[i] >>> shift) & 0xff;
      dst[count[b]++] = src[i];
    }
    const tmp = src; src = dst; dst = tmp;
  }
  return src;
}
