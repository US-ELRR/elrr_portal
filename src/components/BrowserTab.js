import Head from 'next/head'

export default function BrowserTab({ title }) {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}