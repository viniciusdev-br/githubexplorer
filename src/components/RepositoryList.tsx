import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export default function(){
    const [repositories, setRespositories] = useState<Repository[]>([])
    useEffect(() => {
        fetch('https://api.github.com/users/viniciusdev-br/repos')
        .then(response => response.json())
        .then(data => setRespositories(data))
    }, []) //Nunca esquecer o segundo parâmetro

    return(
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}  
            </ul>
        </section>
    )
}