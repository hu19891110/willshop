const debug = process.env.NODE_ENV !== 'production';

const Config = {
  apiRoot: '/api/card',
  timeout: 5000,
  smsResendCountdown: 60,
}

export default Config;