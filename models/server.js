const StudentController = require('./controllers/StudentController')
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/students", (request, response) => {
  const visualPartners = StudentController.getAllPartners();

  response.json(visualPartners);
});

app.get("/v1/students/emails", (request, response) => {
  const PartnersWithCertification = StudentController.getPartnersWithCertification();

  response.json(PartnersWithCertification);
});

app.get("/v1/students/credits", (request, response) => {
  const PartnersOver500 = StudentController.getPartnersOver500();

  response.json(PartnersOver500);
});

app.listen(port, () => {
  console.log(`VisualPartners API in localhost:${port}`);
});