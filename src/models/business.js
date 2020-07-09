import { Schema, model } from 'mongoose';

const BusinessSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  
  description: String,
  website: String,    

  activities: [{
    type: String
  }],
  delivrables: [{
    String
  }]
});

const Business = model('Business', BusinessSchema);

export default Business;

// mocha --require @babel/register --timeout 10000 --recursive --exit"