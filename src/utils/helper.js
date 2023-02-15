export const filterData = (searchText, restaurants) => {
  return restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
}

//Check if an object is empty 
export const isEmptyObject =  (obj)  => {
  return Object.keys(obj).length === 0;
}
