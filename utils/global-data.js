export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Muhammad';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Muhammad.my Blog';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All%20rights%20reserved.%20Made%20in%20%F0%9F%87%B2%F0%9F%87%BE.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
