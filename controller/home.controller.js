import HomeProduct from "../models/home.models.js";



export const homeproductcontroller = async (req, res) => {
  try {
    const {
      name,
      tab,
      category,
      price,
      sizes,
    } = req.body;

    if (
      !name ||
      !tab ||
      !category ||
      !price ||
      !req.file ||
      !sizes
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const product = await HomeProduct.create({
      name,
      tab,
      category,
      price,
      image: req.file.filename,
      sizes: JSON.parse(sizes),
    });

    return res.status(201).json({
      success: true,
      message: "Home Product Added Successfully",
      product,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getHomeProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 8; // Har page par 8 products

    const skip = (page - 1) * limit;

    const totalProducts = await HomeProduct.countDocuments();

    const products = await HomeProduct.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      success: true,
      message: "Home Products Fetch Successfully",
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
      products,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};