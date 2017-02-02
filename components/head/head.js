import Head from 'next/head';

export default ({title, metaDesc}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={metaDesc} />
      <style>{`
        /*  Fonts  */
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-Light.ttf');
          font-weight: 200;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-Regular.ttf');
          font-weight: 400;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-SemiBold.ttf');
          font-weight: 600;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-Bold.ttf');
          font-weight: 700;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-ExtraBold.ttf');
          font-weight: 800;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-LightItalic.ttf');
          font-weight: 200;
          font-style:italic;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-RegularItalic.ttf');
          font-weight: 400;
          font-style:italic;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-SemiBoldItalic.ttf');
          font-weight: 600;
          font-style:italic;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-BoldItalic.ttf');
          font-weight: 700;
          font-style:italic;
        }
        @font-face{
          font-family: "OpenSans";
          src: url('../static/fonts/OpenSans-ExtraBoldItalic.ttf');
          font-weight: 800;
          font-style:italic;
        }

        @font-face{
          font-family: "Bariol";
          src: url('../static/fonts/bariol_regular-webfont.ttf');
          font-weight: 400;
        }
        @font-face{
          font-family: "Bariol";
          src: url('../static/fonts/bariol_regular_italic-webfont.ttf');
          font-weight: 400;
          font-style: italic;
        }

        html {
          font-family: "OpenSans", Arial, sans-serif;
          font-weight: 200;
          font-size: 16px;
        }

        h1, h2, h3, h4, h5, h6{
          font-family: "Bariol", Arial, sans-serif;
          font-weight: 400;
        }
        * { box-sizing: border-box; margin: 0; padding: 0 }
      `}</style>
    </Head>
  </div>
)