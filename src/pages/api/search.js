import prisma from "../../../lib/prisma";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;
      //   search all fields of flowers:
      const plants = await prisma.flower.findMany({
        where: {
          OR: [
            {
              englishName: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              lenapeName: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              lenapeMeaning: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              latinName: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              growingConditions: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              blooms: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              germNotes: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              lenapeDescription: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        },
      });

      res.status(200).json({ plants });
    } catch (error) {
      res.status(500).end();
    }
  }
}
