  // async completePayment() {
  //   try {
  //     await fetch(CONFIRM_PAYMENT, {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: {
  //         id: this.state.orders.data,
  //       }
  //     })
  //       .then(response => transformRespone(response))
  //       .then(responseJSON => {
  //         this.setState({ orders: responseJSON })
  //       });

  //   } catch (err) {
  //     console.log(err);
  //   }
  //   console.log(' AFTER this.state.orders', this.state.orders)
  // }