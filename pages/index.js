import Head from "next/head";
import { Carousel } from "../Carousel";

const CarouselList = [
  {
    image:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    link: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    title: "这是标题1",
  },
  {
    image:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    link: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    title: "这是标题2",
  },
  {
    image:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    link: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    title: "这是标题3",
  },
  {
    image:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    link: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    title: "这是标题4",
  },
  {
    image:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    link: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh20%2Fh68%2Fimg_localize_6068ed5f86cee7018e85c5513c58aaf3_440x339.png&refer=http%3A%2F%2Fimages.liqucn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719689&t=5dd9c8aa9aecdc73b0b59f5c1e6d29e9",
    title: "这是标题5",
  },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div style={{ width: "300px", margin: "0 auto" }}>
          <h1>带图片的横向轮播</h1>
          <Carousel>
            {CarouselList.map((item, index) => {
              return (
                <a
                  href={item.link}
                  style={{
                    width: "80px",
                    height: "100px",
                    display: "inline-block",
                    margin: "0 10px",
                  }}
                >
                  <img
                    src={item.image}
                    style={{ width: "80px", height: "80px" }}
                  />
                  <div>{item.title}</div>
                </a>
              );
            })}
          </Carousel>

          <h1>不带图片的横向轮播</h1>
          <Carousel>
            {CarouselList.map((item, index) => {
              return (
                <a
                  href={item.link}
                  style={{
                    width: "80px",
                    height: "100px",
                    display: "inline-block",
                    margin: "0 10px",
                  }}
                >
                  <div>{item.title}</div>
                </a>
              );
            })}
          </Carousel>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
