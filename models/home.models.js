import mongoose from "mongoose";

const HomeProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    tab: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    outOfStock: {
  type: Boolean,
  default: false
},

    sizes: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("HomeProduct", HomeProductSchema);