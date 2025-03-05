import "../chunk-CC4VKGDC.mjs";

// src/validators/minlength.ts
var minlength = (message = "This field is required!") => {
  return (value) => {
    if (value === null || value === void 0 || value === "") {
      return message;
    }
    if (typeof value === "string" && value.trim() === "") {
      return message;
    }
    return null;
  };
};
export {
  minlength
};
