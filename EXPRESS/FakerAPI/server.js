const express = require("express");
const app = express();
const port = 8000;

app.listen( port, () => console.log(`Listening on port: ${port}`) );


const { faker } = require("@faker-js/faker");

//user object
const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
  };
  return newUser;
};

const newUserAPI = createUser();
console.log(newUserAPI);


app.get("/api/users/new", (req, res) => {
    res.json(newUserAPI);
})

// company object
const createCompany = () => {
  const newCompany = {
    name: faker.company.name(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newCompany;
};
const newCompanyAPI = createCompany();
console.log(newCompanyAPI);

//routes
app.get("/api/company/new", (req,res) =>{
    res.json(newCompanyAPI);
})

// app.get("/api/user/company", (req,res) =>{
//     res.json(newUserAPI,newCompanyAPI);
// })

