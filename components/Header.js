import React from "react";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <div className="p-10-nb">
      <div style={{ display: "grid" }}>
        <label className="text-title">FoxBith Questionare</label>
        <div
          style={{
            height: "1px",
            backgroundColor: "#C2C9D1",
            margin: "5px 0px 5px 0px",
          }}
        ></div>
        <div className="item-end p-5">
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginRight: 5 }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ padding: "7px 50px 7px 50px" }}
          >
            Save
          </Button>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          backgroundColor: "#C2C9D1",
          margin: "5px 0px 5px 0px",
        }}
      ></div>
    </div>
  );
};

export default React.memo(Header);
