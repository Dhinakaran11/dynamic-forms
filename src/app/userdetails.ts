export interface Userdetails {
    name: string,
    email: string,
    address: {
        city: string
    },
    phone: number,
    company: {
        name: string
    }
}
