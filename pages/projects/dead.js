import Head from 'next/head'
import projects from '../../public/projects.json'
import ProjectBox from '../../components/ProjectBox'

export async function getServerSideProps() {
    return { props: { aliveProjects: projects.filter(project => project.dead) } }
}

export default ({ aliveProjects }) => <>
    <Head>
        <title>Dead Projects</title>
    </Head>
    <body className="theme-gray">
        <div className="center-object" id="projects">
            { aliveProjects.map(p => <ProjectBox 
            name={p.name} 
            github={p.github} 
            dead={p.dead} 
            color={p.color}
            image={p.image}
            description={p.description}
            langAsset={p.langAsset}
            deathReason={p.deathReason}
            />)
            }
        </div>
    </body>
</>