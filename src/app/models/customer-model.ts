export interface ICustomerData {
    names: {
        firstName: string,
        middleName?: string,
        lastName: string
    },
    contacts: {
        mobileNo: string,
        phoneNo?: string,
        email: string
    },
    others: {
        dob: string
    }
}

export class CustomerData implements ICustomerData {

    constructor(input?: ICustomerData) {
        this.names = input?.names ?? { firstName: '', middleName: '', lastName: '' };
        this.contacts = input?.contacts ?? { mobileNo: '', phoneNo: '', email: '' };
        this.others = input?.others ?? { dob: '' }
    }

    names: { firstName: string; middleName?: string | undefined; lastName: string }
    contacts: { mobileNo: string; phoneNo?: string | undefined; email: string }
    others: { dob: string; };
}