class Settings{
    constructor(){
        this.baseURL = import.meta.env.VITE_API_URL;
        // this.baseURL = '/';

    }
}

const settings = new Settings();

export default settings;