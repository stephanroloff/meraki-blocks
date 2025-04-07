import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(props) {
	let {attributes} = props;

	const ALLOWED_BLOCKS = ['create-block/menu-item-block'];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
			/>
		</div>
	);
}
