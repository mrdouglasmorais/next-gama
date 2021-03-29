import { GetServerSideProps } from "next";

import api from "../service/api";
import { Container } from '../styles/pages/Home/style';

interface IRecommended{
    id: number;
    title: number;
    price: number;
    category_id: string;
    slug: string;
}

interface AllRecomended{
    result: IRecommended[]
}

export default function Tester({ result }: AllRecomended ){

    return(
        <Container>
            <h1>Cursos recomendados para você!</h1>
            <div>
            { result.map( result => (
                <div key={result.id}>
                    <h5>{ result.title } | { result.price }</h5>
                </div>
            )) }
            </div>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps<AllRecomended> = async ( context ) => {
    const response = await api.get('recommended');
    const result = response.data;

    return {
        props: {
            result,
        }
    }
}