import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import Icon from './Icon.js';

registerBlockType(metadata, {
	icon: Icon,
	edit: Edit,
	save: () => null
});
