import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../utils/prismicHelpers";
import { SliceZone } from "../slices";
import SEO from "../components/seo/SEO";
import { useRouter } from "next/router";
import PrismicClient from "../utils/prismicClient";
import gql from "graphql-tag";

const BlogPage = ({ doc, blogPosts }) => {
  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, [doc?.uid]);
  // ========== END ==========

  const router = useRouter();

  return (
    <>
      <SEO
        doc={doc}
        url={`https://${process.env.NEXT_PUBLIC_PRISMIC_ID}.${process.env.NEXT_PUBLIC_TLD}${router.pathname}`}
      />
      <SliceZone
        sliceZone={doc.data.body}
        blogsData={blogPosts?.data?.allBlog_posts?.edges}
      />
    </>
  );
};

export async function getServerSideProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();
  const doc = (await client.getSingle("blog_page", ref ? { ref } : null)) || {};

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
        allBlog_posts(sortBy: published_date_DESC, first: 99) {
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

export default BlogPage;
