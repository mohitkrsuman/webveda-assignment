export const ControlType = {
  Color: "color",
  String: "string",
  Boolean: "boolean",
  Number: "number",
  Enum: "enum",
} as const

export function addPropertyControls(
  _component: unknown,
  _controls: Record<string, unknown>,
): void {}
