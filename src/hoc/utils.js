import settings from "../config";


export async function sendAuthRequest (url, data={}) {

    const formData = new FormData();
    for (const key in data){
        formData.append(key, data[key]);
    }

    try {
        const response = await fetch(`${settings.baseURL}${url}`, {
            method: 'POST',
            body: formData,
            credentials: "include",
        });

        const result = await response.json();

        if(response.ok){
            return {success: true, detail: result}
        }
        else{
            return {success: false, detail: result.detail}
        }
    }catch (error){
        return {success: false, detail: "We are sorry. Our server is sick"}
    }
}


export async function sendResponseData (url, data={}) {
    try{
        const response = await fetch(`${settings.baseURL}${url}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: data
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
    }
}
