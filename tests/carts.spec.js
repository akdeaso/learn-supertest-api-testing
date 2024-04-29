import { use, expect } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import { api } from "../config.js";
import { allCartsSchema, singleCartsSchema } from "../schemas/carts.js";

use(chaiJsonSchema);

describe("GET /carts", () => {
  it.only("Should return all carts", async () => {
    try {
      const res = await api.get("/carts").expect(200);
      expect(res.body).to.be.jsonSchema(allCartsSchema);
    } catch (err) {
      console.log(err);
    }
  });
  it.only("Should return single cart", async () => {
    try {
      const res = await api.get("/carts/7").expect(200);
      expect(res.body).to.be.jsonSchema(singleCartsSchema);
    } catch (err) {
      console.log(err);
    }
  });
  it.only("Should return carts of user", async () => {
    try {
      const res = await api.get("/carts/user/5").expect(200);
      expect(res.body).to.be.jsonSchema(allCartsSchema);
    } catch (err) {
      console.log(err);
    }
  });
});

describe("POST /carts", () => {
  it.only("Should add new cart", async () => {
    try {
      const reqBody = {
        userId: 1,
        products: [
          {
            id: 7,
            quantity: 1,
          },
          {
            id: 49,
            quantity: 2,
          },
        ],
      };
      const res = await api.post("/carts/add").send(reqBody).expect(200);
      console.log(res.body);
      expect(res.body).to.be.jsonSchema(singleCartsSchema);
    } catch (err) {
      console.log(err);
    }
  });
});
