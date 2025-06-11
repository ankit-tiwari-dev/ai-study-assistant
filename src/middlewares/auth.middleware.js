import { asyncHandler } from "../utils/asyncHandler.js"
import { JWT } from "jsonwebtoken"
import { User } from "../models/user.model.js"

export const verifyJWT = asyncHandler(async (req, _, next) => {
    
});