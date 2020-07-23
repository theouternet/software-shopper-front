import React from "react";

import SearchFilterContainer from "./SearchFilterContainer"
import ResultBoxPreso from "./ResultBoxPreso"
import { connect } from "react-redux"


const SoftwareList = ({ softwarePics }) => {
    const renderSoftware = softwarePics.map(softwarePic =>
      <img key={softwarePic.id} src={softwarePic.url} />
    );
  
    return (
      <div>
        {renderSoftware}
      </div>
    );
  };
  
  export default SoftwareList;