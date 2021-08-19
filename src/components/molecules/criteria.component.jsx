import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import PrimaryButton from '../atoms/button.component';
import Textbox from '../atoms/textbox.component';
import Dropdown from '../atoms/dropdown.component';
import MultiselectDropdown from '../atoms/multiselectDropdown.component';
import DaterangePickerCustom from '../atoms/daterangePickerCustom.component';
import './criteria.css';
import CheckBoxesGroup from '../atoms/checkboxgroup.component';
import Select from '../atoms/selectdropdrown.component';

function Criteria(props) {
  const {
    criteriaOptions,
    searchCriteria,
    buttonLabel,
    isButtonEnabled,
    onEventChange,
    isResetEnabled,
    resetLabel,
    resetCriteria,
    isCriteriaDropdownEnabled,
    criteriaSelectionHandler,
    criteriaDropdownLabel,
  } = props;

  const [criteriaToShowDropdown, setCritieriaToShowDropDown] = React.useState([]);
  const [criteriaToShowDropdownValues, setCriteriaToShowDropdownValues] = React.useState([]);
  const prevSelectedVal = React.useRef(criteriaToShowDropdownValues);

  const setDefaultCriteria = () => {
    const criteriasToShow = [];
    const visibleCriterias = [];
    for (let i = 0; i < criteriaOptions.length; i += 1) {
      const criteriaData = {
        key: criteriaOptions[i].key,
        title: criteriaOptions[i].label,
        value: criteriaOptions[i].label,
      };
      criteriasToShow.push(criteriaData);
      if (criteriaOptions[i].visible) {
        visibleCriterias.push(criteriaData);
      }
    }
    setCritieriaToShowDropDown(criteriasToShow);
    setCriteriaToShowDropdownValues(visibleCriterias);
  };

  React.useEffect(() => {
    setDefaultCriteria();
  }, [criteriaOptions]);

  function callOnChange(valueSelected, onChangeFunc, key) {
    onChangeFunc(valueSelected, key);
  }

  function multiselectDropdownValue(selectedValues, id) {
    onEventChange(selectedValues, id);
  }

  function dropdownValue(selectedValues, id) {
    onEventChange(selectedValues, id);
  }

  React.useEffect(() => {
    let result;
    if (prevSelectedVal.current.length > criteriaToShowDropdownValues.length) {
      // Remove selection
      result = prevSelectedVal.current.filter(
        ({ key: val1 }) => !criteriaToShowDropdownValues.some(({ key: val2 }) => val2 === val1)
      );
      if (result.length > 0) criteriaSelectionHandler(result[0].key, false);
    } else {
      // Add selection
      result = criteriaToShowDropdownValues.filter(
        ({ key: val1 }) => !prevSelectedVal.current.some(({ key: val2 }) => val2 === val1)
      );
      if (result.length > 0) criteriaSelectionHandler(result[0].key, true);
    }

    prevSelectedVal.current = criteriaToShowDropdownValues;
  }, [criteriaToShowDropdownValues]);

  const criteriaToShowChangeFunc = (selectedVal) => {
    setCriteriaToShowDropdownValues(selectedVal);
  };

  return (
    <div className="criteria">
      <Grid container spacing={3}>
        <Grid
          item
          lg={isResetEnabled || isCriteriaDropdownEnabled ? (isResetEnabled ? 9 : 10) : 12}
          md={isResetEnabled || isCriteriaDropdownEnabled ? (isResetEnabled ? 8 : 10) : 12}
          sm={isResetEnabled || isCriteriaDropdownEnabled ? (isResetEnabled ? 6 : 9) : 12}
          xs={12}
        >
          <Grid container spacing={3}>
            <Grid
              item
              lg={isButtonEnabled ? 11 : 12}
              md={isButtonEnabled ? 10 : 12}
              sm={isButtonEnabled ? 9 : 12}
              xs={12}
            >
              <Grid container spacing={2}>
                {criteriaOptions.map((criteriaOption) => {
                  if (criteriaOption.visible || !isCriteriaDropdownEnabled)
                    return (
                      <Grid item lg={3} md={4} sm={6} xs={12} key={criteriaOption.key}>
                        {criteriaOption.type === 'textbox' && (
                          <Textbox
                            label={criteriaOption.label}
                            inputType={criteriaOption.inputType}
                            value={criteriaOption.value}
                            disabled={criteriaOption.disabled}
                            onChange={(e) =>
                              callOnChange(e.target.value, onEventChange, criteriaOption.key)
                            }
                          />
                        )}
                        {criteriaOption.type === 'dropdown' && (
                          <Dropdown
                            label={criteriaOption.label}
                            options={criteriaOption.options}
                            onChange={dropdownValue}
                            id={criteriaOption.key}
                            value={criteriaOption.value}
                          />
                        )}
                        {criteriaOption.type === 'select' && (
                          <Select
                            size="small"
                            label={criteriaOption.label}
                            value={criteriaOption.value}
                            options={criteriaOption.options}
                            disabled={criteriaOption.disabled}
                            onChange={(e) =>
                              callOnChange(e.target.value, onEventChange, criteriaOption.key)
                            }
                          />
                        )}
                        {criteriaOption.type === 'multiselectdropdown' && (
                          <MultiselectDropdown
                            label={criteriaOption.label}
                            options={criteriaOption.options}
                            onChange={multiselectDropdownValue}
                            id={criteriaOption.key}
                            value={criteriaOption.value}
                          />
                        )}
                        {criteriaOption.type === 'datepicker' && (
                          <DaterangePickerCustom
                            label={criteriaOption.label}
                            startDate={criteriaOption.startDate}
                            endDate={criteriaOption.endDate}
                            resetDateRange={criteriaOption.resetDateRange}
                            clearDateRange={criteriaOption.clearDateRange}
                            onDateRangeSelect={(e) =>
                              callOnChange(e, onEventChange, criteriaOption.key)
                            }
                          />
                        )}
                        {criteriaOption.type === 'checkboxgroup' && (
                          <CheckBoxesGroup
                            label={criteriaOption.label}
                            options={criteriaOption.options}
                            value={criteriaOption.value}
                            columns={criteriaOption.columns}
                            onChange={(e) => callOnChange(e, onEventChange, criteriaOption.key)}
                          />
                        )}
                      </Grid>
                    );
                })}
              </Grid>
            </Grid>
            {isButtonEnabled && (
              <Grid item lg={1} md={2} sm={3} xs={12}>
                <PrimaryButton
                  className="floatRight"
                  fullWidth
                  buttonLabel={buttonLabel}
                  onClick={searchCriteria}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
        {isResetEnabled && (
          <Grid item lg={1} md={2} sm={3} xs={12}>
            <PrimaryButton
              className="floatRight"
              variant="outlined"
              fullWidth
              buttonLabel={resetLabel}
              onClick={resetCriteria}
            />
          </Grid>
        )}
        {isCriteriaDropdownEnabled && (
          <Grid item lg={2} md={2} sm={3} xs={12}>
            <MultiselectDropdown
              options={criteriaToShowDropdown}
              label={criteriaDropdownLabel}
              disableClearButton
              onChange={criteriaToShowChangeFunc}
              value={criteriaToShowDropdownValues}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
Criteria.propTypes = {
  criteriaOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchCriteria: PropTypes.func,
  isButtonEnabled: PropTypes.bool,
  onEventChange: PropTypes.func.isRequired,
  criteriaSelectionHandler: PropTypes.func,
  buttonLabel: PropTypes.string.isRequired,
  isResetEnabled: PropTypes.bool,
  isCriteriaDropdownEnabled: PropTypes.bool,
  resetLabel: PropTypes.string,
  resetCriteria: PropTypes.func,
  criteriaDropdownLabel: PropTypes.string,
};

Criteria.defaultProps = {
  isButtonEnabled: false,
  isResetEnabled: false,
  isCriteriaDropdownEnabled: false,
  resetLabel: 'Reset',
  criteriaDropdownLabel: 'Criteria',
  searchCriteria: () => {},
  resetCriteria: () => {},
  criteriaSelectionHandler: () => {},
};

export default Criteria;
