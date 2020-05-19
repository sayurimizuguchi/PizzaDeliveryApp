const STRIPE_URL = 'http://ec2-34-227-31-122.compute-1.amazonaws.com:3000';
const SPLIT_PAYMENT = `${STRIPE_URL}/payment/split`;

export const reserveDelivery = async ({ deliveryId, driverId }) => {
  console.log(`reserve delivery item ${deliveryId} by ${driverId}`)
  const response = await fetch(SPLIT_PAYMENT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentId: deliveryId,
      destinationAccountId: driverId
    })
  });

  console.log('async response from SPLIT', { response });

  return response;
}