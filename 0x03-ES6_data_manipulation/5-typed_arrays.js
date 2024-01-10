export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const data = DataView(buffer);
  data.setInt8(position, value);
  return data;
}
