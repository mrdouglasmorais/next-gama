import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

import api from '../../service/api';
import { Container } from '../../styles/pages/Home/style';
import { CurrencyTemplate } from '../../lib';
import { AllCourses } from '../../interfaces/index'

export default function Categories( { courses }: AllCourses ){
    const route = useRouter();

    if( route.isFallback ){
        return <p>Aguarde, estamos montando este conteúdo</p>
    }

    return(
        <Container>
            <Image src="/img/logo.png" height={80} width={200}/>
            <h1>{route.query.slug}</h1>
            <div>
                <ul>
                    { courses.map( course => (
                        <li key={course.id} > { course.title } | { CurrencyTemplate(course.price) }</li>
                    )) }
                </ul>
            </div>
        </Container>
    )
}

// Listagem de categorias estática
export const getStaticPaths: GetStaticPaths = async ( context ) => {

    const response = await api.get(`categories`);
    const categories = response.data;

    const paths = categories.map( category => {
        return{
            params: { slug: category.id }
        }
    })

    return {
        paths,
        fallback: true
    }
}


// gerar conteúdo estático:
export const getStaticProps: GetStaticProps<AllCourses | ParsedUrlQuery> = async ( context ) => {
    const { slug } = context.params;

    const response = await api.get(`courses?category_id=${slug}`);
    const courses = response.data;

    return {
        props: {
            courses,
        },
        revalidate: 60,
    }
}