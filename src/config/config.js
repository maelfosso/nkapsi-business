import path from 'path';
import debugLib from 'debug';
import kafka from 'kafka-node';

const debug = debugLib('nkapsi:business-api:config')

const environmentConfig = require(path.join(__dirname, `env/${process.env.NODE_ENV}`)).default;
const config = { 
  ...environmentConfig 
}


const kafkaClient = new kafka.KafkaClient({
  kafkaHost: `${config.kafka.hostname}:${config.kafka.port}`
});
const kafkaProducer = new kafka.Producer(kafkaClient);
kafkaProducer.on('ready', () => {
  debug('Kafka is ready');
});
kafkaProducer.on('error', (err) => {
  debug('Kafka got an error');
  debug(err);
});

export { kafkaProducer };

export default config;
