export default {
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "e.g. Pascal Bruinenberg",
    },
    {
      name: "title",
      type: "string",
      title: "Job/Company Title",
      description: "e.g. Eigenaar Brunmontagne",
    },
    {
      name: "avatar",
      type: "mainImage",
      title: "Avatar",
    },
    {
      name: "review",
      type: "string",
      title: "Review content",
      description: "The actual review.",
    },
  ],
};
