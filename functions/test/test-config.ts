/// <reference types="jest" />

import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
    databaseURL: "https://fireship-stripe.firebaseio.com",
    projectId: "fireship-stripe",
    storageBucket: "fireship-stripe.appspot.com",
}

const envConfig = { stripe: { testkey: 'sk_test_OPJq1i4HPWL0bjddnWR8Oj76' }};

const fun = TestFunctions(firebaseConfig, 'service-account.json')

fun.mockConfig(envConfig);

export { fun };