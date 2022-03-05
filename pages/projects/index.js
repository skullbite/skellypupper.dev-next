import Head from 'next/head'
import { Tooltip } from '@nextui-org/react'

export default () => <>
    <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
        
    </Head>
    <body className="theme-pink">
        <div className="center-object"><meta property="og:title" content="Projects" />
        <meta name="theme-color" content="#874572" />
        <meta property="og:site_name" content="skellypupper.dev" />
        <meta property="og:description" content="Take a look at stuff I worked on!" />
            <div className="info-box">
                <img draggable="false" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/282/laptop_1f4bb.png" />
                <div className="info-text">
                    <h3>Active Projects</h3>
                    <p>Stuff I'm doing.</p>
                    <div className="buttons">
                        <Tooltip content="View Projects" color='invert'>
                            <a className="bi bi-eye-fill" href="/projects/active" />
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="info-box">
                <img draggable="false" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/282/headstone_1faa6.png" />
                <div className="info-text">
                    <h3>Dead Projects</h3>
                    <p>Here lies all the projects I don't work on anymore.</p>
                    <div className="buttons">
                        <Tooltip content="View Projects" color='invert'>
                            <a className="bi bi-eye-fill" href="/projects/dead" />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    </body>
</>