var faker = require('faker');

// function getContractorData() {
//     var contractors = [];
//     for(var i = 0; i < 25; i++) {
//      contractors.push({
//       name: faker.name.findName(),
//       email: faker.internet.email(),
//       city: faker.address.city(),
//       company: faker.company.companyName(),
//       phoneNumber: faker.phone.phoneNumber()
//      });
//     }
//     return contractors;
// }

// module.exports = getContractorData;

class Contractor {
    getContractorData() {
        var contractors = [];
        for(var i = 0; i < 25; i++) {
         contractors.push({
          name: faker.name.findName(),
          email: faker.internet.email(),
          city: faker.address.city(),
          company: faker.company.companyName(),
          phoneNumber: faker.phone.phoneNumber()
         });
        }
        console.log(contractors);
        return contractors;
    }
}


module.exports = new Contractor();
