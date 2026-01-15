import s from './Select.module.css'
import {useState, KeyboardEvent} from "react";

type ItemType = {
  title: string,
  value: string,
}

type SelectProps = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[]
}

export const Select = (props: SelectProps) => {

  const [active, setActive] = useState(true)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const selectedItem = props.items.find(item => item.value === props.value)
  const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

  const setActiveHandler = () => {
    setActive(!active)
  }
const onItemClick = (value: any) => {
  props.onChange(value)
  setActiveHandler()
}

  const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log("onKeyUp")
    for(let i = 0; i < props.items.length; i++) {
      if (props.items[i].value === hoveredElementValue) {
        if (props.items[i+1]) {
          props.onChange(props.items[i+1].value)
          break
        }

      }
    }
  }

  return (
    <>
      <select>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value='3'>Kiev</option>
      </select>

      <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
        <span className={s.main} onClick={setActiveHandler}>{selectedItem && selectedItem.title}</span>
        {
          active &&
          <div className={s.items}>
            {props.items.map((item, index: number) =>
              <div onMouseEnter={() => {setHoveredElementValue(item.value)}} className={s.item + " " + (hoveredItem === item ? s.selected : '')} key={index} onClick={()=> {onItemClick(item.value)}}>{item.title}</div>)}
          </div>
        }


      </div>
    </>

  );
};

