const GLOBALS = () =>
  <style jsx global>
    {`
      @import url(https://fonts.googleapis.com/css?family=Open+Sans|Montserrat:400,800|Indie+Flower|Raleway);
      @viewport{
        zoom: 1.0;
        width: extend-to-zoom;
      }
      @-ms-viewport{
        zoom: 1.0;
        width: extend-to-zoom;
      }
      *::-webkit-scrollbar{
        width: 10px;
        height: 10px;
        background-color: #b5b5b7;
      }
      *::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      }
      *::-webkit-scrollbar-thumb{
        border-radius: var(--default-radius);
        background-color: var(--primary-grey);
      }
      *{
        box-sizing: border-box;
        transition: all 0.1s ease-out;
        outline: none;
        border: none;
      }
      body, p{
        cursor: default;
        margin: 0;
      }
      i{
        width: 25px;
        height: 25px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      noscript{
        width: 100%;
        background-color: var(--secondary-yellow);
        color: var(--secondary-white);
        text-align: center;
        padding: 10px;
      }
      a{
        text-decoration: none;
        cursor: pointer;
        color: var(--cyan);
        text-shadow: 0 4px 4px 0 rgba(0,0,0,0.05);
      }
      a:link { color: var(--cyan); }
      a:visited { color: var(--secondary-yellow); }
      a:hover { color: var(--cyan-bright); }
      a:active { color: tomato; }

      @media(max-width: 770px){
        .arrow{ display: none; }
      }

      @keyframes blink {
        to { background: var(--cyan); }
      }

      :root {
        --white: white;
        --red: #ed5a6a;
        --green: #28a745;
        --cyan: #17a2b8;
        --cyan-bright: #2bb6cc;
        --linkedin: #0072b1;
        --email: goldenrod;
        --facebook: #3b5998;
        --twitter: #00acee;
        --github: #6e5494;
        --mobile: #28a745;
        --darkText: #222;
        --lightDark: #223038;
        --lightText: #4F5F6F;
        --primary-blue: aliceblue;
        --medium-blue: #bbdefb;
        --secondary-blue: #1f2933;
        --progress-blue: #29d;
        --primary-yellow: gold;
        --secondary-yellow: goldenrod;
        --primary-white: #fafafa;
        --secondary-white: #fafafa;
        --primary-grey: #eee;
        --secondary-grey: #777;
        --primary-black: #2d333a;
        --secondary-black: #262b30;
        --current: currentColor;
        --default-radius: 5px;
        --default-shadow: 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
        --default-shadow-blur: 0 0 4px rgba(0,0,0,0.2);
        --default-shadow-dark: 0 0 2px 0 rgba(0, 0, 0, 0.1);
        --default-shadow-light: 0 0 2px 0 rgba(0, 0, 0, 0.2);
        --vertical-shadow: 3px 0 6px rgba(0, 0, 0, 0.1);
      }
    `}
  </style>;

export default GLOBALS;
