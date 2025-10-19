import settings from "../config";





export async function sendResponseData (url, data, token) {
    try{
        const response = await fetch(`${settings.baseURL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    }catch (error){
        console.log(error)
    }
}


export async function getData (url, token) {
    try{
        const response = await fetch(`${settings.baseURL}${url}`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`}
        })

        const result = await response.json();
        if(response.ok){
            return {success: true, detail: result}
        }
        else{
            return {success: false, detail: result.detail}
        }

    }catch (error){
        return {success: false, detail: `We are so sorry. Our server is sick`}
    }
}
