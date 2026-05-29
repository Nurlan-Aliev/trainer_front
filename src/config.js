class Settings{
    constructor(){
        this.baseURL = import.meta.env.VITE_API_URL
    }
}

const settings = new Settings();

export default settings;