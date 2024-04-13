import axios from "axios";

const MENU_API_URL = "http://localhost:8000/menu";

const showMenu = async () => {
    const response = await axios.get(MENU_API_URL)
    return response.data
}

export const menuService = {
    showMenu
}