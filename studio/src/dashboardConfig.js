export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6060ea432a3799afc46d0f08",
                  title: "Sanity Studio",
                  name: "renti-studio",
                  apiId: "e1a4efeb-c679-4d0e-950c-ba81ffb426c1",
                },
                {
                  buildHookId: "6060ea43a70a453aadce8eca",
                  title: "Blog Website",
                  name: "renti",
                  apiId: "5d6a2fad-4840-4874-b20e-7a7e393b9923",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Passadoh/renti",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://renti.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
