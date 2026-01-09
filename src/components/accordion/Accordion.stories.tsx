
import { action } from 'storybook/actions';

import {Accordion} from './Accordion';
import {useState} from "react";

export default {
  title: 'Accordion',
  component: Accordion
}



const onChangeHandlerCallback = action('onChangeCallback');


export const CollapsedAccordion = () => {
  return  <Accordion
    titleValue={"Collapsed Accordion"}
    collapsed={true}
    onChange={onChangeHandlerCallback}
  />
}

export const OpenedAccordion = () => {
  return <Accordion
    titleValue={"Opened Accordion"}
    collapsed={false}
    onChange={onChangeHandlerCallback}
  />
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return <Accordion
    titleValue={"Accordion"}
    collapsed={collapsed}
    onChange={() => {setCollapsed(!collapsed)}}
  />
}
