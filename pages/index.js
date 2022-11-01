import Head from 'next/head'
import LinkIcon from '../components/LinkIcon'

const curDate = new Date();

export async function getServerSideProps() {
    try {
        const res = await fetch(`https://discord.com/api/users/${process.env.USER_ID}`, { method: "GET", headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` } })
        const data = await res.json()
        // Discord had an outage the day this was commited
        return { props: {
            pfp: `https://images.discordapp.net/avatars/${process.env.USER_ID}/${data.avatar}.png?size=512`
        } }
    }
    catch {
        return { props: {
            pfp: "/assets/fallback.png"
        } }
    }
}

export default ({ pfp }) => 
    <>
    <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="hi" />
        <meta name="theme-color" content="#456287" />
        <meta property="og:site_name" content="skellypupper.dev" />
        <meta property="og:description" content="Look at my cool website." />
        <meta property="og:image" content={ pfp } />
    </Head>
    <body className="theme-blue">
        <div className="center-object">
            <div className="info-box">
                <img draggable="false" src={ pfp } alt="Discord profile picture" />
                <div className="info-text">
                    <h3>hi, i'm skullbite.</h3>
                    <p>Freetime fullstack dev. <br/> Somewhat fluent with python and typescript. <br/> { curDate.getDate() === 31 && curDate.getMonth() === 9 ? "also today is my birthday wooo 🎉" : null } </p>
                    <div className="buttons">
                        <LinkIcon
                        tooltipText="Dev Information"
                        iconClass="bi bi-info-square-fill"
                        href="/info"
                        />
                        <LinkIcon
                        tooltipText="Discord: Skullbite#3621"
                        iconClass="bi bi-discord"
                        href="https://discord.gg/aUWRnWQsC9"
                        />
                        <LinkIcon
                        tooltipText="Instagram: @idiot.cowboy"
                        iconClass="bi bi-instagram"
                        href="https://www.instagram.com/idiot.cowboy/"
                        />
                        <LinkIcon
                        tooltipText="Github: skullbite"
                        iconClass="bi bi-github"
                        href="https://github.com/skullbite"
                        />
                        <LinkIcon
                        tooltipText="Donations"
                        iconClass="bi bi-cash"
                        href="/fundme"
                        />
                        <LinkIcon
                        tooltipText="Projects"
                        iconClass="bi bi-code-square"
                        href="/projects"
                        />
                    </div>
                </div>
            </div>
        <button 
          type="button" 
          id="cutiebutton" 
          onClick={() => {
            const cutieButton = document.getElementById("cutiebutton")
            cutieButton.innerHTML = "Welp. You didn't listen. Now you're a huge cutie. Check your console for more info."
            cutieButton.disabled = true
            cutieButton.style.textDecoration = "none"
            console.warn("So it appears you've clicked the button you've been told not to click. You don't like to listen so you've been deemed a cutie, although i think you're quite adorable to be honest. If you didn't want this should've listened you big cutie.")
          }}>Don't click this button</button>
        </div>
    </body>
    </>
