/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import { saveBudget } from '../AC';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = {
    budget: '',
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { saveBudget, toastManager } = this.props;
    const budget = Number(this.state.budget);

    if (budget < 0) {
      this.setState({ budget: '' });
      return toastManager.add('Введите сумму больше 0!', {
        appearance: 'warning',
        autoDismiss: true,
      });
    }
    saveBudget(budget);
    return this.setState({ budget: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            onChange={this.handleChange}
            value={this.state.budget}
            placeholder="0"
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

BudgetForm.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  toastManager: PropTypes.func.isRequired,
};

export default connect(
  ({ budgetState }) => ({
    budgetState,
  }),
  { saveBudget },
)(withToastManager(BudgetForm));
