import {Select} from "./Select.tsx";
import {useMemo, useState} from "react";

export default {
  title: 'select',
  component: Select
}

const initialCities = [
  {value: '1', title: 'Minsk'},
  {value: '2', title: 'Moscow'},
  {value: '3', title: 'Kiev'},
  {value: '4', title: 'London'},
  {value: '5', title: 'Tokyo'},
  {value: '6', title: 'Oslo'}
];


export const SelectWithValue = () => {
  const [value, setValue] = useState('2')
  const [citiesList, setCitiesList] = useState(initialCities);
  const [counter, setCounter] = useState(0)

  const addNewCity = () => {

    const newCityItem = {
      value: new Date().getTime().toString(),
      title: "Moro"
    };
    setCitiesList([...citiesList, newCityItem]);


  };

  const filteredCities = useMemo(() => {
    console.log("bla")
    const filteredCities = citiesList.filter(city =>
      city.title.toLowerCase().includes('o'))


    return filteredCities;
  }, [citiesList]);

  return <>

    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      {counter}

      <button onClick={addNewCity}>
        Добавить
      </button>
    </div>
    <Select
      onChange={setValue}
      value={value}
      items={filteredCities}
    />


  </>
}


export const SelectWithoutValue = () => {
  const [value, setValue] = useState(null)
  return <>

    <Select
      value={value}
      onChange={setValue}
      items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'}
      ]}
    />
  </>
}

