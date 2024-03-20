import update from "../utils/update_data";
const cities = ["Чита", "Екатеринбург", "Москва", "Новосибирск", "Таллин"];

function handleSelect(event) {
  update(event.target.value);
}

function City() {
  const options = cities.map((item, index) => {
    if (index === 0) {
      return (
        <option value={item} key={index} defaultValue>
          {item}
        </option>
      );
    } else {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    }
  });
  return (
    <select name="city" id="city" onChange={handleSelect}>
      {options}
    </select>
  );
}

export default City;
