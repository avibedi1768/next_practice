import React, { useEffect } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';

// export default ({ href, children }) => {
//     const router = useRouter();
//     let className = children.props.className || ''
//     if (router.pathname == href) {
//         classname = '${className} selected'
//     }

//     return <Link href={href}>{React.cloneElement(children, { className })}</Link>
// }

export default()=>{
    const router = useRouter();

    useEffect(()=>{
        router.push('/blog')
    })
}   