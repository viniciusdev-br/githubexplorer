import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform2';

export default function(){
    return(
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            <ul>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}