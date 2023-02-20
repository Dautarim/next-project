
function Time(props)
{
   const dinamicTime = new Date();
   const dataString = dinamicTime.toGMTString();

   return (
   <div>

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