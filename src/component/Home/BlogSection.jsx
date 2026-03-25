import React from "react";

const blogPosts = [
  {
    id: 1,
    image: "images/image_1.jpg",
    day: "11",
    year: "2020",
    month: "September",
    title: "Most Popular Place In This World",
  },
  {
    id: 2,
    image: "images/image_2.jpg",
    day: "11",
    year: "2020",
    month: "September",
    title: "Most Popular Place In This World",
  },
  {
    id: 3,
    image: "images/image_3.jpg",
    day: "11",
    year: "2020",
    month: "September",
    title: "Most Popular Place In This World",
  },
];

const BlogSection = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        
        {/* Heading */}
        <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Our Blog</span>
            <h2 className="mb-4">Recent Post</h2>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="row d-flex">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 d-flex">
              <div className="blog-entry justify-content-end">
                
                {/* Image */}
                <div
                  className="block-20"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>

                {/* Content */}
                <div className="text">
                  
                  {/* Date */}
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">{post.day}</span>
                    </div>
                    <div className="two">
                      <span className="yr">{post.year}</span>
                      <span className="mos">{post.month}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="heading">
                    <a href="#">{post.title}</a>
                  </h3>

                  {/* Button */}
                  <p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
