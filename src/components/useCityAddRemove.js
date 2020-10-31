import { ref } from "vue";

const useCityAddRemove = () => {
  const cities = ref(["London", "Berlin", "Roma"]);
  const addCity = (city) => {
    cities.value = [...cities.value, city];
  };

  const removeCity = (city) => {
    cities.value = cities.value.filter((p) => p != city);
  };
  return {
    cities,
    addCity,
    removeCity,
  };
};

export default useCityAddRemove();
