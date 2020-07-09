import { request } from 'supertest';
import { expect } from 'chai';
import Business from '../../src/models/business';
import { app } from '../../src/app';

console.log(Business);

describe("api/business", () => {
  beforeEach(async (done) => {
    await Business.deleteMany({});
    done();
  });

  describe("POST /", async () => {
    it("should create a new business", async () => {
      const business = {
        "name": "nkapsi sarl",
        "email": "contact@nkapsi.cm",
        "phone": "666615482",
        "description": "We are a microfinance",
        "website": "http://nkapsi.cm",
      };

      const res = await request(app).post('/business', business);
      expect(res.status).to.equal(200);
    })
  });
});

