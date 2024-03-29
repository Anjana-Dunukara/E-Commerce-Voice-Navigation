const express = require("express");
const router = express.Router();
const {
  getAllRatings,
  getRatingById,
  getRatingByOwnerId,
  getRatingByProductId,
  addRating,
  deleteRating,
  updateRating,
  getUserData,
} = require("../controllers/ratingController");

router.route("/").get(getAllRatings);
router.route("/owner/:id").get(getRatingByOwnerId);
router.route("/product/:id").get(getRatingByProductId);
router.route("/:id").get(getRatingById);
router.route("/").post(addRating);
router.route("/:id").put(updateRating);
router.route("/:id").delete(deleteRating);
router.route("/author/:id").get(getUserData);

module.exports = router;
