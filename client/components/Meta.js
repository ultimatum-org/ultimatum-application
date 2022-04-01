import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content={keywords}/>
        <meta name="description" content={description}/>
        <meta charSet="utf-8"/>
        <link rel='icon' href='/favicon.ico'/>
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: "Ultimatum",
    keywords: "ultimatum, blockchain, contribution, development platform, open source, decentralized, decentralized autonomous organization, dao, organization",
    description: "The open source organization empowering the community to make changes to the platforms they use. Our main goal is to provide a platform which allows users to contribute their ideas and skills and get rewarded for it."
}

export default Meta