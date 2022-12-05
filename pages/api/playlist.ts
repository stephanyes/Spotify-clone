import { NextRequest, NextResponse } from "next/server";
import { Playlist, User } from "@prisma/client";
import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(
  async (req: NextRequest, res: NextResponse, user: User) => {
    const playlists: Playlist[] = await prisma.playlist.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: "asc",
      },
    });

    // @ts-ignore - Not sure what it shows error without line
    res.json(playlists);
  }
);
