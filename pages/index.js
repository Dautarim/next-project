import { useState } from "react";
import Link from "next/link"
import Time from "./Time";

function display()
{

    return (<div>
        <h1>Olá mundo!! versao 2</h1> 
            <Link href="/aboutUs">
                About Us
            </Link>
        <Contadors/>
        <CreatImag/>

    </div>)
    
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
    const imgLink = "https://i.pinimg.com/564x/ca/bc/6f/cabc6f16d61daa4771517251588bd5a3.jpg"
    
    return <div>
       <img src={imgLink} />
    </div>
}

export default display;