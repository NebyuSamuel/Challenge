// JS Challenge
const transformer = function (officeNumber, mobileNumber) {
  // Check if the inputs are not more than two or less than two
  if (arguments.length !== 2) return "The function can only take two inputs";

  // Check if the type of the inputs is string
  if (typeof officeNumber !== "string" || typeof mobileNumber !== "string")
    return "The inputs can only be String type";

  // Get the last for digits for both of them and divide the results
  return Math.floor(
    parseFloat(
      parseFloat(officeNumber.slice(officeNumber.length - 4), 10) /
        parseFloat(mobileNumber.slice(mobileNumber.length - 4), 10),
      10
    )
  );
};

console.log(transformer("+251 (11) 650 7058", "+1 (424) 341-3346"));
