import React from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

export default function ExpandableFilter() {
  return (
    <div className="col">
      <h2>
        Open <b>multiple</b>
      </h2>
      <div className="tabs">
        <div className="tab">
          <input type="checkbox" id="chck1" />
          <label className="tab-label" for="chck1">
            Item 1
          </label>
          <div className="tab-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            reiciendis!
          </div>
        </div>
        <div className="tab">
          <input type="checkbox" id="chck2" />
          <label className="tab-label" for="chck2">
            Item 2
          </label>
          <div className="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </div>
  );
  // You need to create your own checkbox component with a custom checkmark
}
