export async function sendRequest (url, data={}, method = 'POST') {

    const formData = new FormData();
    for (const key in data){
        formData.append(key, data[key]);
    }

    try {
        const response = await fetch(url, {
            method: method,
            body: formData,
            credentials: "include",
        });

        if(response.ok){
            let access_token = await response.json();
            localStorage.setItem("access_token", access_token)
            return {success: true}
        }
        else{
            const error = await response.json();
            return {success: false, detail: error.detail}
        }
    }catch (error){
        console.log(error)
        return {success: false, detail: "We are sorry. Our server is sick"}
    }
}
