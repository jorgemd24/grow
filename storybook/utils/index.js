import shell from 'shelljs';
import path from 'node:path';

process.env.PATH += ( path.delimiter + path.join( process.cwd(), 'node_modules', '.bin') );

export { shell };
