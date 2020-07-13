const {
  MONGO_DB,
  MONGO_HOST,
  MONGO_HOSTNAME,
  MONGO_USERNAME,
  MONGO_PORT,
  MONGO_PASSWORD
} = process.env;


const config = {
  db: {
    hostname: MONGO_HOSTNAME || MONGO_HOST || '127.0.0.1',
    username: MONGO_USERNAME || '',
    password: MONGO_PASSWORD || '',
    port: MONGO_PORT || '27017',
    db: MONGO_DB || 'nkapsi_business_test',
    uri: `mongodb://${MONGO_HOSTNAME || '127.0.0.1'}:${MONGO_PORT || '27017'}/${MONGO_DB || 'nkapsi_business_test'}`,
    // uri: `mongodb://${MONGO_USERNAME || ''}:${MONGO_PASSWORD || ''}@${MONGO_HOSTNAME || '127.0.0.1'}:${MONGO_PORT || '27017'}/${MONGO_DB || 'nkapsi_business_testing'}?authSource=admin`,
  },
  kafka: {
    hostname: KAFKA_HOSTNAME || KAFKA_HOST || '192.168.8.101',
    port: KAFKA_PORT || '9092'
  }
};

export default config;
