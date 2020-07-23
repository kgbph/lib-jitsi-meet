import Axios from 'axios';

export default class PremiumChatPayment {
    send(amount) {
        return Axios.post('https://httpstat.us/200', {
            amount: amount
        });
    }
}
