import {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer.tsx";

type AccordionProps = {
  titleValue: string
  //collapsed: boolean
}

// export type ActionType = {
//   type: string,
// }
//
//
// const TOGGLE_CONSTANT = "toggle-collapsed"
//
// const reducer = (state: boolean, action: ActionType) => {
//   switch (action.type) {
//     case "TOGGLE_CONSTANT":
//       return !state;
//     default:
//       return state
//   }
//
// }


export function UncontrolledAccordion(props: AccordionProps) {

  //let [collapsed, setCollapsed] = useState(false)
  let [state, dispath] = useReducer(reducer, {collapsed: false});

  return (
    <div>
      {/*<AccordionTitle*/}
      {/*  title={props.titleValue}*/}
      {/*  onClick={() => {*/}
      {/*    setCollapsed(!collapsed)*/}
      {/*  }}*/}
      {/*/>*/}
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispath({type: TOGGLE_COLLAPSED})
        }}
      />
      {/*<button onClick={() => {setCollapsed(!collapsed )}}>Toggle</button>*/}
      {!state.collapsed && <AccordionBody />}
    </div>
  )

}


type AccordionTitleProps = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitleProps) {
  return (
    <h3
      onClick={() => {
        props.onClick()
      }}
    >{props.title}</h3>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}


// export function Accordion2(props: AccordionProps) {
//   if (props.collapsed === true) {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue} />
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue} />
//         <AccordionBody />
//       </div>
//     )
//   }
// }