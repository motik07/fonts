let text = document.querySelector("#text");
let textResult = document.querySelector("#write_text_result");
// let input = document.querySelector("#input");
let textarea = document.querySelector("#textarea");
let texting = document.querySelector("#texting");
let select = document.querySelector("#select");
let selectDirection = document.querySelector("#select_direction");
text.textContent = `chose font style...`;

select.addEventListener("change", (e) => {
  switch (select.value) {
    case "courier-new":
      text.className = "courier-new";
      textResult.className = "courier-new";
      text.textContent = `font-family: "Courier New";`;
      break;
    case "courier":
      text.className = "courier";
      textResult.className = "courier";
      text.textContent = `font-family: Courier;`;
      break;
    case "monospace":
      text.className = "monospace";
      textResult.className = "monospace";
      text.textContent = `font-family: monospace;`;
      break;
    case "system-ui":
      text.className = "system-ui";
      textResult.className = "system-ui";
      text.textContent = `font-family: system-ui;`;
      break;
    case "apple-system":
      text.className = "apple-system";
      textResult.className = "apple-system";
      text.textContent = `font-family: -apple-system;`;
      break;
    case "ubuntu":
      text.className = "ubuntu";
      textResult.className = "ubuntu";
      text.textContent = `font-family: Ubuntu;`;
      break;
    case "cantarell":
      text.className = "cantarell";
      textResult.className = "cantarell";
      text.textContent = `font-family: Cantarell;`;
      break;
    case "open-sans":
      text.className = "open-sans";
      textResult.className = "open-sans";
      text.textContent = `font-family: "Open Sans";`;
      break;
    case "helvetica-neue":
      text.className = "helvetica-neue";
      textResult.className = "helvetica-neue";
      text.textContent = `font-family: "Helvetica Neue";`;
      break;
    case "sans-serif":
      text.className = "sans-serif";
      textResult.className = "sans-serif";
      text.textContent = `font-family: sans-serif;`;
      break;
    case "verdana":
      text.className = "verdana";
      textResult.className = "verdana";
      text.textContent = `font-family: Verdana;`;
      break;
    case "geneva":
      text.className = "geneva";
      textResult.className = "geneva";
      text.textContent = `font-family: Geneva;`;
      break;
    case "blinkmacsystemfont":
      text.className = "blinkmacsystemfont";
      textResult.className = "blinkmacsystemfont";
      text.textContent = `font-family: BlinkMacSystemFont;`;
      break;
    case "segoe-ui":
      text.className = "segoe-ui";
      textResult.className = "segoe-ui";
      text.textContent = `font-family: "Segoe UI";`;
      break;
    case "roboto":
      text.className = "roboto";
      textResult.className = "roboto";
      text.textContent = `font-family: Roboto;`;
      break;
    case "oxygen":
      text.className = "oxygen";
      textResult.className = "oxygen";
      text.textContent = `font-family: Oxygen;`;
      break;
    case "tahoma":
      text.className = "tahoma";
      textResult.className = "tahoma";
      text.textContent = `font-family: Tahoma;`;
      break;
    case "impact":
      text.className = "impact";
      textResult.className = "impact";
      text.textContent = `font-family: Impact;`;
      break;
    case "haettenschweiler":
      text.className = "haettenschweiler";
      textResult.className = "haettenschweiler";
      text.textContent = `font-family: Haettenschweiler;`;
      break;
    case "arial-narrow-bold":
      text.className = "arial-narrow-bold";
      textResult.className = "arial-narrow-bold";
      text.textContent = `font-family: "Arial Narrow Bold";`; //v
      break;
    case "georgia":
      text.className = "georgia";
      textResult.className = "georgia";
      text.textContent = `font-family: Georgia;`; //v
      break;
    case "arial":
      text.className = "arial";
      textResult.className = "arial";
      text.textContent = `font-family: Arial;`; //v
      break;
    case "cambria":
      text.className = "cambria";
      textResult.className = "cambria";
      text.textContent = `font-family: Cambria;`; //v
      break;
    case "trebuchet-ms":
      text.className = "trebuchet-ms";
      textResult.className = "trebuchet-ms";
      text.textContent = `font-family: "Trebuchet MS";`; //v
      break;
    case "lucida-sans-regular":
      text.className = "lucida-sans-regular";
      textResult.className = "lucida-sans-regular";
      text.textContent = `font-family: "Lucida Sans Regular";`; //v
      break;
    case "gill-sans":
      text.className = "gill-sans";
      textResult.className = "gill-sans";
      text.textContent = `font-family: "Gill Sans";`; //v
      break;
    case "franklin-gothic-medium":
      text.className = "franklin-gothic-medium";
      textResult.className = "franklin-gothic-medium";
      text.textContent = `Franklin Gothic Medium";`; //v
      break;
    case "times-new-roman":
      text.className = "times-new-roman";
      textResult.className = "times-new-roman";
      text.textContent = `font-family: "Times New Roman";`; //v
      break;
    case "times":
      text.className = "times";
      textResult.className = "times";
      text.textContent = `font-family: Times;`; //v
      break;
    case "serif":
      text.className = "serif";
      textResult.className = "serif";
      text.textContent = `font-family: serif;`; //v
      break;
    case "helvetica":
      text.className = "helvetica";
      textResult.className = "helvetica";
      text.textContent = `font-family: Helvetica;`; //v
      break;
    case "cochin":
      text.className = "cochin";
      textResult.className = "cochin";
      text.textContent = `font-family: Cochin;`; //v
      break;
    case "lucida-sans-unicode":
      text.className = "lucida-sans-unicode";
      textResult.className = "lucida-sans-unicode";
      text.textContent = `font-family: "Lucida Sans Unicode";`; //v
      break;
    case "lucida-grande":
      text.className = "lucida-grande";
      textResult.className = "lucida-grande";
      text.textContent = `font-family: "Lucida Grande";`; //v
      break;
    case "lucida-sans":
      text.className = "lucida-sans";
      textResult.className = "lucida-sans";
      text.textContent = `font-family: "Lucida Sans";`; //v
      break;
    case "gill-sans-mt":
      text.className = "gill-sans-mt";
      textResult.className = "gill-sans-mt";
      text.textContent = `font-family: "Gill Sans MT";`; //v
      break;
    case "calibri":
      text.className = "calibri";
      textResult.className = "calibri";
      text.textContent = `font-family: Calibri;`; //vs
      break;
    case "arial-narrow":
      text.className = "arial-narrow";
      textResult.className = "arial-narrow";
      text.textContent = `font-family: "Arial Narrow";`; //v
      break;
    default:
      text.className = "calibri";
      textResult.className = "calibri";
      break;
  }
});

// input.addEventListener("input", () => {
//   textResult.textContent = input.value;
// });

textarea.addEventListener("input", () => {
  textResult.textContent = textarea.value;
});

selectDirection.addEventListener("change", (e) => {
  if (e.target.value === "rtl") {
    texting.className = "result-rtl";
  } else
  if (e.target.value === "ltr") {
    texting.className = "result-ltr";
  } else
  if (e.target.value === "0") {
    texting.style.cssText = "text-align: center !important;";
  } 
});