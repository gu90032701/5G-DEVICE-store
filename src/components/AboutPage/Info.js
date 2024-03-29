import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid"
              alt="about company"
              style={{ border: "2px solid" }}
            ></img>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us"></Title>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in porta risus. Nullam ac sem non purus pharetra gravida.
              Maecenas.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
