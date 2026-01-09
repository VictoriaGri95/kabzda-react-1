

import {type ChangeEvent, useRef, useState} from "react";

export default {
  title: 'input',

}


//
// const onChangeHandlerCallback = action('onChangeCallback');

export const UncontrolledInput = () => <input />;

export const UncontrolledInputWithTrackedValue = () => {
  const [value, setValue] = useState('')
  return <>
    <input onChange={(e) => setValue(e.currentTarget.value)} />
    {value}
  </>

}

export const GetValueUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const InputRef = useRef<HTMLInputElement>(null)

  const onClickHandler = () => {
    const el = InputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return <>
    <input ref={InputRef}/>
    <button onClick={onClickHandler}>save</button>
    value: {value}
  </>

}


export const ControlledInputWithFixedValue = () => <input value={'IT-Inc'}/>;

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChangeHandler}/>;

}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    setParentValue(e.currentTarget.checked)
  }
  return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>;
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {

    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChangeHandler}>
    <option>none</option>
    <option value="1">Minsk</option>
    <option value="2">Moscow</option>
    <option value='3'>Kiev</option>
  </select>;
}