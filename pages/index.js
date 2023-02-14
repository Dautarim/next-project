import { useState } from "react";

function display()
{

    return <div>
        <h1>Olá mundo!!</h1> 
        <Contadors/>
        <CreatImag/>
    </div>
    
}

function Contadors()
{
    const [contador,setContador] = useState(1)

    function adicionar(){
        setContador(contador + 1)
    }
    function zerar()
    {
        setContador(0)
    }

    return <div>   
        <div>{contador}</div>
        <button onClick={adicionar}>ADD</button>
        <button onClick={zerar}>Zerar</button>

    </div>
}

function CreatImag()
{
    const imgLink = "https://images3.alphacoders.com/109/1091675.jpg"
    
    return <div>
       <img src={imgLink} />
    </div>
}

export default display;