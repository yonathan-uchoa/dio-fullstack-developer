const account = {
    email: 'test@example.com',
    password: 'password',
    name: 'My test Account',
    balance: 1500.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account)
    }, 1500)
})