import Head from 'next/head'
import { Tooltip } from '@nextui-org/react'

export default () => <>
    <Head>
        <title>gib money</title>
        <meta property="og:title" content="gimme money" />
        <meta name="theme-color" content="#478745" />
        <meta property="og:site_name" content="skellypupper.dev" />
        <meta property="og:description" content="pls i need it" />
    </Head>
    <body className="theme-green">
        <div className="center-object">
            <div className="info-box">
                <div className="info-text">
                    <h3>stuff ain't cheap :P</h3>
                    <p>Coding doesn't make me money yet, so i'd appriciate anything you could give me</p>
                    <div className="buttons">
                        <Tooltip color="invert" content='PayPal'>
                            <a className="bi bi-paypal" href="https://paypal.me/skellypupper" />
                        </Tooltip>
                        <Tooltip color="invert" content="Github Sponsors">
                            <a className="bi bi-suit-heart-fill" href="https://github.com/sponsors/Skullbite" />
                        </Tooltip>
                        <Tooltip color="invert" content="Kofi">
                            <a className="bi bi-cup-fill" href="https://ko-fi.com/skullbite" />
                        </Tooltip>
                        <Tooltip color="invert" content="Cash App">
                            <a className="bi bi-currency-dollar" href="https://cash.app/$skullyss" />
                        </Tooltip>
                        <Tooltip color="invert" content="Home">
                            <a className="bi bi-house" href="/" />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    </body>
</>