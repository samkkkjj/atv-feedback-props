import iconStar from "../assets/icon-star.svg"

export function Card1({nota, setNota, setSubmited}) {


    function handleSubmit() {
    if (nota !== 0) {
        setSubmited(true)
        return
    }
    alert("Por favor, selecione um botão para definir a nota!")
}

return(

<div className=" max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass">
        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
        <img src={iconStar} alt="" />
        </div>

    <h1 className="text-2xl font-bold mb-2.5">Como foi o atendimento?</h1>

    <p className="text-sm text-light-grey mb-6">Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

    <div className="flex justify-between mb-6">
        <InputButton valor={1} setNota={setNota} />
        <InputButton valor={2} setNota={setNota} />    
        <InputButton valor={3} setNota={setNota} />
        <InputButton valor={4} setNota={setNota} />
        <InputButton valor={5} setNota={setNota} />
    </div>
    <button onClick={handleSubmit} className="bg-orange w-full py-3 rounded-3xl uppercase text-sm tracking-1 font-bold hover:bg-white hover:text-orange cursor-pointer">Enviar</button>
    </div>
    )
}