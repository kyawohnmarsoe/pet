export const endPints = {
    baseUrl: 'https://petzola-business.herokuapp.com',
    // chatUrl: 'http://localhost:4000',
    chatUrl: 'https://petzola-chat-manager.herokuapp.com',
    paymentUrl: 'https://petzola-payment-manager.herokuapp.com/api/payment',
    // paymentUrl: 'http://localhost:8083/api/payment',
    callURL: 'https://call.petzola.site/?token=',
    // callURL: 'http://localhost:3000/?token=',
    filesUrl: 'https://files.petzola.site',
    uploadUrl: ''
}
endPints.uploadUrl = `${endPints.filesUrl}/fileupload.php`