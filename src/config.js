class Settings{
    constructor(){
        this.baseURL = process.env.REACT_APP_API_URL;

    }
}

const settings = new Settings();

export default settings;