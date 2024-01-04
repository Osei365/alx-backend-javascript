export default function createIteratorObject(report) {
  return (function* _() {
    for (const val of Object.values(report.allEmployees)) {
      for (const item of val) {
        yield item;
      }
    }
  }());
}
