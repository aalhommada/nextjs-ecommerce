const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://aalhommada-ecommerce.now.sh"
    : "http://localhost:3000";

export default baseUrl;
