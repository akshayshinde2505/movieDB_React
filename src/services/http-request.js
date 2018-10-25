import Constants from '../constants'

const request = {
    post: (endpoint, data) => {
        const url = `${Constants.BASE_ENDPOINT}${endpoint}`
        
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp => {
            if(!resp.ok) { throw resp}
            return resp.json();
        })
        .then(resp => {
            console.log(resp)
            return resp
        }).catch(err => {
            throw err
        });
    },
    get: (endpoint) => {
        const url = `${Constants.BASE_ENDPOINT}${endpoint}`
        
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem(Constants.AUTH_TOKEN),
            }
        })
        .then(resp => {
            if(!resp.ok) { throw resp}
            return resp.json();
        })
        .then(resp => {
            console.log(resp)
            return resp
        }).catch(err => {
            throw err
        });
    }
}


export default request;
