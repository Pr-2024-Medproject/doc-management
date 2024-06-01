import { PatchType, TextRun, patchDocument, IPatch } from "docx";
import { MedStatementModel } from "../types/models/MedStatement";
import { HistoryFormsKeys } from "../types/models/History";

export async function readTemplate(formKey: HistoryFormsKeys) {
    const filePath = `/doc-management/assets/templates/${formKey}.docx`;
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.blob();
}

export async function saveTemplate(doc: Uint8Array, formKey: HistoryFormsKeys) {
    const url = URL.createObjectURL(new Blob([doc.buffer]));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formKey.toLowerCase()}.docx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export async function fillDocTemplate(formKey: HistoryFormsKeys, values: MedStatementModel) {
    const patches = Object.entries(values).reduce((acc, [key, value]) => {
        acc[key] = {
            type: PatchType.PARAGRAPH,
            children: [new TextRun(value)],
        };
        return acc;
    }, {} as Record<string, IPatch>);
    saveTemplate(await patchDocument(await readTemplate(formKey), { patches }), formKey);
}
