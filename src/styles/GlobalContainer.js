import React from "react";
import styled from "styled-components";

export const GlobalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: darkgoldenrod;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ToDoContainer = styled.main`
  height: 750px;
  width: 500px;
  border: 2px solid black;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
