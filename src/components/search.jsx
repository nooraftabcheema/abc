import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const SearchBox = () => {
  const [value, setValue] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    if (value === "") {
    } else {
      window.location = "/search/" + value;
    }
  };

  return (
    <div className="Search">
      {/* <div className="p-grid p-fluid"> */}
      <div className="p-col-12 p-md-4">
        <div className="p-inputgroup">
          <form onSubmit={submit}>
            <div className="flex">
              <Button
                type="submit"
                label="Search"
                disabled={value.length === 0}
              />
              <InputText
                placeholder="See Here ..."
                type="text"
                name="query"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                style={{ width: "600px", height: "40px" }}
              />
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SearchBox;
