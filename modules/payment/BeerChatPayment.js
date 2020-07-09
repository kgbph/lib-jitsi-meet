import Axios from 'axios';

export default class BeerChatPayment {
    send(amount) {
        return Axios.post('https://httpstat.us/200', {
            amount: amount
        });
    }
}
