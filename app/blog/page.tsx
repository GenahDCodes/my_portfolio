import Blog from "@/components/blog"

export const metadata = {
  title: "Blog | Your Name",
  description: "Articles, tutorials and insights on technology, design, and product development.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Blog />
    </div>
  )
}
