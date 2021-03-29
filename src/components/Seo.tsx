import Head from 'next/head'

interface SeoProps {
    title: string;
    description?: string;
    image?: string;
    containSufix?: boolean; 
}

export default function Seo({
    title,
    description,
    image,
    containSufix
}: SeoProps) {
    const pageTitle = `${title} ${ !containSufix ? ' | Gama Academy' : ''  }`
    return (
        <Head>
            <title>{pageTitle}</title>
            {description && <meta name="description" content={description} />}
            {image && <meta name="image" content={image} />}

            <link rel="shortcut icon" href="favicon.ico" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content="https://www.meusite.com.br/ola-mundo" />
            <meta property="og:title" content="Utilizando as meta tags do Facebook." />
            <meta property="og:site_name" content="Accenture Academy" />
            <meta property="og:description" content="O tutorial para compartilhar o conteúdo do seu site de forma eficaz." />
            <meta property="og:image" content="/img/gama-icon.jpeg" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
        </Head>
    )
}