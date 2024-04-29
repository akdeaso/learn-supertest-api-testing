import { use, expect } from "chai";
import supertest from "supertest";
import chaiJsonSchema from "chai-json-schema-ajv";
import { allRecipesSchema, singleRecipesSchema } from "../schemas/recipes.js";

use(chaiJsonSchema);
const api = supertest("https://dummyjson.com");

describe("GET /recipes", () => {
  it("Should return all recipes", async () => {
    try {
      const res = await api.get("/recipes").expect(200);
      expect(res.body).to.be.jsonSchema(allRecipesSchema);
    } catch (err) {
      console.log(err);
    }
  });
  it("Should return single recipes", async () => {
    try {
      const res = await api.get("/recipes/7").expect(200);
      expect(res.body).to.be.jsonSchema(singleRecipesSchema);
    } catch (err) {
      console.log(err);
    }
  });
});
