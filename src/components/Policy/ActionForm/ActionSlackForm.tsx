import * as React from 'react';
import { FormTextInput } from '../../Formik/Patternfly';
import { ActionFormProps } from './ActionFormProps';

export const ActionSlackForm = (props: ActionFormProps) => {
    const accountNameOrId = `${props.prefix}.account`;
    const tokenNameOrId = `${props.prefix}.token`;
    const roomNameOrId = `${props.prefix}.room`;
    return (
        <>
            <FormTextInput isReadOnly={ props.isReadOnly } type="text" label="Account" isRequired name={ accountNameOrId } id={ accountNameOrId }/>
            <FormTextInput isReadOnly={ props.isReadOnly } type="text" label="Token" isRequired name={ tokenNameOrId } id={ tokenNameOrId }/>
            <FormTextInput isReadOnly={ props.isReadOnly } type="text" label="Room" isRequired name={ roomNameOrId } id={ roomNameOrId }/>
        </>
    );
};
