import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// Higher order function that wraps our handlers
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { SPOTIFY_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user: User;
      try {
        // cheking its a valid user
        const { id } = jwt.verify(token, process.env.SECRET);
        user = await prisma.user.findUnique({
          where: {
            id,
          },
        });

        if (!user) {
          throw new Error("user not found");
        }
      } catch (error) {
        //
        res.status(401);
        res.json({ error: "No access allowed" });
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "No access allowed" });
  };
};
