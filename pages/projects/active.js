import Head from 'next/head'
import projects from '../../public/projects.json'
import ProjectBox from '../../components/ProjectBox'

export async function getServerSideProps() {
    return { props: { aliveProjects: projects.filter(project => !project.dead) } }
}

export default ({ aliveProjects }) => <>
    <Head>
        <title>Active Projects</title>
        <meta property="og:title" content="Active Projects" />
        <meta name="theme-color" content="#644587" />
        <meta property="og:site_name" content="skellypupper.dev" />
        <meta property="og:description" content="Here's stuff I work on." />
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