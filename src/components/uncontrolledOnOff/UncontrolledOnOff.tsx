type PropsType = {
onChange: (on: boolean) => void,
}


import {useState} from "react";

export function UncontrolledOnOff(props: PropsType) {
  const [on, setOn] = useState(false)



  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "#76e077" : "white",
  }
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: on ? "white" : "#ff4343",
  }
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "#76e077" : "#ff4343",

  }
const onClickHandler = () => {
  setOn(true)
  props.onChange(true)
}
const offClickHandler = () => {
  setOn(false)
  props.onChange(false)
}
return (
  <div>
    <div style={onStyle} onClick={onClickHandler}>On</div>
    <div style={offStyle} onClick={offClickHandler}>Off</div>
    <div style={indicatorStyle}></div>
  </div>
)
}