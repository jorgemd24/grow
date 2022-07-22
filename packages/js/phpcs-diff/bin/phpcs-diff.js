#! /usr/bin/env node
/**
 * External dependencies
 */
import shell from 'shelljs';
import path from 'path';

process.env.PATH +=
	path.delimiter + path.join( process.cwd(), 'node_modules', '.bin' );

shell.exec( 'node_modules/woocommerce-grow-phpcs-diff/bin/phpcs-diff.sh' );
