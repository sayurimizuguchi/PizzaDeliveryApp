// these should be moved to a constants file etc.
const STRIPE_URL = 'http://ec2-34-227-31-122.compute-1.amazonaws.com:3000';
const GET_PAYMENT_LIST = `${STRIPE_URL}/payment/recent?limit=5`;

export const getDeliveries = () => {
  return fetch(GET_PAYMENT_LIST, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then((r) => r.json())
    .then((json) => json.paymentIntent)
}