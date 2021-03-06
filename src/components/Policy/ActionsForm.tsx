import { ArrayHelpers } from 'formik';
import { DeepPartial } from 'ts-essentials';
import { Action, ActionType } from '../../types/Policy/Actions';
import {
    ActionGroup,
    Button, capitalize,
    Card,
    CardActions,
    CardBody,
    CardHead, CardHeader,
    FormSelectOption,
    Title
} from '@patternfly/react-core';
import * as React from 'react';
import { TimesIcon } from '@patternfly/react-icons';
import { FormSelect } from '../Formik/Patternfly';
import { ActionForm } from './ActionForm/ActionForm';

interface ActionsFormProps {
    arrayHelpers: ArrayHelpers;
    actions?: (DeepPartial<Action>| undefined)[];
    isReadOnly?: boolean;
}

export const ActionsForm = (props: ActionsFormProps) => {

    return (
        <>
            <Title headingLevel="h4" size="2xl">Actions</Title>
            { props.actions?.map((action, index) => (
                <React.Fragment key={ index }>
                    <Card isHoverable>
                        <CardHead>
                            <CardActions>
                                { !props.isReadOnly && props.actions?.length && props.actions.length > 1 ? (
                                    <Button variant="plain" aria-label="Action" onClick={ props.arrayHelpers.handleRemove(index) }>
                                        <TimesIcon/>
                                    </Button>
                                ) : null}
                            </CardActions>
                            <CardHeader>Action #{ index + 1 }</CardHeader>
                        </CardHead>
                        { /* Adding this pf-c-form class is a hack (i think).
                        It looks like We should not use Card inside the Form as it breaks the layout.
                        */ }
                        <CardBody className="pf-c-form">
                            <FormSelect isDisabled={ props.isReadOnly } id={ `actions.${index}.type` } name={ `actions.${index}.type` } label="Type">
                                <FormSelectOption value="" label="Select an Action type"/>
                                { Object.values(ActionType).map(type => <FormSelectOption
                                    key={ type }
                                    label={ capitalize(type) }
                                    value={ type }/>)}
                            </FormSelect>
                            <ActionForm isReadOnly={ props.isReadOnly } action={ action } prefix={ `actions.${index}` }/>
                        </CardBody>
                    </Card>
                </React.Fragment>
            )) }
            <ActionGroup>
                { !props.isReadOnly && <Button variant="primary" onClick={ props.arrayHelpers.handlePush({}) }>+ Add action</Button> }
            </ActionGroup>
        </>
    );
};
