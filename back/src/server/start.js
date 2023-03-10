const app = require("./server");
const { sequelize } = require("../DB_connection");
const saveApiData = require("../controllers/saveApiData");

sequelize.sync({ force: true }).then(async () => {
  console.log("DB connected");
  await saveApiData();
  app.listen(3001, () => {
    console.log("Puerto 3001 super activado perrito");
  });
});
