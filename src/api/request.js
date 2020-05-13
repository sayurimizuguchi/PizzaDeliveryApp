// @flow
import { transformRespone } from './request.utils';
import { GET_PAYMENT_LIST } from '../general.constants';

console.log(GET_PAYMENT_LIST);

// const get = async  (
//   endpoint: string,
//   headers: {},
//   options: {},
//   ) => {
//   const head = headers || {};
//   const opts = options || {};

//   try {
//      await fetch(endpoint, {
//     method: 'GET',
//     headers: {
//       ...head
//     },
//     ...opts
//   }).then(transformRespone)
//  } catch (err) {
//    console.log(err);
//  }
// }

export const getPaymentList = async () =>{ 
  try { 
    await fetch(GET_PAYMENT_LIST, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => transformRespone(response))
    .then((responseJSON) => {
      // do stuff with responseJSON here...
      console.log('responseJSON', responseJSON);
   });

  } catch (err) {
      console.log(err);
  }
}