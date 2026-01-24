import settings from "../config";

export async function postRequest (url, data, token, method='POST') {
    try{
        const response = await fetch(`${settings.baseURL}${url}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
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


export async function getRequest (url, token) {

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
