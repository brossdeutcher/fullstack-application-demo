const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("You have reached the api router");
});

router.get("/trains", async (req, res) => {
  const trains = await prisma.train.findMany();
  res.send(trains);
});

router.get("/trains/:id", async (req, res) => {
  try {
    const train = await prisma.train.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (train) {
      res.send(train);
    } else {
      res.send('train not found')
    }
  } catch (err) {
    res.send({ error: true, message: "something went wrong"})
  }
});

module.exports = router;
