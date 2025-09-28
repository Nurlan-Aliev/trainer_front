import settings from "../config";


export async function sendAuthRequest (url, data={}, method = 'POST') {

    const formData = new FormData();
    for (const key in data){
        formData.append(key, data[key]);
    }

    try {
        const response = await fetch(`${settings.baseURL}${url}`, {
            method: method,
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
