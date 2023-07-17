const { PrismaClient } = require("@prisma/client");
const PlantData = require("./PlantData.json");

const prisma = new PrismaClient();

//migrating data from local JSON file to project database
async function seedDatabase() {
  try {
    // Iterate over wildflowers and create them in the database
    for (const wildflower of PlantData.wildflowers) {
      await prisma.flower.create({
        data: {
          lenapeName: wildflower.lenapeName,
          lenapeMeaning: wildflower.lenapeMeaning,
          englishName: wildflower.englishName,
          lenapeTalkingDict: wildflower.lenapeTalkingDict,
          latinName: wildflower.latinName,
          fileExt: wildflower.fileExt,
          family: wildflower.family,
          price: wildflower.price,
          description: wildflower.description,
          native: wildflower.native,
          growingConditions: wildflower.growingConditions,
          height: wildflower.height,
          blooms: wildflower.blooms,
          naturalHabitat: wildflower.naturalHabitat,
          seedsPerPacket: wildflower.seedsPerPacket,
          germination: wildflower.germination,
          germNotes: wildflower.germNotes,
          pairs: wildflower.pairs,
          lenapeDescription: wildflower.lenapeDescription,
          informant: wildflower.informant,
          lenapeDescriptionSource: wildflower.lenapeDescriptionSource,
        },
      });
    }

    console.log("Seed data successfully inserted.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
