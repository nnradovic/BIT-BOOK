import { register, url, login, headers, headers1 } from '../shares/constans'

class AuthenticationService {
    register = (username, name, email, password) => {

        return fetch(`${url}${register}`, {
            method: 'POST',
            body: JSON.stringify({ username: username, name: name, email: email, password: password }),
            headers: {
                ...headers1,
                "SessionId": sessionStorage.getItem("sessionId")
            }
        })

    }

    login = (username, password) => {
        return fetch(`${url}${login}`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: headers1
        })

    }

    succsesfullLogin = (data) => {
        sessionStorage.setItem("sessionId", data)
    }

    isUserAuthenticated = () => {
        return !!sessionStorage.getItem("sessionId");
    }

    logout = () => {
        sessionStorage.removeItem("sessionId");
    }
}







export const authenticationService = new AuthenticationService();































// login(userData, errorHandler) {
    //   fetchService.post('login', userData, this.successLogin, error =>
    //     errorHandler(error.response.data.error.message)
    //   );
    // }

    // register(userData, errorHandler) {
    //   fetchService.post('register', userData, this.successRegister, error =>
    //     errorHandler(error.response.data.error.message)
    //   );
    // }

    // logout() {
    //   sessionStorage.removeItem(SESSION_STORAGE_KEY);
    //   redirectService.goTo('/');
    // }

    // successLogin(data) {
    //   sessionStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
    //   redirectService.goTo('/profile');
    // }

    // successRegister() {
    //   redirectService.goTo('/login');
    // }

    // isUserAuthenticated() {
    //   return !!sessionStorage.getItem(SESSION_STORAGE_KEY);
    // }