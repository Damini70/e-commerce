import React, { useState, useEffect } from "react";
import "./styles/Web.css";

function Actor({ check, input, setItem }) {
  const [actor, setActor] = useState("");
  const [show, setShow] = useState("");
  useEffect(() => {
    if (check === "actor" && input) {
      const fetchApi = async () => {
        const url = `https://api.tvmaze.com/search/people?q=${input}`;
        const response = await fetch(url);
        const resJson = await response.json();
        // const data = resJson.map((item) => item.person);
        setActor(resJson);
      };
      fetchApi();
    } else {
      setActor("");
    }

    if (check === "shows" && input) {
      const fetchApi1 = async () => {
        const url1 = `https://api.tvmaze.com/search/shows?q=${input}`;
        const response = await fetch(url1);
        const resJson = await response.json();
        setShow(resJson);
      };
      fetchApi1();
    } else {
      setShow("");
    }
  }, [check && input]);

  function handleAdd(id) {
    const data = actor.find((item) => item.person.id === id);
    setItem((prev) => [...prev, data]);
  }
  return (
    <>
      {!check ? (
        <div>
          <h4>No Data Found</h4>
        </div>
      ) : !actor && !show ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : actor ? (
        <div className="data">
          {actor.map((item) => {
            return (
              <div className="content">
                <div className="img">
                  <img
                    src={
                      item.person.image
                        ? item.person.image.original
                        : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                    }
                    alt="item"
                  />
                </div>
                <div className="details">
                  <h3>{item.person.name}</h3>
                  <h4>Price 3$</h4>
                  <button onClick={() => handleAdd(item.person.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="show">
          {show.map((item) => {
            return (
              <div className="host">
                <div className="pic">
                  <img
                    src={
                      item.show.image !== null
                        ? item.show.image.original
                        : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                    }
                    alt="ietm"
                  />
                </div>
                <div className="name">
                  <h3>{item.show.name}</h3>
                  <button>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
export default React.memo(Actor);
