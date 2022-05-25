#! /usr/bin/env node
/**
 * Internal dependencies
 */
import { shell } from '../../utils.js'

shell.exec("jsdoc ./js/src -c .jsdocrc.json");
