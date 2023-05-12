import Link from "next/link";
import lozad from "lozad";
import { useEffect } from "react";
import dayjs from "dayjs";

const BlogsSection = ({ blogsData }) => {
  return (
    <section className="main-content blog-single-post">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="title-section center s1 mb-5">
              <h2>Latest Blogs</h2>
              <p className="sub-title-section">
                Discover insights and best practices in accounting management
                with my informative and practical blog posts. Improve your
                financial performance today.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogsData.map((item, index) => (
            <BlogItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogItem = ({ data }) => {
  const { description, featured_image, published_date, title, _meta } =
    data?.node;

  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);

  const link = `/blog/${_meta?.uid}`;

  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <article className="post style2 mb-0">
        <div className="featured-post">
          <Link href={link} className="post-image">
            <img
              className="lozad"
              key={featured_image?.url}
              data-src={featured_image?.url}
              alt={featured_image?.alt}
            />
          </Link>

          {published_date && (
            <ul className="post-date d-flex align-items-center py-2">
              <li className="month mr-1">
                {dayjs(published_date).format("DD")}
              </li>
              <li className="month mr-1">
                {dayjs(published_date).format("MMM")},
              </li>
              <li className="year">{dayjs(published_date).format("YYYY")}</li>
            </ul>
          )}
        </div>
        <div className="content-post">
          <h3 className="title-post">
            <Link href={link}>{title?.[0]?.text}</Link>
          </h3>
          <div className="entry-post">
            <p>{description?.[0]?.text}</p>
            <div className="more-link">
              <Link href={link}>Read More</Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .title-post {
            line-height: 1.2;
          }
        `}</style>
      </article>
    </div>
  );
};

export default BlogsSection;
