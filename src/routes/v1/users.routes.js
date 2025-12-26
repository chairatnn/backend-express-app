import { Router } from "express";
import {
  createUser1,
  deleteUser1,
  getUsers1,
  // testAPI,
} from "../../modules/users/users.controller.js";

export const router = Router();

// router.get("/test", testAPI);

router.get("/", getUsers1);

router.post("/", createUser1);

router.delete("/:id", deleteUser1);
