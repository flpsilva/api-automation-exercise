import { faker } from '@faker-js/faker';

export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    mobileNumber: string;
    orderMsg: string;
    cardNumber: string;
    cvcNumber: string;
    expiryMonth: string;
    expiryYear: number;
}
//function to generate fake data
export const generateFakeData = (): UserData => {
    return {
        firstName: faker.person.firstName('male'),
        lastName: faker.person.lastName(),
        email: faker.internet.email({firstName: 'firstName'}),
        company: faker.company.name(),
        address1: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.location.zipCode({format: '####'}),
        mobileNumber: faker.phone.number(),
        orderMsg: faker.word.words(4),
        cardNumber: faker.finance.creditCardNumber(),
        cvcNumber: faker.finance.creditCardCVV(),
        expiryMonth: faker.date.month(),
        expiryYear: faker.number.int({min: 2027, max: 2040})
    }
}
