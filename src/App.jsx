
import illustrationThankyou from "./assets/illustration-thank-you.svg"
import { useState } from "react"
import { Card1 } from "./components/Card1";

export function App() {

  const [nota, setNota] = useState(0);
  const [submited, setSubmited] = useState(false)



  return (
    submited === false ? (
      <Card1 nota={nota} setNota={setNota} setSubmited={setSubmited}/>
    ) : (
      <div className=" max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass text-center">

        <img className="mx-auto mb-6 "  src={illustrationThankyou} alt="" />

        <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl text-sm ">Você selecionou {nota} de 5</p>

        <h1 className="text-2xl font-bold mb-2.5">Obrigada!</h1>

        <p className="text-sm text-light-grey mb-6">Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </div>
    )

  )

}