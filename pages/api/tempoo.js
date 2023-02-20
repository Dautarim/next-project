

function tempo(request, response)
{
    const dataobj = new Date()

    response.json(
        {
           date: dataobj.toGMTString()
        }
    )
}