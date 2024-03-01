import axios from "axios";
import Cookies from 'js-cookie';

const uri = import.meta.env.VITE_APP_URI;

export const signup = async (form) => {
    const formData = new FormData();
    formData.append("Name", form.Name);
    formData.append("Email", form.Email);
    formData.append("Password", form.Password);
    formData.append("Image", form.Image);

    try {
        const response = await axios.post(`${uri}/user`, formData, {
            headers: {'Content-Type': 'multipart/form-data' }
        });
        if (response.status === 200) {
            Cookies.set('token',response.data.token, {expires: '1d'})
            return response.data;
        }
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
