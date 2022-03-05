import Head from 'next/head'
import { Tooltip } from '@nextui-org/react'

export default () => <>
    <Head>
        <title>gib money</title>
    </Head>
    <body className="theme-green">
        <div className="center-object">
            <div className="info-box">
                <div className="info-text">
                    <h3>stuff ain't cheap :P</h3>
                    <p>Coding doesn't make me money yet, so i'd appriciate anything you could give me</p>
                    <div className="buttons" style={{ display: "flex" }}>
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