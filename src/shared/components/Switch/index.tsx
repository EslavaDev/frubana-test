import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { styles } from './styles';
import './styles.scss';

// import { makeStyles } from '@material-ui/styles';
import { Switch, withStyles } from '@material-ui/core';

interface Props {
  name: string;
  value: any;
  classes: any;
  onChange: () => void;
  isAdmin: any;
  label?: string;
  iconRight?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  border?: boolean;
  textToRight?: boolean;
}

// const useStyles = makeStyles(styles);

const SwitchGeneric = (props: Props) => {
  const {
    type = 'text',
    required = false,
    disabled = false,
    onChange,
    isAdmin,
    label,
    classes,
    placeholder,
    border = true,
    textToRight = false,
  } = props;

  const sprWrapperInputClasses = classNames({
    'cnt-field-form': true,
    'margin-0': !border,
  });

  const wrapperInputClasses = classNames({
    disabled,
    border,
    'cnt-field': true,
  });

  return (
    <div className={sprWrapperInputClasses}>
      {label && (
        <label className="label">
          {label}
          {required ? ' *' : ''}
        </label>
      )}
      <div className={wrapperInputClasses}>
        <Switch
          checked={isAdmin}
          onChange={onChange}
          classes={{
            switchBase: classes.iOSSwitchBase,
            bar: classes.iOSBar,
            icon: classes.iOSIcon,
            iconChecked: classes.iOSIconChecked,
            checked: classes.iOSChecked,
          }}
          value={isAdmin}
          color="primary"
        />
      </div>
      {!disabled}
    </div>
  );
};
export default withStyles(styles)(SwitchGeneric);
