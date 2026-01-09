
import {UncontrolledOnOff} from "./UncontrolledOnOff.tsx";


export default {
  title: 'Uncontrolled OnOff',
  component: UncontrolledOnOff,
}


export const OnMode = () => {
  return  <UncontrolledOnOff
    defaultOn={true}
    onChange={x => x}
  />
}

export const OffMode = () => {
  return <UncontrolledOnOff
    defaultOn={false}
    onChange={x => x}
  />
}

export const AccordionDemo = () => {

  return <UncontrolledOnOff
    onChange={x => x}
  />
}
