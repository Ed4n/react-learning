import React from "react";
import LinkTemplete from "../../components/global/LinkTemplete";
import { Link } from "react-router-dom";
import LinkContainer from "../../components/global/LinkContainer";

export default function ReactQuery() {
  return (
    <div className=" p-7">
      <h1>React Query</h1>

      <LinkContainer>
        <LinkTemplete
          path={"/react-query/react-query-learning"}
          pathTitle="React Query Learning"
        />

        <LinkTemplete
          path={"/react-query/react-query-practice"}
          pathTitle="React Query Practice"
        />
      </LinkContainer>
    </div>
  );
}
