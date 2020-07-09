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
    db: MONGO_DB || 'nkapsi_business_development',
    uri: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
  }
};

export default config;
