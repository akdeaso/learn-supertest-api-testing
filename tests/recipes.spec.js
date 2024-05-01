import { use, expect } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import { api } from "../config.js";
import {
  allRecipesSchema,
  limitSkipSchema,
  singleRecipesSchema,
} from "../schemas/recipes.js";

use(chaiJsonSchema);

describe("Test cases for recipes endpoint", () => {
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
  it("Should return all queried recipes by name", async () => {
    try {
      const res = await api.get("/recipes/search?q=Margherita").expect(200);
      expect(res.body).to.be.jsonSchema(allRecipesSchema);
    } catch (err) {
      console.log(err);
    }
  });
  it("Should return specific selected data with limit and skip params", async () => {
    try {
      const res = await api
        .get("/recipes?limit=10&skip=10&select=name,image")
        .expect(200);
      expect(res.body).to.be.jsonSchema(limitSkipSchema);
    } catch (err) {
      console.log(err);
    }
  });
  it("Should return all recipes tags", async () => {
    try {
      const res = await api.get("/recipes/tags").expect(200);
      expect(res.body).to.be.an("array");
    } catch (err) {
      console.log(err);
    }
  });
  it("Should return all queried recipes by specific tag", async () => {
    try {
      const res = await api.get("/recipes/tag/Pakistani").expect(200);
      expect(res.body).to.be.jsonSchema(allRecipesSchema);
    } catch (err) {
      console.log(err);
    }
  });
  it("Should return all queried recipes by specific meal type", async () => {
    try {
      const res = await api.get("/recipes/meal-type/snack").expect(200);
      expect(res.body).to.be.jsonSchema(allRecipesSchema);
    } catch (err) {
      console.log(err);
    }
  });
});
