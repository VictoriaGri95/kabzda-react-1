type AccordionProps = {
  titleValue: string
  collapsed: boolean
}


export function Accordion (props: AccordionProps) {

    return (
      <div>
        <AccordionTitle title={props.titleValue} />
        { !props.collapsed && <AccordionBody /> }
      </div>
    )

}



export function Accordion2(props: AccordionProps) {
  if (props.collapsed === true) {
    return (
      <div>
        <AccordionTitle title={props.titleValue} />
      </div>
    )
  } else {
    return (
      <div>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody />
      </div>
    )
  }


}
type AccordionTitleProps = {
  title: string
}

function AccordionTitle(props: AccordionTitleProps) {
  return (
    <h3>{props.title}</h3>
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