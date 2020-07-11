import { Types } from 'mongoose';
import debugLib from 'debug';
import Business from '../models/business';

const debug = debugLib('nkapsi:business-api:business-controller');

const create = async (req, res) => {
  const { body } = req;
  debug(body);
  const business = new Business({
    ...body
  });
  await business.save();
  debug(`business saved : ${business.id}`);
  
  res.status(200).json();
} 

export default {
  create
}