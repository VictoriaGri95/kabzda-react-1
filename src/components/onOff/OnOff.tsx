type PropsType = {
  isOn: boolean,
  onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {

  // le

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.isOn ? "#76e077" : "white",
  }
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: props.isOn ? "white" : "#ff4343",
  }
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.isOn ? "#76e077" : "#ff4343",

  }

  return (
    <div>
      <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
      <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}