import PropTypes from "prop-types";
import { SearchWrapper, Label, Input } from "../Filter/Filter.styled";

export const Filter = ({ onChange }) => {
  return (
    <SearchWrapper>
      <Label htmlFor="name">Find contacts by name </Label>
      <div>
        <Input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Search name"
          onChange={({ target: { value } }) => onChange(value)}
        />
      </div>
    </SearchWrapper>
  );
};

Filter.propType = {
  onChange: PropTypes.func.isRequired,
};
