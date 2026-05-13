type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

type JsonLdProps = {
  type: string;
} & Record<string, JsonLdValue>;

export default function JSONLd({ type, ...data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          ...data,
          "@context": "https://schema.org",
          "@type": type,
        }),
      }}
    />
  );
}

export function PersonSchema() {
  return (
    <JSONLd
      type="Person"
      name="Yunus"
      url="https://yenus-sadik.vercel.app"
      sameAs={[
        "https://www.instagram.com/yunaon_ice/",
        "https://www.upwork.com/freelancers/~01ee1bb3a918bbb0f0",
      ]}
      email="mailto:yunadreamboy@gmail.com"
      telephone="+251974557038"
      jobTitle="Interactive Developer & Digital Creator"
      worksFor={{ "@type": "Organization", name: "Self-employed" }}
      alumniOf={{ "@type": "EducationalOrganization", name: "Addis Ababa University" }}
      description="Interactive developer specializing in premium web experiences that blend cinematic motion, thoughtful design, and production-ready engineering."
    />
  );
}

export function WebSiteSchema() {
  return (
    <JSONLd
      type="WebSite"
      name="Yunus Portfolio"
      url="https://yenus-sadik.vercel.app"
      potentialAction={{
        "@type": "SearchAction",
        target: "https://yenus-sadik.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      }}
    />
  );
}
