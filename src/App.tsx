import './App.css'

import {useState} from "react";
import {Rating, type RatingValueType} from "./components/raiting/ Raiting.tsx";
import {Accordion} from "./components/accordion/Accordion.tsx";
import {OnOff} from "./components/onOff/OnOff.tsx";
import {
  UncontrolledOnOff
} from "./components/uncontrolledOnOff/UncontrolledOnOff.tsx";
import {Select} from "./components/select/Select.tsx";


function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  const [on, setOn] = useState(false)
  const [isOpenedSelect, setIsOpenedSelect] = useState(false)
  return (

    <>

      <OnOff
        isOn={on}
        onChange={setOn}
      />
      {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
      <Rating
        value={ratingValue}
        onClick={setRatingValue}
      />
      <Rating
        value={ratingValue}
        onClick={setRatingValue}
      />

      {/*<Accordion*/}
      {/*  titleValue={"Menu"}*/}
      {/*  collapsed={accordionCollapsed}*/}
      {/*  onChange={() => setAccordionCollapsed(prev => !prev)}*/}
      {/*  onClick={() => setAccordionCollapsed(prev => !prev)}*/}
      {/*  items={}*/}
      {/*/>*/}
      {/*<Accordion*/}
      {/*  titleValue={"BLABLA"}*/}
      {/*  collapsed={accordionCollapsed}*/}
      {/*  onChange={() => setAccordionCollapsed(prev => !prev)}*/}
      {/*/>*/}
      <UncontrolledOnOff onChange={setOn} />
      {/*<UncontrolledRating/>*/}

      {/*<PageTittle title={"This is app component."}/>*/}


      {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}

      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}

    </>
  )
}

export default App

// type PageTittleProps = {
//   title: string
// }

// function PageTittle(props: PageTittleProps) {
//
//   return (
//     <h1>
//       {props.title}
//     </h1>
//
//   )
// }





