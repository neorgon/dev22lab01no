const mongoose = require (`mongoose`);

const Schema = mongoose.Schema;

const ListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    owner: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: false,
      trim: true
    },
    pathImage: {
      type: String,
      required: false
    },
    item: [
      {
        name: {
          type: String,
          required: true,
          trim: true
        },
        price: {
          type: Number,
          required: true,
          min: 0    
        },
        quantity: {
          type: Number,
          required: true
        },
        reponsible: {
          type: String,
          required: false,
          trim: true
        },
      }
    ]
  }
);

module.exports = mongoose.model(`List`, ListSchema);

