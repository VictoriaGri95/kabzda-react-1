import './App.css'

import {useState} from "react";
import {Rating, type RatingValueType} from "./components/raiting/ Raiting.tsx";
import {Accordion} from "./components/accordion/Accordion.tsx";
import {OnOff} from "./components/onOff/OnOff.tsx";



function App() {
let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [on, setOn] = useState(false)
  return (

    <>

      <OnOff on={on} setOn={setOn}/>
      {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}/>
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

type PageTittleProps = {
  title: string
}

function PageTittle(props: PageTittleProps) {

  return (
    <h1>
      {props.title}
    </h1>

  )
}





