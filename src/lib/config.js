export const peerConfiguration = {
  secure: true,
  config: {
    iceServers: [
      {
        urls: "stun:relay.metered.ca:80",
      },
      {
        urls: "turn:relay.metered.ca:80",
        username: process.env.REACT_APP_TURN_USERNAME,
        credential: process.env.REACT_APP_TURN_PASSWORD,
      },
      {
        urls: "turn:relay.metered.ca:443",
        username: process.env.REACT_APP_TURN_USERNAME,
        credential: process.env.REACT_APP_TURN_PASSWORD,
      },
      {
        urls: "turn:relay.metered.ca:443?transport=tcp",
        username: process.env.REACT_APP_TURN_USERNAME,
        credential: process.env.REACT_APP_TURN_PASSWORD,
      },
    ],
  },
};
