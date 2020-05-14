const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;
// req is short for request
// res is short for response
class User {
  constructor() {
    this._id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this. password = faker.internet.password();
  }
}

class Address{
  constructor() {
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}

class Company {
  constructor() {
    this._id = faker.random.number();
    this.name = faker.company.companyName();
    this.address = new Address();
  }
}

app.get("/api/users/new", (req, res) => {
  res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
  res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
  res.json([new User(), new Company()])
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);