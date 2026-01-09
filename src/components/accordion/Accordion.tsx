

type ItemType = {
  title: string,
  value: any,
}
type AccordionProps = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}


export function Accordion (props: AccordionProps) {

    return (
      <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
      </div>
    )

}

type AccordionTitleProps = {
  title: string
  onChange: () => void

}

function AccordionTitle(props: AccordionTitleProps) {
  return (
    <h3 onClick={() => {props.onChange()}}>{props.title}</h3>
  )
}

type AccordionBodyProps = {
  items: ItemType[]
  onClick: (value: any) => void
}


function AccordionBody(props: AccordionBodyProps) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li onClick={() => {props.onClick(item.value)}} key={index}>{item.title}</li>
      ))}

    </ul>
  )
}
