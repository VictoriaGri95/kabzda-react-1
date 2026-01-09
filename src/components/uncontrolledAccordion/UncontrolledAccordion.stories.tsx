
import {UncontrolledAccordion} from "./UncontrolledAccordion.tsx";


export default {
  title: 'Uncontrolled Accordion',
  component: UncontrolledAccordion
}


export const CollapsedAccordion = () => {
  return  <UncontrolledAccordion
    titleValue={"Collapsed Accordion"}
  />
}

export const OpenedAccordion = () => {
  return <UncontrolledAccordion
    titleValue={"Opened Accordion"}
  />
}

export const AccordionDemo = () => {

  return <UncontrolledAccordion
    titleValue={"Accordion"}
  />
}
