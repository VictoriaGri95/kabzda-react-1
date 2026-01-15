import {OnOff} from "./OnOff.tsx";
import {useState} from "react";
import {action} from "storybook/actions";


export default {
  title: 'OnOff stories',
  component: OnOff,
}

export const OnState = () => <OnOff
  isOn={true}
  onChange={action('clicked')}
/>

export const OffState = () => <OnOff
  isOn={false}
  onChange={action('clicked')}
/>

export const OnOffState = () => {
  const [OnOffState, setOnOff] = useState(true)
  return <OnOff
    isOn={OnOffState}
    onChange={setOnOff}
  />
}

