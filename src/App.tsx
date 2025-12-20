import './App.css'

import {OnOff} from "./components/onOff/OnOff.tsx";
import {
  UncontrolledAccordion
} from "./components/uncontrolledAccordion/UncontrolledAccordion.tsx";
import {
  UncontrolledRating
} from "./components/uncontrolledRaiting/UncontrolledRating.tsx";



function App() {

  return (

    <>

      <OnOff/>


      <UncontrolledAccordion titleValue={"Menu"}/>
      <UncontrolledRating/>

      {/*<PageTittle title={"This is app component."}/>*/}


      {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
      {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
      {/*<Rating value={1}/>*/}
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





