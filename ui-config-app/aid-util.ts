import axios from "axios";
import { getMetadataService } from "../../../../services/metadata";

type EntityField = any;

type FilterSearchableFieldsOptions = {
  filter: boolean;
  searchFields: any[];
  entityGuid: string;
  map: Record<string, boolean>;
};

export async function getBEFields(entityGuid: string) {
  const filterSearchableFieldsOptions: FilterSearchableFieldsOptions = {
    filter: false,
    entityGuid,
    searchFields: [],
    map: {},
  };
  const entityWithFields = await getMetadataService().getBusinessEntity(entityGuid);
  const filteredFieldsWithoutEmptyFG = entityWithFields.fields.filter(
    (field: any) => !field.allowMany || (field.allowMany && !!field.fields)
  );
  return filteredFieldsWithoutEmptyFG;
}

export async function getPredictedComponents(beFields: EntityField[]) {
  const selectedFields = beFields
    .filter((x) => x.type !== "FieldGroup")
    .map((y) => y.accessPath as string);
  const response = await axios.post(
    "https://ai-designer.herokuapp.com/api/model/components/predict",
    {
      orgId: "test",
      selectedFields,
    }
  );
  return response.data.components as string[];
}

export async function getPredictedLayouts(
  beFields: EntityField[],
  componentIds: string[]
) {
  const selectedFields = beFields
    .filter((x) => x.type !== "FieldGroup")
    .map((y) => y.accessPath as string);
  const response = await axios.post(
    "https://ai-designer.herokuapp.com/api/model/layouts/predict",
    {
      orgId: "test",
      selectedFields,
      selectedComponents: componentIds,
      count: 13,
    }
  );
  return response.data.layouts as { id: string; content: string }[];
}
