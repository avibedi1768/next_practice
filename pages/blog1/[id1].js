import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
    const router = useRouter();

    return (
        <>
            <h1>Blog1 page</h1>
            <p>title: {router.query.id1}</p>
            <Link href="/">go home</Link> <br/>
            <a href="/">go home</a>
        </>
    )
}