const { persistenceService } = require("../build/services/PersistenceService");

test('Test Boilerplate', () => {

});

test('Should return an object', (done) => {
  persistenceService.getPhotoById(204)
    .then((result) => {
      expect(typeof result).toBe(typeof {})
      done()
    })
})