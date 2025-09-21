export async function sendRequest (url, data){

    const formData = new FormData();
    for (const key in data){
        formData.append(key, data[key]);
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
            credentials: "include",
        });
        if(response.ok){
            return {success: true}
        }else{
            const error = await response.json();
            return {success: false, detail: error.detail}
        }
    }catch (error){
        return {success: false, detail: "We are sorry. Our server is sick"}
    }
}
