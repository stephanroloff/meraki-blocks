import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';

export default function Edit({ attributes }) {

	const ALLOWED_BLOCKS = [];
	const MY_TEMPLATE = [
		['core/group',{className: 'text-fill-container'}, 
			[
				['core/heading', {className: 'text-foreground', placeholder: 'Add Text...', templateLock: true}],
				['core/heading', {className: 'text-background', placeholder: 'Add Text...', templateLock: false}],
			]
		]
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				template={MY_TEMPLATE}
				allowedBlocks={ALLOWED_BLOCKS}
			/>
		</div>
	);
}
