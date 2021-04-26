const getPageURL = function (slug) {
  return `/p/${slug.current || slug}/`;
};

export default getPageURL;
