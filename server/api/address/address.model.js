'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './address.events';

var AddressSchema = new mongoose.Schema({
  name: String,
  address1: String,
  address2: {type: String, required: false},
  city: String,
  state: String,
  country: String,
  type: String,
  zip: Number,
  user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

registerEvents(AddressSchema);
module.exports =  mongoose.model('Address', AddressSchema);
