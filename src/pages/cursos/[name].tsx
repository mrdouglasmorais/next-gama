import { useRouter } from 'next/router';

export default function Students(){
    const route = useRouter()
    console.log(route.query.id)
    return(
        <div>
            <h1> { route.query.name } </h1>
            <p> { route.query.id } </p>
        </div>
    )
}