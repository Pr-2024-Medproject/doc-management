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
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="name"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="surname"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="patronymic"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="date"
                    fields={medStatementFields}
                    fieldName="birthday"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="address"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="job"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="date"
                    fields={medStatementFields}
                    fieldName="hospitalizationDate"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="date"
                    fields={medStatementFields}
                    fieldName="dischargeDate"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="mainDiagnosis"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="complicationsDiagnosis"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="relatedDiagnosis"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="complaints"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="medicalHistory"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="KT"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="MRT"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="FBC"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="FEGDC"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="histology"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="MDKDecision"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="PT_PHTOperation"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="recommendations"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="date"
                    fields={medStatementFields}
                    fieldName="date"
                    form={form}
                />
                <FormInput<MedStatementModel>
                    type="text"
                    fields={medStatementFields}
                    fieldName="doctor"
                    form={form}
                />
            </div>
            <ControlButtons saveCallback={saveHandler} printCallback={printHandler} />
        </>
    );
};

export default FormMedStatement;
