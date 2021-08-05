_.times(5, function(n) {
    return {
      id: n,
      name: faker.name.findName(),
      salary: faker.random.number(),
      country: faker.address.country(),
      city: faker.address.city()
    }
  })