

import { useState } from "react"
import { Card1 } from "./components/Card1";

export function App() {

  const [nota, setNota] = useState(0);
  const [submited, setSubmited] = useState(false)



  return (
    submited === false ? (
      <Card1 nota={nota} setNota={setNota} setSubmited={setSubmited}/>
    ) : (
      <CardF nota={nota}/>
    )

  )

}