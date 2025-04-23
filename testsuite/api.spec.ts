
import { test, expect } from "@playwright/test";
import { generateFakeData } from "../testData/testData";

test.describe("Verify Login test suite", async () => {
  const  fakeData = generateFakeData();
  const name = fakeData.firstName;
  const lastname = fakeData.lastName;
  const address1 = fakeData.address1;
  const zipcode = fakeData.zip;
  const state = fakeData.state;
  const city = fakeData.city;
  const mobileNumber = fakeData.mobileNumber;
  const randomEmail = fakeData.email;

  const userPwd = process.env.TEST_USER_PASSWORD;
  const InvalidUserEmail = process.env.INV_USER_EMAIL;
  const invalidPwd = process.env.INV_USER_PWD;
  const baseURL = process.env.BASE_URL;
  
  test('Verify Login with valid details', async ({ request }) => {
    const createAccountresponse = await request.post(`${baseURL}api/createAccount`, {
      form: {
        name: name,
        email: randomEmail,
        password: userPwd,
        firstname: name,
        lastname: lastname,
        address1: address1,
        country: 'New Zealand',
        zipcode: zipcode,
        state: state,
        city: city,
        mobile_number: mobileNumber,
        password: userPwd
      }
    });
    expect(createAccountresponse.ok()).toBeTruthy();
    const createAccountBody  = await createAccountresponse.json();
    expect(createAccountBody .message).toBe('User created!');

    const response = await request.post(`${baseURL}api/verifyLogin`, {
      form: {
        email: randomEmail,
        password: userPwd
      }
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.message).toBe('User exists!');
    // --- Teardown
    const deleteResponse = await request.delete(`${baseURL}api/deleteAccount`, {
      form: { 
        email: randomEmail,
        password: userPwd
      }
    });
    expect(deleteResponse.ok()).toBeTruthy();
  });
  test('Verify Login without email parameter', async ({ request }) => {
    const response = await request.post(`${baseURL}api/verifyLogin`, {
      form: {
        password: userPwd
      }
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toEqual({
      responseCode: 400,
      message: 'Bad request, email or password parameter is missing in POST request.'
    });
  });
  test('DELETE To Verify Login', async ({ request }) => {
    const response = await request.delete(`${baseURL}api/verifyLogin`, {
      form: {
        email: randomEmail,
        password: userPwd
      }
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toEqual({ 
      responseCode: 405, 
      message: 'This request method is not supported.'
    })
  });
  test('Verify Login with invalid details', async ({ request }) => {
    const response = await request.post(`${baseURL}api/verifyLogin`, {
      form: {
        email: InvalidUserEmail,
        password: invalidPwd
      }
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toEqual({ 
      responseCode: 404, 
      message: 'User not found!'
    })
  });
});