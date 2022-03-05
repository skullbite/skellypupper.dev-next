import Head from 'next/head'
import projects from '../../public/projects.json'
import ProjectBox from '../../components/ProjectBox'

export async function getServerSideProps() {
    return { props: { aliveProjects: projects.filter(project => !project.dead) } }
}

export default ({ aliveProjects }) => <>
    <Head>
        <title>Active Projects</title>
    </Head>
    <body className="theme-purple">
        <div className="center-object" id="projects">
            { aliveProjects.map(p => <ProjectBox 
            name={p.name} 
            github={p.github} 
            dead={p.dead} 
            color={p.color}
            image={p.image}
            description={p.description}
            langAsset={p.langAsset}
            />)}
        </div>
    </body>
</>