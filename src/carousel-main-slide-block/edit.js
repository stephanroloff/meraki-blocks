import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {

	const MY_TEMPLATE = [
		['core/image']
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				template={MY_TEMPLATE}
			/>
		</div>
	);
}

