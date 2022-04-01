import Head from 'next/head'
import LinkIcon from '../components/LinkIcon'

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
                        <LinkIcon
                        tooltipText="Paypal"
                        iconClass="bi bi-paypal"
                        href="https://paypal.me/skellypupper"
                        />
                        <LinkIcon
                        tooltipText="Github Sponsors"
                        iconClass="bi bi-suit-heart-fill"
                        href="https://github.com/sponsors/Skullbite"
                        />
                        <LinkIcon
                        tooltipText="Kofi"
                        iconClass="bi bi-cup-fill"
                        href="https://ko-fi.com/skullbite"
                        />
                        <LinkIcon
                        tooltipText="Cash App"
                        iconClass="bi bi-currency-dollar"
                        href="https://cash.app/$skullyss"
                        />
                        <LinkIcon
                        tooltipText="Home"
                        iconClass="bi bi-house"
                        href="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    </body>
</>