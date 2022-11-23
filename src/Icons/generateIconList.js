// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const directoryPath = path.join(__dirname);

const snakeKebabToPascal = (str) => {
  const camelCase = str
    .toLowerCase()
    .replace(/([-_]([a-z]|[0-9]))/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
  return camelCase[0].toUpperCase() + camelCase.substring(1);
};

const processIcons = () => {
  const iconsFolders = fs.readdirSync(directoryPath);
  console.log("Generating Icon files...");

  if (!iconsFolders) {
    return console.log("Unable to parse Icons directory.");
  }

  const iconLists = {
    imports: [],
    names: [],
  };

  const styleFolders = iconsFolders.filter((file) => !file.includes("."));

  styleFolders.forEach((styleFolder, index) => {
    if (!styleFolder) {
      return console.log("Unable to parse styleFolder.");
    }
    const subdirectory = fs.readdirSync(directoryPath + "/" + styleFolder);
    subdirectory.forEach((file, index) => {
      const iconName = snakeKebabToPascal(file.substring(0, file.indexOf(".")));
      const importString = `import { ReactComponent as ${styleFolder}${iconName}Icon } from './${styleFolder}/${file}';`;
      iconLists.imports.push(importString);
      iconLists.names.push(` ${styleFolder}${iconName}Icon`);
      //const indexString = `export { default as ${directory}${iconName} } from './${directory}/${iconName}';`;
      //indexExportList.push(indexString);
    });
  });

  console.log(iconLists);
  let fileContents = iconLists.imports.join("\n");
  fileContents += `\n\nexport const icons = [\n${iconLists.names.join(
    ",\n"
  )}\n];\n`;
  fs.writeFile(__dirname + "/IconListsGenerated.ts", fileContents, (err) => {
    if (err) throw err;
  });

  //const indexFileContents = indexExportList.join("\n");
  //fs.writeFile(__dirname + "index.ts", indexFileContents + "\n", (err) => {
  //if (err) throw err;
  //});

  console.log("Done.");
};
processIcons();
