import path from 'path';
import { parse } from 'react-error-overlay/lib/utils/parser';
import { map } from 'react-error-overlay/lib/utils/mapper';

let absoluteDir = '';

map(parse(new Error())).then((frames) =>{
  absoluteDir = frames[0]._originalFileName.split('/src')[0];
});

export function getAbsoluteFilePath(fileName) {
  return path.join(absoluteDir, fileName);
}