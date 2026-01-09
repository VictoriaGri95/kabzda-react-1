
import { action } from 'storybook/actions';

import {Accordion} from './Accordion';
import {useState} from "react";

export default {
  title: 'Accordion',
  component: Accordion
}



const onChangeHandlerCallback = action('onChangeCallback');
const onClickCallback = action('some item was clicked');

export const CollapsedAccordion = () => {
  return  <Accordion
    items={[]}
    titleValue={"Collapsed Accordion"}
    collapsed={true}
    onChange={onChangeHandlerCallback}
    onClick={onClickCallback}
  />
}

export const OpenedAccordion = () => {
  return <Accordion
    items={[{title: 'Dmitriy', value: 1}, {title: 'Valera', value: 1}, {title: 'Vika', value: 1} ]}
    titleValue={"Opened Accordion"}
    collapsed={false}
    onChange={onChangeHandlerCallback}
    onClick={onClickCallback}
  />
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return <Accordion
    items={[{title: 'Dmitriy', value: 1}, {title: 'Valera', value: 1}, {title: 'Vika', value: 1} ]}
    titleValue={"Accordion"}
    collapsed={collapsed}
    onChange={() => {setCollapsed(!collapsed)}}
    onClick={(value) => {alert(`User with ID ${value} should be happy`)}}
  />
}
