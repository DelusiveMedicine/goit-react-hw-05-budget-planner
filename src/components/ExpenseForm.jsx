/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import Form from './shared/Form/Form';
import Label from './shared/Label/Label';
import Input from './shared/Input/Input';
import Button from './shared/Button/Button';
import { addExpense } from '../AC';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addExpense, budgetState, toastManager } = this.props;
    const { balance } = budgetState;
    const amount = Number(this.state.amount);
    const { name } = this.state;

    if (balance < amount) {
      this.setState({ name: '', amount: '' });
      return toastManager.add(
        'На счету недостаточно средств для проведения операции!',
        {
          appearance: 'warning',
          autoDismiss: true,
        },
      );
    }

    if (amount <= 0) {
      this.setState({ name: '', amount: '' });
      return toastManager.add('Введите сумму для проведения операции!', {
        appearance: 'warning',
        autoDismiss: true,
      });
    }

    if (!name) {
      return toastManager.add('Введите название операции!', {
        appearance: 'warning',
        autoDismiss: true,
      });
    }

    addExpense({ ...this.state });
    return this.setState({ name: '', amount: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={this.state.amount}
            placeholder="0"
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

ExpenseForm.propTypes = {
  budgetState: PropTypes.shape({
    data: PropTypes.array,
    total: PropTypes.number,
    budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    balance: PropTypes.number,
  }).isRequired,
  addExpense: PropTypes.func.isRequired,
  toastManager: PropTypes.func.isRequired,
};

export default connect(({ budgetState }) => ({ budgetState }), { addExpense })(
  withToastManager(ExpenseForm),
);
