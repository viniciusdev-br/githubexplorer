import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/viniciusdev-br/githubexplorer.git',
}

export default function(){
    const [repositories, setRespositories] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/viniciusdev-br/repos')
        .then(response => response.json())
        .then(data => setRespositories(data))
    }, []) //Nunca esquecer o segundo parâmetro

    return(
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}