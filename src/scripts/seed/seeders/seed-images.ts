// Đây là phiên bản dành riêng cho seeders, chỉ chứa đường dẫn string tới file ảnh trong thư mục public.
// Không import trực tiếp ảnh .png để tránh lỗi khi chạy bằng Node/tsx.

export const SeedImages: { [ key: string ]: string } = {
  // Bookstore Project
  BookstoreThumbnail: "images/projects/bookstore-project-thumbnail.png",
  BookstoreHomepage1: "images/projects/bookstore-project-homepage-1.png",
  BookstoreHomepage2: "images/projects/bookstore-project-homepage-2.png",
  BookstoreHomepage3: "images/projects/bookstore-project-homepage-3.png",
  BookstoreCategory1: "images/projects/bookstore-project-category-astronaut-1.png",
  BookstoreCategory2: "images/projects/bookstore-project-category-astronaut-2.png",
  BookstoreCategory3: "images/projects/bookstore-project-category-astronaut-3.png",
  BookstoreBackend: "images/projects/bookstore-project-backend.png",
  BookstoreChatbot: "images/projects/bookstore-chatbot-project-thumbnail.png",

  // ChatHub Project
  ChatHubWeb: "images/projects/chathub-web.png",

  // ForeverBuy Project
  ForeverBuyThumbnail: "images/projects/foreverbuy-ecommerce-project-thumbnail.png",
  ForeverBuyHomepage1: "images/projects/foreverbuy-ecommerce-project-homepage-1.png",
  ForeverBuyHomepage2: "images/projects/foreverbuy-ecommerce-project-homepage-2.png",
  ForeverBuyHomepage3: "images/projects/foreverbuy-ecommerce-project-homepage-3.png",
  ForeverBuyHomepage4: "images/projects/foreverbuy-ecommerce-project-homepage-4.png",
  ForeverBuyCollection1: "images/projects/foreverbuy-ecommerce-project-collection-page-1.png",
  ForeverBuyCollection2: "images/projects/foreverbuy-ecommerce-project-collection-page-2.png",
  ForeverBuyCollection3: "images/projects/foreverbuy-ecommerce-project-collection-page-3.png",
  ForeverBuyCollection4: "images/projects/foreverbuy-ecommerce-project-collection-page-4.png",
  ForeverBuyCollection5: "images/projects/foreverbuy-ecommerce-project-collection-page-5.png",
  ForeverBuyLogin: "images/projects/foreverbuy-ecommerce-project-login-page.png",
  ForeverBuyCart: "images/projects/foreverbuy-ecommerce-project-cart-page.png",
  ForeverBuyDetails: "images/projects/foreverbuy-ecommerce-project-product-details-page.png",

  // Portfolio Project
  PortfolioThumbnail: "images/projects/portfolio-website-thumbnail.png",
  PortfolioCareerGoals: "images/projects/portfolio-website-career-goals.png",
  PortfolioProjects: "images/projects/portfolio-website-projects-section.png",
  PortfolioSkills: "images/projects/portfolio-website-skills-section.png",
  PortfolioGithub: "images/projects/portfolio-website-github-contributions-section.png",
  PortfolioTestimonials: "images/projects/portfolio-website-testimonials-section.png",
  PortfolioFAQ: "images/projects/portfolio-website-faq-section.png",
  PortfolioResume: "images/projects/portfolio-website-resume-section.png",
  PortfolioContact: "images/projects/portfolio-website-contact-section.png",
  PortfolioDetails1: "images/projects/portfolio-website-project-details-page-1.png",
  PortfolioDetails2: "images/projects/portfolio-website-project-details-page-2.png",
  PortfolioDetails3: "images/projects/portfolio-website-project-details-page-3.png",

  // Avatars
  JaneDoeAvatar: "images/avatars/jane-doe.png",
  JohnSmithAvatar: "images/avatars/john-smith.png",
  MichaelChenAvatar: "images/avatars/michael-chen.png",
  SophiaRodriguezAvatar: "images/avatars/sophia-rodriguez.png",
  DavidLeeAvatar: "images/avatars/david-lee.png",
  EmilyWhiteAvatar: "images/avatars/emily-white.png",

  // Common
  ProfilePlaceholder: "images/profile-placeholder.png",
  ProjectPlaceholder: "images/project-placeholder.png",
  DefaultAvatar: "images/avatars/default-avatar.png",
}
