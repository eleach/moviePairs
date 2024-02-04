import { PrismaClient } from '@prisma/client';
let prisma = new PrismaClient();

async function seed() {
  getJokes();
}

seed();

async function getJokes() {
  // shout-out to https://icanhazdadjoke.com/

  const createMany1 = await prisma.movies.createMany({
    data: [
      { myId: 1, name: 'Tokyo Story' },
      { myId: 2, name: 'Seven Samurai' },
      { myId: 877, name: 'Blade Runner 2049' },
      { myId: 878, name: 'Shazam!' },
      { myId: 879, name: 'American Masters' },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });

  const createMany2 = await prisma.actors.createMany({
    data: [
      { myId: 1, name: 'Bess Flowers' },
      { myId: 2, name: 'Sam Harris' },
      { myId: 3, name: 'Bert Stevens' },
      { myId: 4, name: 'William H. OBrien' },
      { myId: 5, name: 'Ward Bond' },
      { myId: 5787, name: 'Abe Vigoda' },
      { myId: 5788, name: 'Abel Gance' },
      { myId: 5789, name: 'Abdelghafour Elaaziz' },
      { myId: 5790, name: 'Aaron Eckhart' },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });

  const createMany3 = await prisma.assoc.createMany({
    data: [
      { myId: 1, movie: 1, actor: 53 },
      { myId: 2, movie: 1, actor: 1927 },
      { myId: 3, movie: 1, actor: 573 },
      { myId: 16046, movie: 879, actor: 4670 },
      { myId: 16047, movie: 879, actor: 2515 },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
}
