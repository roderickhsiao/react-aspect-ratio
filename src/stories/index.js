import React, { Fragment } from "react";
import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";

import AspectRatio from "../index";

import "../../aspect-ratio.css";
import "../../theme.css";

setAddon(JSXAddon);

const PageTitle = () => (
  <div className="page__title">
    <h1 className="page__title-main">
      React Apect Ratio
      <a
        className="github mui-icon"
        href="https://github.com/roderickhsiao/react-aspect-ratio"
        target="_blank"
        rel="noopener noreferrer"
        title="github"
      >
        <span style={{ visibility: "hidden" }}> Github </span>
      </a>
    </h1>
    <p className="page__title-desc">
      prevent reflow by preserving aspect ratio of your component
    </p>
  </div>
);

const lorem = `
Lorem ipsum dolor sit amet, ut summo disputationi duo. Ut per consulatu liberavisse. Brute putant ius ei, ei sea impetus imperdiet, usu ea impetus maiorum. Ne mel solet epicuri, quas numquam no vis. In blandit argumentum persequeris eum, quo ad vidisse meliore.

Nec laboramus instructior ad, sit maiorum antiopam id. Ea soluta appareat mea, cu nec bonorum tibique inimicus. Ex solet quaerendum scriptorem duo. Eu decore efficiantur cum, elit denique no quo. Mei ut quis dicat falli, pericula omittantur et per, sed eros philosophia definitiones in.

An feugiat ornatus dignissim vis, vitae invenire consectetuer vim no. Et pri stet lorem vulputate. Ad invidunt percipitur nam, option indoctum ullamcorper ius te. Fastidii petentium eu cum, ei natum etiam sed, mel cu dolor conclusionemque. Quo an omnium scripserit, an commodo habemus voluptatum mea. Vim justo probatus et, eu idque ullum iudicabit sea.

Nec ex utamur partiendo, ne nisl hinc voluptaria ius, no etiam fabellas pro. Usu ea harum graeci persequeris. Vis nibh aeque aliquid id, vel esse laudem evertitur ne. Affert bonorum id ius, cum tincidunt pertinacia te. Quo eu accumsan sententiae, illum referrentur ut vis.

Cu qui quidam euismod. Qui ex vide cibo sententiae, sit timeam atomorum scribentur ad. Eu nonumy accusamus vis, eius idque dicit cu vim. Ei erat voluptua dissentias pri, mei primis accusamus philosophia at, ad eos minim salutandi. Vis sint probo consetetur te, idque falli apeirian duo ea, commune perfecto id sed.

Ei pro dico ullamcorper, partem facilisis an est. An eos meis dolorem scriptorem. Duo quando discere ei. Qui oratio corpora efficiendi ad. Et nam facer error scripta. Ne vis populo praesent, cu cum purto tacimates. Cu dissentiunt comprehensam his.

Ne vim omnes verterem, id usu invidunt facilisi deserunt, vis ubique conclusionemque ea. Qui ignota invenire ne. Sit iriure reprimique ei, melius diceret maiorum ut has, quo aliquid fabulas forensibus te. Usu tibique consequat ea, vidisse comprehensam eum at. Ad fugit corpora nominavi pri, an pro wisi adhuc novum. Eam quod vero convenire et, ex deseruisse disputationi pro, malorum admodum prodesset pro et.

Est eu dictas gubergren repudiandae. Vim eu vocent viderer, at suas voluptatibus pri, qui aliquip suscipit ut. No usu lorem regione lobortis, erant explicari ius no. Eos ea brute errem, voluptaria mnesarchum cu pri, choro ancillae euripidis id vis. Vim magna inermis ei, vidit docendi vix ad.

Ipsum choro cu duo, eu suas iusto complectitur duo. Eos eu ridens eruditi, mea ea assum verterem rationibus. Nobis dolores ut sit, soleat reprimique cu qui. Legere pertinax an vix, dolore incorrupte no ius. Nam in reque nostrum elaboraret. Ei ius harum splendide. Cum ex appetere hendrerit, vis cu rebum legimus dissentiunt, novum dicunt ad est.

Ut quo esse noluisse, in per admodum eligendi persequeris. Vel te munere eripuit, eu prompta iuvaret propriae per, ei mel omnis suavitate. Mea at quem veri quaeque. Ea his salutatus posidonium, salutatus hendrerit vel no, nulla sonet referrentur ne pro. Mea tota constituto mediocritatem ex, ut vix nusquam molestie signiferumque.
`;

const Card = ({ titleText, contentNode }) => (
  <div className="card">
    <div className="card__head">
      <h3 className="card__title">{titleText}</h3>
    </div>
    <div className="card__conent">{contentNode}</div>
  </div>
);
storiesOf("AspectRatio", module)
  .addWithJSX("Image", () => (
    <Fragment>
      <PageTitle />
      <Card
        titleText="Image with Aspect Ratio"
        contentNode={
          <Fragment>
            <AspectRatio ratio="300/165" style={{ maxWidth: "300px", margin: "auto" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
                alt="demo"
              />
            </AspectRatio>
            <p>{lorem}</p>
          </Fragment>
        }
      />
    </Fragment>
  ))
  .addWithJSX("Image with number", () => (
    <Fragment>
      <PageTitle />
      <Card
        titleText="Image with Aspect Ratio (pass number as props)"
        contentNode={
          <AspectRatio ratio={0.75} style={{ maxWidth: "400px" }}>
            <img
              src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg"
              alt="demo"
            />
          </AspectRatio>
        }
      />
    </Fragment>
  ))
  .addWithJSX("Background Image", () => (
    <Fragment>
      <PageTitle />
      <Card
        titleText="Background image with aspect ratio"
        contentNode={
          <AspectRatio
            ratio="3/4"
            style={{
              maxWidth: "300px",
              backgroundImage:
                "url(https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg)",
              backgroundSize: "cover"
            }}
          />
        }
      />
    </Fragment>
  ))
  .addWithJSX("Gallery", () => {
    const images = [
      {
        src: "http://pbs.twimg.com/media/CO-ghuGWEAAGsFd.jpg",
        ratio: "261/393"
      },
      {
        src:
          "http://static.boredpanda.com/blog/wp-content/uploads/2015/04/bulldog-puppy-cute-dog-photography-23__605.jpg",
        ratio: "550/393"
      },
      {
        src:
          "http://static.boredpanda.com/blog/wp-content/uploads/2015/04/bulldog-puppy-cute-dog-photography-5__605.jpg",
        ratio: "599/393"
      },
      {
        src:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQikQmH0BSHHpjcqFkyZr5FqMXuwONleKSsMRmcz-L-bLJHmyxgqw",
        ratio: "500/377"
      }
    ];
    return (
      <Fragment>
        <PageTitle />
        <Card
          titleText="Image Gallery with Aspect Ratio"
          contentNode={
            <div className="gallery">
              {images.map(image => (
                <div className="gallery__image" key={image.src}>
                  <AspectRatio ratio={image.ratio}>
                    <img src={image.src} alt="demo" />
                  </AspectRatio>
                </div>
              ))}
            </div>
          }
        />
      </Fragment>
    );
  })

  .addWithJSX("Iframe", () => (
    <Fragment>
      <PageTitle />
      <Card
        titleText="Iframe with aspect ratio"
        contentNode={
          <AspectRatio ratio="560/315" style={{ maxWidth: "560px" }}>
            <iframe
              src="https://www.youtube.com/embed/Sv6dMFF_yts"
              frameBorder="0"
              allowFullScreen
              title="youtube"
            />
          </AspectRatio>
        }
      />
    </Fragment>
  ));
