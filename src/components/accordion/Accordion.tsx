

type AccordionProps = {
  titleValue: string
  collapsed: boolean
  onChange: (collapsed: boolean) => void
}


export function Accordion (props: AccordionProps) {

    return (
      <div>
        <AccordionTitle title={props.titleValue} onClick={() => props.onChange(!props.collapsed)}/>
        { !props.collapsed && <AccordionBody /> }
      </div>
    )

}

type AccordionTitleProps = {
  title: string
  onClick: () => void

}

function AccordionTitle(props: AccordionTitleProps) {
  return (
    <h3 onClick={props.onClick}>{props.title}</h3>
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
//
//
// }