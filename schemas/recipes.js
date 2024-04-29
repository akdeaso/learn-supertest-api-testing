const allRecipesSchema = {
  type: "object",
  properties: {
    recipes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          ingredients: {
            type: "array",
            items: {
              type: "string",
            },
          },
          instructions: {
            type: "array",
            items: {
              type: "string",
            },
          },
          prepTimeMinutes: { type: "number" },
          cookTimeMinutes: { type: "number" },
          servings: { type: "number" },
          difficulty: { type: "string" },
          cuisine: { type: "string" },
          caloriesPerServing: { type: "number" },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
          },
          userId: { type: "number" },
          image: { type: "string" },
          rating: { type: "number" },
          reviewCount: { type: "number" },
          mealType: { type: "array", items: { type: "string" } },
        },
        required: [
          "id",
          "name",
          "ingredients",
          "instructions",
          "prepTimeMinutes",
          "cookTimeMinutes",
          "servings",
          "difficulty",
          "cuisine",
          "caloriesPerServing",
          "tags",
          "userId",
          "image",
          "rating",
          "reviewCount",
          "mealType",
        ],
      },
    },
  },
};

const singleRecipesSchema = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    ingredients: {
      type: "array",
      items: {
        type: "string",
      },
    },
    instructions: {
      type: "array",
      items: {
        type: "string",
      },
    },
    prepTimeMinutes: { type: "number" },
    cookTimeMinutes: { type: "number" },
    servings: { type: "number" },
    difficulty: { type: "string" },
    cuisine: { type: "string" },
    caloriesPerServing: { type: "number" },
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
    userId: { type: "number" },
    image: { type: "string" },
    rating: { type: "number" },
    reviewCount: { type: "number" },
    mealType: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
  required: [
    "id",
    "name",
    "ingredients",
    "instructions",
    "prepTimeMinutes",
    "cookTimeMinutes",
    "servings",
    "difficulty",
    "cuisine",
    "caloriesPerServing",
    "tags",
    "userId",
    "image",
    "rating",
    "reviewCount",
    "mealType",
  ],
};

const limitSkipSchema = {
  type: "object",
  properties: {
    recipes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          image: { type: "string" },
        },
        required: ["id", "name", "image"],
      },
    },
    total: { type: "number" },
    skip: { type: "number" },
    limit: { type: "number" },
  },
};

export { allRecipesSchema, singleRecipesSchema, limitSkipSchema };
