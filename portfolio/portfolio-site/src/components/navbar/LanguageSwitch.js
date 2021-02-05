import React from "react";
import { SwitchWrapper } from "./NavbarElements";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const LanguageSwitch = (props) => {

  return (
    <>
      <SwitchWrapper>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="custom-select"
          value={props.language}
          onChange={(e) => props.handleSetLanguage(e.target.value)}
        >
          <MenuItem value="Czech">CZ</MenuItem>
          <MenuItem value="English">EN</MenuItem>
        </Select>
      </SwitchWrapper>
    </>
  );
};

export default LanguageSwitch;
