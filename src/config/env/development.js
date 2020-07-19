const {
  MONGO_DB, 
  MONGO_HOST, MONGO_HOSTNAME, MONGO_PORT,
  MONGO_USERNAME, MONGO_PASSWORD,

  KAFKA_HOSTNAME, KAFKA_HOST, KAFKA_PORT
} = process.env;


const config = {
  db: {
    hostname: MONGO_HOSTNAME || MONGO_HOST || '127.0.0.1',
    username: MONGO_USERNAME || '',
    password: MONGO_PASSWORD || '',
    port: MONGO_PORT || '27017',
    db: MONGO_DB || 'nkapsi_business_development',
    uri: `mongodb://${MONGO_HOSTNAME || '127.0.0.1'}:${MONGO_PORT || '27017'}/${MONGO_DB || 'nkapsi_business_development'}`,
    // uri: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
  },
  kafka: {
    hostname: KAFKA_HOSTNAME || KAFKA_HOST || '192.168.8.101',
    port: KAFKA_PORT || '9092',
    options: {
      requireAcks: 1,
      ackTimeoutMs: 100,
      partitionereType: 2
    }
  }
};

export default config;
