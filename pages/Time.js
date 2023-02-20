import Link from "next/link"

function Time(props)
{
   const dinamicTime = new Date();
   const dataString = dinamicTime.toGMTString();

   return (
        <div>
        <Link href="/">
            Home
        </Link>
        <Link href="/aboutUs">
            About
        </Link>
                <div>{dataString} (dinamico) </div>  
                <div>{props.staticDataString} (estático) </div>  
        </div>
        
   )
}

export function getstaticProps()
{
        const staticTime = new Date();
        const staticDataString = staticTime.toGMTString();

        return {
                props: {
                        staticDataString
                }
        }

}
export default Time