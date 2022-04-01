import Head from 'next/head'
import projects from '../../public/projects.json'
import ProjectBox from '../../components/ProjectBox'

export async function getServerSideProps() {
    return { props: { deadProjects: projects.filter(project => project.dead) } }
}

export default ({ deadProjects }) => <>
    <Head>
        <title>Dead Projects</title>
        <meta property="og:title" content="Dead Projects" />
        <meta name="theme-color" content="#8e8e8e" />
        <meta property="og:site_name" content="skellypupper.dev" />
        <meta property="og:description" content="Here lies stuff I don't work on." />
    </Head>
    <body className="theme-gray">
        <div className="center-object" id="projects">
            { deadProjects.map(p => <ProjectBox 
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