export const searchFilter = (searchKey, data) => {
  
  let newData = data.filter(
    (each) =>
      each?.title.toLowerCase().indexOf(searchKey.toLowerCase()) === 0
  );
  return newData;
};
