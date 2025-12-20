import {useState} from "react";

// type RatingProps = {
//   // value: 0 | 1 | 2 | 3 | 4 | 5
// }

export function UncontrolledRating() {

  let [value, setValue] = useState(0)
  return (
    <div>
      <Star selected={value > 0} setRaiting={() => {setValue(1)}}/>
      <Star selected={value > 1} setRaiting={() => {setValue(2)}}/>
      <Star selected={value > 2} setRaiting={() => {setValue(3)}}/>
      <Star selected={value > 3} setRaiting={() => {setValue(4)}}/>
      <Star selected={value > 4} setRaiting={() => {setValue(5)}}/>
    </div>
  )

}
type StarProps = {
  selected: boolean
  setRaiting: () => void
}

function Star(props: StarProps) {

return (
  <span onClick={props.setRaiting} style={{cursor: "pointer", marginRight: "5px"}}>
    {props.selected ? <b>star</b> : "star"}
  </span>
)

  //
  // if (props.selected === true) {
  //   return (<span> <b>star</b> </span>)
  // } else {
  //   return (<span> star </span>)
  // }

}
