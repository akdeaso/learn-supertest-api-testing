const baseCartSchema = {
  type: "object",
  properties: {
    id: { type: "number" },
    products: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          title: { type: "string" },
          price: { type: "number" },
          quantity: { type: "number" },
          total: { type: "number" },
          discountPercentage: { type: "number" },
          discountedPrice: { type: "number" },
          thumbnail: { type: "string" },
        },
        required: [
          "id",
          "title",
          "price",
          "quantity",
          "total",
          "discountPercentage",
          "discountedPrice",
          "thumbnail",
        ],
      },
    },
    total: { type: "number" },
    discountedTotal: { type: "number" },
    userId: { type: "number" },
    totalProducts: { type: "number" },
    totalQuantity: { type: "number" },
  },
  required: [
    "id",
    "products",
    "total",
    "discountedTotal",
    "userId",
    "totalProducts",
    "totalQuantity",
  ],
};

const allCartsSchema = {
  type: "object",
  properties: {
    carts: {
      type: "array",
      items: {
        ...baseCartSchema,
      },
    },
    total: { type: "number" },
    skip: { type: "number" },
    limit: { type: "number" },
  },
};

const singleCartsSchema = {
  ...baseCartSchema,
};

const deleteCartSchema = {
  ...baseCartSchema,
  properties: {
    ...baseCartSchema.properties,
    isDeleted: { type: "boolean" },
    deletedOn: { type: "string" },
  },
  required: [...baseCartSchema.required, "isDeleted", "deletedOn"],
};

export { allCartsSchema, singleCartsSchema, deleteCartSchema };
