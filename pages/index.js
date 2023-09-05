// debugger
import Link from 'next/link'
const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href="/blog">go blog</Link> <br/>
    <Link href="/Link">go Link = blog</Link>
  </div>
)
export default Index
