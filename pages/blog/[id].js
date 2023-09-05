import Link from 'next/link';
import posts from '../../posts.json';

export default () => {
    return (
        <div>
            <h1>Blog page</h1>
            <Link href="/">go home</Link>
            <ul>
                {Object.entries(posts).map((value, index) => {
                    return <li key={index}>{value[1].title}</li>
                })}
            </ul>
        </div>
    )
}
