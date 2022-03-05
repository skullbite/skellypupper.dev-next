import Head from 'next/head'

export default () => <>
    <Head>
        <title>More about me</title>
        <meta property="og:title" content="Dev Info" />
        <meta name="theme-color" content="#878145" />
        <meta property="og:site_name" content="skellypupper.dev" />
        <meta property="og:description" content="FAQ????" />
    </Head>
    <body className="theme-gold">
        <div className="center-object">
            <div className="info-box" style={{ blockSize: "fit-content", width: "fit-content", padding: "10px" }}>
                <div className="info-text">
                    <p><b>Who are you?</b> I'm Sahkai Stowe (screen name: skullbite). A dumb, furry, community college student dreaming to become a fulltime (and stack) software developer.</p>
                    <p><b>What have you made?</b> A lot of weird thing you can find in my <a href="/projects">projects</a>.</p>
                    <p><b>What languages are you good at?</b> I wouldn't say what I'm good any languages but, I'm somewhat fluent in Typescript and Python.</p>
                    <p><b>Is there anyway I can contact you?</b> <a href="mailto:sahkaistowe@gmail.com">Email</a> me. Or contact me on my other social medias.</p>
                    <p><b>Do you accept commissioned projects?</b> I don't exactly have a system for commissioned projects, if you want something made by me, you can contact me on discord and we'll figure it out.</p>
                    <br />
                    <p><b>Where's the home button?</b> <a href="/">Right here.</a></p>
                </div>
            </div>
        </div>
    </body>
</>