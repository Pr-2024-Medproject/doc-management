import { FC } from "react";
import ControlButtons from "../../mainPage/controlButtons/ControlButtons";
import FormInput from "../../shared/FormInput";
import {
    medStatementFields,
    medStatementSchema,
} from "../../../validation-schemas/MedStatementSchema";
import { MedStatementModel } from "../../../types/models/MedStatement";
import useCustomFormik from "../../../hooks/useCustomFormik";
import { FormInfo } from "../../../types/Forms";

interface FormMedStatementProps {
    formInfo: FormInfo;
}

const FormMedStatement: FC<FormMedStatementProps> = ({ formInfo }) => {
    const { form, saveHandler, printHandler } = useCustomFormik<MedStatementModel>({
        fields: medStatementFields,
        schema: medStatementSchema,
        saveCallback: (values, _helpers) => {
            console.log(`Form ${formInfo.id} [${formInfo.name}] saved successfully.`);
            console.log(`DATA => `, values);
        },
        printCallback: (values, _helpers) => {
            console.log(`Form ${formInfo.id} [${formInfo.name}] printed successfully.`);
            console.log(`DATA => `, values);
        },
    });

    return (
        <>
            <div className="flex-grow overflow-hidden overflow-y-auto">
                {Object.entries(medStatementFields).map(([fieldName, fieldMeta]) => {
                    return (
                        <FormInput<MedStatementModel>
                            fieldName={fieldName as keyof MedStatementModel}
                            fieldMeta={fieldMeta}
                            form={form}
                            key={fieldName}
                        />
                    );
                })}
            </div>
            <ControlButtons saveCallback={saveHandler} printCallback={printHandler} />
        </>
    );
};

export default FormMedStatement;
