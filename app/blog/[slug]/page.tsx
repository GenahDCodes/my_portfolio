import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import { blogPosts } from "@/components/blog"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  return {
    title: post ? `${post.title} | Your Name` : "Blog Post | Your Name",
    description: post?.excerpt || "Read this insightful article on technology and development.",
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-6 text-primary-dark">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog">
            <Button className="btn-primary">Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-primary hover:text-primary-dark">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-dark">{post.title}</h1>

          <div className="flex items-center text-sm text-neutral-500 mb-8">
            <Calendar className="h-4 w-4 mr-2" />
            {post.date}
          </div>

          {/* This would be your actual blog content, perhaps from a CMS or markdown file */}
          <div className="prose prose-lg max-w-none text-neutral-700">
            <p>
              This is a placeholder for the actual blog content. In a real implementation, this would be fetched from a
              CMS or markdown file.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
              Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et
              diam eget libero egestas mattis sit amet vitae augue.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">Section Heading</h2>
            <p>
              Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies
              a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem.
            </p>
            <ul className="list-disc pl-5 my-4">
              <li>Point one about the topic</li>
              <li>Another important consideration</li>
              <li>Something else to keep in mind</li>
            </ul>
            <p>
              Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat
              sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis
              libero in urna ultrices accumsan.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-dark">Conclusion</h2>
            <p>
              Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
              facilisis semper ac in est.
            </p>
          </div>

          <div className="border-t border-neutral-300 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-4 text-primary-dark">Share this article</h3>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Share on Twitter
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Share on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
