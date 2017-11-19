import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { FormField } from 're-cy-cle';
import TypeAhead from './TypeAhead';

@observer
export default class FilterColumn extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string,
    };

    options = [
        { value: 'is', label: 'Is' },

        // Only for strings
        { value: 'icontains', label: 'Contains' },

        // Only for dates and ints
        { value: 'gt', label: 'Is greater than' },
        { value: 'gte', label: 'Is greater equal than' },
        { value: 'lt', label: 'Is lesser than' },
        { value: 'lte', label: 'Is lesser equal than' },
    ];

    handleSelect = val => {
        this.props.onChange('operator', val);
    };

    render() {
        return (
            <FormField label="Operator">
                <TypeAhead
                    name="operator"
                    onSelect={this.handleSelect}
                    options={this.options}
                    value={this.props.value}
                />
            </FormField>
        );
    }
}