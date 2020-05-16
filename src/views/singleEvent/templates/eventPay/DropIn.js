import React from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "../../../../utils/axiosConfig";

class Store extends React.Component {
  instance;

  state = {
    clientToken: null,
  };

  async componentDidMount() {
    // Get a client token for authorization from your server
    // const response = await fetch("server.test/client_token");
    const response = await axios.get(
      "/v1/payment/braintree/generate/client_token"
    );

    const clientToken = response.data.data;


    this.setState({
      clientToken,
    });
  }

  async buy() {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    // await fetch(`server.test/purchase/${nonce}`);
    // await axios.get("/v1/payment/braintree/generate/client_token");
  }

  render() {
    if (!this.state.clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <DropIn
            options={{ authorization: this.state.clientToken }}
            onInstance={(instance) => (this.instance = instance)}
          />
          <button onClick={this.buy.bind(this)}>Buy</button>
        </div>
      );
    }
  }
}

export default Store;
