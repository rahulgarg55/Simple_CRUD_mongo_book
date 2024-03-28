const express = require("express");
const router = express.Router();
const { createBook, getBook, updateBook, deleteBook } = require("../controllers/bookController");

router.get("/:id", getBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
