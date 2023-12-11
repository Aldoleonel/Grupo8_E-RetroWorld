const modifyState  = async(idInput, id)=>{
    const checkbox = document.getElementById(idInput);
    if(checkbox.checked){
        console.log('estoy adentro del checked')
        const userModify = await fetch(`/api/changeRole/${id}`,{
            method:'PUT',
            body: JSON.stringify({
                roleId: 1,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const {ok,data,msg} = await userModify.json();
    } else{
        console.log('no pude ingresar al checked')
        const userModify = await fetch(`/api/changeRole/${id}`,{
            method:'PUT',
            body: JSON.stringify({
                roleId: 2
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const {ok,data,msg} = await userModify.json();
    }

    // console.log(checkbox);
}

window.onload = function(){
    // modifyState()
    
}