import { NextRequest, NextResponse } from "next/server";
import { User } from "@prisma/client";
import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(
  async (req: NextRequest, res: NextResponse, user: User) => {
    const playlists = await prisma.playlist.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: "asc",
      },
    });

    res.json(playlists);
  }
);
