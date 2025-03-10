//types/index.ts

/**
 * Validation types
 */
export interface ValidationRule {
  (value: any): string | null;
}










/**
 * FieldConfig is an object containing fields such as `value`, `validations`, and `errors`.
 */
export interface FieldConfig {
  type?:
    | String
    | String[]
    | Number
    | Number[]
    | Boolean
    | Object
    | File
    | FileList;
  validations?: ValidationRule[];
  value?: any;
  errors?: string[];
}














/**
 * ModelConfig is a dictionary of field configurations.
 * @implements
 * ```ts
 * const model: ModelConfig = reactive({
      propName: {
        value: 'example@email.com',
        validations: [
            required("Field required!"),
            email()
        ],
        errors
      },
    });
```
 */
export interface ModelConfig {
  /**
   *Some description
   */
  [key: string]: FieldConfig;
}
