import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

// In a real implementation, these would be fetched from your blog posts
export const blogPosts = [
  {
    title: "Benefits of Internships: How to Gain Experience and Build Your Network",
    excerpt:
      "Internships are a great way to gain practical experience, build your resume, and network with professionals in your field.",
    date: "March 15, 2025",
    slug: "benefits-of-internships",
    bloglink: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_3ccommunity-internship-careergrowth-activity-7303291531333894145-gnfB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
  },
  {
    title: "Building real World Products: A Guide to Product Development",
    excerpt: "Learn the key steps in product development, from ideation to launch, and how to build products that solve real-world problems.",
    date: "March 7, 2025",
    slug: "building-real-world-products",
    bloglink: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_productmanagement-uxresearch-mvp-activity-7301202660920119296-WfJy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
  },
  {
    title: "The Ability to Say NO: A Key Skill for Everyone",
    excerpt:
      "Saying no is a powerful skill that can help you set boundaries, prioritize your time, and focus on what truly matters.",
    date: "February 10, 2023",
    slug: "the-ability-to-say-no",
    bloglink: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_3ccommunity-selflove-personalgrowth-activity-7298589548526137344-0e2o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
  },
  {
    title: "The Importance of Networking: Building Connections for Career Success",
    excerpt:
      "Networking is essential for career growth. Learn how to build meaningful connections and leverage them for success.",
    date: "January 5, 2023",
    slug: "the-importance-of-networking",
    bloglink: "https://www.linkedin.com/posts/muhammed-aminu-umar-0356a5288_networking-careerdevelopment-activity-7296581230981959680-2c4g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXek-kBkEiOg64E5pha09SVYfbiUygq2xM",
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="section-heading">Blog</h2>
      <p className="section-subheading">
        Insights, tutorials, and thoughts on technology, design, and product development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col h-full border border-neutral-300 card-hover">
            <CardHeader>
              <CardTitle className="text-xl text-primary-dark">{post.title}</CardTitle>
              <div className="flex items-center text-sm text-neutral-500 mt-2">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-neutral-700">{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter>
              {/* <Link href={`/blog/${post.slug}`} className="w-full"> */}
              <Link href={post.bloglink} target="_blank" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/blog">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Posts
          </Button>
        </Link>
      </div>
    </div>
  )
}
