import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../utils/prismicHelpers";
import PrismicClient from "../utils/prismicClient";
import gql from "graphql-tag";
import { SliceZone } from "../slices";
import SEO from "../components/seo/SEO";

const ServicePage = ({ doc, blogPosts }) => {
  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, [doc?.uid]);
  // ========== END ==========

  return (
    <>
      <SEO
        doc={doc}
        url={`https://${process.env.NEXT_PUBLIC_PRISMIC_ID}.${process.env.NEXT_PUBLIC_TLD}/${doc?.uid}`}
      />
      <SliceZone
        sliceZone={doc.data.body}
        blogsData={blogPosts?.data?.allBlog_posts?.edges}
      />
    </>
  );
};

export async function getServerSideProps({
  preview = null,
  previewData = {},
  params,
}) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getByUID(
      "service_page",
      params.slug,
      ref ? { ref } : null
    )) || {};

  if (doc.id == undefined) {
    return {
      props: null,
      notFound: true,
    };
  }

  const pClient = PrismicClient;

  const blogPosts = await pClient.query({
    query: gql`
      query {
        allBlog_posts(sortBy: published_date_DESC, first: 3) {
          edges {
            node {
              title
              description
              featured_image
              published_date
              _meta {
                uid
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      doc,
      blogPosts,
      preview,
    },
  };
}

export default ServicePage;
