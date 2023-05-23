/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const BarContainer = styled.div`
    display: flex;
    align-items: center;
    width: var(--width);
    background-color: rgba(128, 128, 128, 0.15);
    height: 16px;
    position: relative;
    box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  `;

  const SmallContainer = styled(BarContainer)`
    height: 8px;
    border-radius: 4px;
    margin-bottom: 6px;
  `;

  const MediumContainer = styled(BarContainer)`
    height: 12px;
    border-radius: 4px;
    margin-bottom: 6px;
  `;

  const LargeContainer = styled(BarContainer)`
    height: 24px;
    border-radius: 8px;
    margin-bottom: 6px;
    margin-left: -4px;
    margin-right: -4px;
  `;

  const ProgressBase = styled.div`
    width: ${(props) => props.width}%;
    background-color: blue;
    margin: 0 auto;

    ${SmallContainer} & {
      height: 8px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: ${(props) =>
        props.width >= 99 ? "4px" : "0px"};
      border-bottom-right-radius: ${(props) =>
        props.width >= 99 ? "4px" : "0px"};
      background-color: ${(props) => (props.width >= 99 ? "#09c709" : "blue")};
      margin: 0;
    }

    ${MediumContainer} & {
      height: 12px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: ${(props) =>
        props.width >= 99 ? "4px" : "0px"};
      border-bottom-right-radius: ${(props) =>
        props.width >= 99 ? "4px" : "0px"};
      background-color: ${(props) => (props.width >= 99 ? "#09c709" : "blue")};
      margin: 0;
    }

    ${LargeContainer} & {
      height: 16px;
      margin: 4px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: ${(props) =>
        props.width >= 99 ? "4px" : "0px"};
      border-bottom-right-radius: ${(props) =>
        props.width >= 99 ? "4px" : "0px"};

      background-color: ${(props) => (props.width >= 99 ? "#09c709" : "blue")};

 
  `;

  console.log(size);

  return (
    <>
      {/* <VisuallyHidden>{value}</VisuallyHidden> */}

      {size === "small" && (
        <SmallContainer style={{ "--width": "370px" }}>
          <ProgressBase
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            width={value}
          />
        </SmallContainer>
      )}
      {size === "medium" && (
        <MediumContainer style={{ "--width": "370px" }}>
          <ProgressBase
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            width={value}
          />
        </MediumContainer>
      )}

      {size === "large" && (
        <LargeContainer style={{ "--width": "370px" }}>
          <ProgressBase
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            width={value}
          />
        </LargeContainer>
      )}
    </>
  );
};

export default ProgressBar;
