import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import lozad from "lozad";
import { linkResolver } from "../../prismic-configuration";
import { FaRegCalendar } from "react-icons/fa";

const BlogPostSection = ({ data, uid }) => {
  const { description, featured_image, published_date, title } = data;

  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="wrap-main-post about-v3">
            <div className="flexslider s2 mb-0">
              {featured_image?.url && (
                <div className="mb-4">
                  <img
                    key={featured_image?.url}
                    className="lozad w-100"
                    data-src={featured_image?.url}
                    alt={featured_image?.alt}
                  />
                </div>
              )}

              <div className="blog-details-meta">
                <ul>
                  <li>
                    <i className="icon mr-2">
                      <FaRegCalendar />
                    </i>
                    {dayjs(published_date).format("DD MMM, YYYY")}
                  </li>
                </ul>
              </div>

              <h1 className="title">{title?.[0]?.text}</h1>

              <div className="blog-content box-content">
                {data?.body?.map((item, index) => (
                  <>
                    <div key={index}>
                      <RichText
                        render={item?.primary?.details}
                        linkResolver={linkResolver}
                      />
                    </div>
                    {item?.items?.map((item, index) => (
                      <div key={index}>
                        <img
                          key={item?.image?.url}
                          className="lozad"
                          data-src={item?.image?.url}
                          alt={item?.image?.alt}
                        />
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .icon {
            position: relative;
            color: #18ba60;
            top: -2px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BlogPostSection;
