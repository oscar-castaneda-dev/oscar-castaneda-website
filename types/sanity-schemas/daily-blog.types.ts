export interface ICompactDailyBlogPosts {
  title: string;
  smallDescription: string;
  currentSlug: string;
  createdAt: string;
}

export interface IDailyBlogPost {
  currentSlug: string;
  title: string;
  content: any;
  createdAt: string;
}
