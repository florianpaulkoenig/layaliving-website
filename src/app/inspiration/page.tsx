import Image from "next/image";
import "../pages.css";

export const metadata = {
  title: "Inspiration — Laya Living",
  description:
    "A visual mood board of Lucerne and the Swiss Alps — the landscapes, light, and details that surround our apartment.",
};

const PHOTOS = [
  "alain-duss-5lNtWnLzQx8-unsplash.jpg",
  "alain-duss-K9RAwDAcz94-unsplash.jpg",
  "alex-dudar-65-dNO39DUI-unsplash.jpg",
  "alexis-presa-LqdakePNEkA-unsplash.jpg",
  "alexis-presa-QveyVLmmII4-unsplash.jpg",
  "anders-nielsen-zseeqQS4fnk-unsplash.jpg",
  "andreas-hobi-tXiFk4whvik-unsplash.jpg",
  "astronaud23-CXQOVcFlHNU-unsplash.jpg",
  "astronaud23-mRM4rJasJV4-unsplash.jpg",
  "aswin-mahesh-sxaH2HjDxAU-unsplash.jpg",
  "austris-augusts-jXtaFFqt1F4-unsplash.jpg",
  "ben-grayland-mIdr9J0JWUQ-unsplash.jpg",
  "ben-grayland-xxc5f9d54xQ-unsplash.jpg",
  "beth-nicol-ISVeqH4Rdr0-unsplash.jpg",
  "charlie-gallant-6ImSbiKjXEI-unsplash.jpg",
  "daniel-r-GHbs48gFrDA-unsplash.jpg",
  "darshan-gajara-nJBkUrx3ffg-unsplash.jpg",
  "darshan-gajara-sdSe9xZH_ck-unsplash.jpg",
  "delaney-boyd-YhNSLI5QrnE-unsplash.jpg",
  "diana-shturm-M_CRO7kShVw-unsplash.jpg",
  "dillon-pena-Db9G-Wb9O-U-unsplash.jpg",
  "ekaterina-kartushina-Z6BRUVBo_LY-unsplash.jpg",
  "fabian-kleiser-EBUCQDsP0sg-unsplash.jpg",
  "franck-ridel-rMLGkRtX4qs-unsplash.jpg",
  "gabor-veres-SKHpzK0HjKQ-unsplash.jpg",
  "gabor-veres-U6BLVf2slR4-unsplash.jpg",
  "geertje-caliguire-6D9fpCXb20E-unsplash.jpg",
  "henrique-ferreira-diPCLr0n0HE-unsplash.jpg",
  "ilia-bronskiy-1iUKh12z8U0-unsplash.jpg",
  "ilia-bronskiy-GSOYru05vWw-unsplash.jpg",
  "jannis-lucas-iTZkzwKLolo-unsplash.jpg",
  "julian-JIsicec9eA0-unsplash.jpg",
  "kasturi-roy-BVGXAaTenu8-unsplash.jpg",
  "khyta-U2kkaAwSw94-unsplash.jpg",
  "kodex1213-iC90w8MCbAo-unsplash.jpg",
  "kuno-schweizer-IHKqmCqmePc-unsplash.jpg",
  "lia-choi-5wT5FK3RvOs-unsplash.jpg",
  "manish-tulaskar-z6k8M8wNbAE-unsplash.jpg",
  "md-arif-jawed-6wFXGefeLaE-unsplash.jpg",
  "michael-bautz-ssbKBJwmZ-g-unsplash.jpg",
  "michael-loftus-4sybbYwFy_c-unsplash.jpg",
  "miguel-lindo-j3Cwm8f2sXQ-unsplash.jpg",
  "mona-baechler-NeBDBAirhdY-unsplash.jpg",
  "morgane-le-breton-Ym4my-Xj8EY-unsplash.jpg",
  "nadine-marfurt-J-_TRpP_F3w-unsplash.jpg",
  "nadine-marfurt-QQhroSyqAZQ-unsplash.jpg",
  "nanda-gopal-lakshman-AYL-_G83VxE-unsplash.jpg",
  "nandkumar-mayanak-F3FeO1YVHdM-unsplash.jpg",
  "nathan-john-UTPCj1g4Zr4-unsplash.jpg",
  "nika-tchokhonelidze-n2uf0q7cbXc-unsplash.jpg",
  "patrick-humm-3zOXVmtwZV8-unsplash.jpg",
  "patrick-robert-doyle-gWXKH78HHP4-unsplash.jpg",
  "peter-steiner-1973-DHOpaUkEoQA-unsplash.jpg",
  "razvan-sassu-ODFhnzEUXHA-unsplash.jpg",
  "ricardo-gomez-angel-EeCHwAQRFfA-unsplash.jpg",
  "ricardo-gomez-angel-TF-OaX0vw2w-unsplash.jpg",
  "ryan-klaus-7e0txmavFd0-unsplash.jpg",
  "sachin-korde-eLlooNIJvTk-unsplash.jpg",
  "scmj-7bK9CMTs_a4-unsplash.jpg",
  "seb-mooze-1ft9KggFTJE-unsplash.jpg",
  "silvan-arnet-fA_bW5zcRWI-unsplash.jpg",
  "silvan-arnet-q95lBTMYFqI-unsplash.jpg",
  "simon-infanger-_3TUtoUPDZ8-unsplash.jpg",
  "simon-infanger-tHXmsaniIC4-unsplash.jpg",
  "stefan-butikofer-pbki2TmobSA-unsplash.jpg",
  "stephen-h-SPjE0nnOuj8-unsplash.jpg",
  "tommao-wang-scUGBPtCPaE-unsplash.jpg",
  "vonmitzscha-9J0dTfdFOOE-unsplash.jpg",
  "xavier-von-erlach-mMriMrvnizU-unsplash.jpg",
  "yannis-zaugg-iLq3l4KKL6s-unsplash.jpg",
];

function getCredit(filename: string): string {
  // Remove -unsplash.jpg suffix, then parse photographer name.
  // Unsplash filenames: photographer-name-PHOTOID-unsplash.jpg
  // The photo ID is the last run of non-pure-lowercase segments before "unsplash".
  const base = filename.replace(/-unsplash\.jpg$/, "");
  const parts = base.split("-");

  let idStart = parts.length;
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    // A pure lowercase word (len > 1) marks the end of the photographer name
    if (/^[a-z]+$/.test(p) && p.length > 1) break;
    idStart = i;
  }

  return parts
    .slice(0, idStart)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

export default function InspirationPage() {
  return (
    <div className="page-inspiration">
      <header className="ph">
        <div className="ph-kicker">Visual Mood Board</div>
        <h1>
          Lucerne,{" "}
          <span className="it-accent">through our eyes</span>.
        </h1>
        <p className="lede">
          The lake at dawn, mountain trails dusted with snow, the old town&apos;s
          cobblestones in afternoon light. These are the landscapes, moments,
          and details that surround our apartment and keep drawing us back.
        </p>
      </header>

      <div className="insp-grid">
        {PHOTOS.map((filename) => (
          <div key={filename} className="insp-item">
            <Image
              src={`/images/inspiration/${filename}`}
              alt=""
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="insp-img"
              unoptimized
            />
            <div className="insp-item-credit">
              {getCredit(filename)} / Unsplash
            </div>
          </div>
        ))}
      </div>

      <p className="insp-credit">
        Photos via{" "}
        <a href="https://unsplash.com" target="_blank" rel="noreferrer">
          Unsplash
        </a>
        , used under the Unsplash License.
      </p>
    </div>
  );
}
