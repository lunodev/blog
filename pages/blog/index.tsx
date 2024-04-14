import matter from 'gray-matter';
import fs from "fs";
import path from "path";
import Blog from "../../components/sections/Blog/Blog";


export default function BlogIndex(props: {
  posts: [{
    slug: string,
    frontMatter: { [key: string]: string }
  }]
}){
  return <Blog {...props}/>;
}


export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.filter(filename => filename.includes(".md")).map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
    )

    const {data: frontMatter} = matter(markdownWithMeta)

    return {
      slug,
      frontMatter,
    }
  }).sort((a, b) => (
      new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  ));

  return {
    props: {
      posts,
    },
  }
}
