import mongoose from 'mongoose';
import supertest from 'supertest';
import Business from '../../src/models/business';
import app from '../../src/app';

import config from '../../src/config/config';

const request = supertest(app);

describe("api/business", () => {
  beforeAll(async (done) => {
    await mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    done();
  });

  beforeEach(async (done) => {
    await Business.deleteMany({});
    done();
  });

  describe("POST /", () => {
    it("should create a new business", async (done) => {
      expect.assertions(1);

      // TODO change that part to use Faker
      const business = {
        "name": "nkapsi sarl",
        "email": "contact@nkapsi.cm",
        "phone": "666615482",
        "description": "We are a microfinance",
        "website": "http://nkapsi.cm",
      };

      const { body, status } = await request.post('/business').send(business);
      expect(status).toBe(200);

      done();
    });

    it("returns the list of business", async (done) => {
      const response = await request.get('/business');
      expect(response.status).toBe(200);

      done();
    });
  });

  afterAll(async (done) => {
    mongoose.connection.close();
    done();
  });
});

