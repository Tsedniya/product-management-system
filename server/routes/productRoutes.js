const express = require("express");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();


router.get("/", protect, getProducts);
router.get("/:id", protect, getProductById);

router.post("/", protect, authorize("ADMIN"), createProduct);
router.put("/:id", protect, authorize("ADMIN"), updateProduct);
router.delete("/:id", protect, authorize("ADMIN"), deleteProduct);

module.exports = router;