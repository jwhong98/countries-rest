export const numWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const stringList = (arr) => {
  const temp = [];
  arr.map((el) => temp.push(el.name));
  return temp.join(", ");
};
