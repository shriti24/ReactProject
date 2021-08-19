import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Checkbox } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PropTypes from 'prop-types';

function MultiselectDropdown(props) {
  const { options, label, onChange, value, id, disableClearButton } = props;
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  function setValues(defaultValues) {
    const setValuesInDropdown = [];
    for (let index = 0; index < defaultValues.length; index += 1) {
      for (let innerIndex = 0; innerIndex < options.length; innerIndex += 1) {
        if (options[innerIndex].key === defaultValues[index].key) {
          setValuesInDropdown.push(options[innerIndex]);
        }
      }
    }
    return setValuesInDropdown;
  }

  return (
    <Autocomplete
      multiple
      limitTags={1}
      size="small"
      options={options}
      disableClearable={disableClearButton}
      disableCloseOnSelect
      onChange={(e, selectedValues) => {
        onChange(selectedValues, id);
      }}
      getOptionLabel={(option) => option.title || ''}
      value={setValues(value) || null}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label={label} placeholder={label} />
      )}
    />
  );
}

MultiselectDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.array,
  disableClearButton: PropTypes.bool,
};

MultiselectDropdown.defaultProps = {
  value: [],
  disableClearButton: false,
};

export default MultiselectDropdown;
