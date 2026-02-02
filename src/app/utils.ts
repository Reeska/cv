import fs from "node:fs";
import YAML from "yaml";

export const getCurriculum = () => {
  const override = fs.existsSync(`${process.cwd()}/src/data/override-cv.yml`);
  const cv = fs.readFileSync(`${process.cwd()}/src/data/${false ? 'override-' : ''}cv.yml`);

  return YAML.parse(cv.toString());
};

export const getTechnicalSkills = () => fs.readFileSync(`${process.cwd()}/src/data/technical-skills.md`).toString();
