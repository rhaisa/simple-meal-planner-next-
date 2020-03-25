import Navbar from './Navbar';
import Head from 'next/head';

const Layout = props => {
  return (
    <>
      <div className="mainContainer">
        <Head>
          <title>Simple Meal Planner</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <div className="innerContainer">
          <Navbar />
          {props.children}
        </div>
      </div>
      <style jsx>
        {`
          .mainContainer {
            background-color: #e5e5e5;
            min-height: 100vh;
            display: flex;
          }
          .innerContainer {
            background-color: #fff;
            border-radius: 10px;
            width: 100%;
            max-width: 764px;
            margin: auto;
            min-height: 90vh;
          }
        `}
      </style>
    </>
  );
};
export default Layout;
