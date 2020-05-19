

const STRIPE_URL = 'http://ec2-34-227-31-122.compute-1.amazonaws.com:3000';
const CONFIRM_PAYMENT = `${STRIPE_URL}/payment/confirm`;

export const completeDelivery = async ({ deliveryId }) => {

  const response = await fetch(CONFIRM_PAYMENT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentId: deliveryId,
    })
  });

  return response;
}