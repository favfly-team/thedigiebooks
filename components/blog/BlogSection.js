import Link from "next/link";

const BlogSection = () => {
  return (
    <section className="main-content blog-single-post">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-section center s1 mb-4">
              <h2>What We Can Offer You </h2>
              <p className="sub-title-section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </section>
  );
};

const BlogItem = () => {
  return (
    <div className="col-md-4 mb-4">
      <article className="post style2 mb-0">
        <div className="featured-post">
          <a href="#" className="post-image">
            <img
              src="https://themesflat.co/html/finance/images/blog/blog-content-01.png"
              alt="img"
            />
          </a>
          <ul className="post-date">
            <li className="day">11</li>
            <li className="month">JAN</li>
            <li className="year">2023</li>
          </ul>
        </div>
        <div className="content-post">
          <h4 className="title-post">
            <a href="#">Why your sales forecast is off</a>
          </h4>
          <div className="entry-post">
            <p>
              Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae
              augue elementum, sodales nulla a, sem...
            </p>
            <div className="more-link">
              <Link href="/blog/a">Readmore</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogSection;
